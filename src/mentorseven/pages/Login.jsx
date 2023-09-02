import React, { useEffect, useState } from 'react'
import {Form, Button, Row, InputGroup} from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';
import { onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import {auth} from '../../firebase'
import FadeIn from "react-fade-in";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faEyeSlash, faEye, faEnvelope, faEnvelopeCircleCheck} from '@fortawesome/free-solid-svg-icons'
import { AppContext } from '../components/context';

const Login = () => {

  const {setNotyUserAuth} = React.useContext(AppContext)

    const navigate = useNavigate();

    const [fields, setFields] = useState({
        email: '',
        password: ''
    });

    const handleChangeInput = (event) => {
        setFields({
            ...fields,
            [event.target.name]: event.target.value,
        });
    }

    const onSubmit = async (event) => {
        event.preventDefault();

        signInWithEmailAndPassword(auth, fields.email, fields.password)
        .then((userCredential) => {
          setNotyUserAuth(userCredential)
          navigate('/profile')
          window.localStorage.setItem('token', userCredential.user.accessToken);
          window.localStorage.setItem('email', userCredential.user.email);
        }).catch((error) => {
          console.log(error);
          alert('Ошибка! Неверная почта или пароль')
        });

    }

    const [authUser, setAuthUser] = useState(null);
  
    useEffect(() => {
      const listen = onAuthStateChanged(auth, (user) => {
        if (user) {
          setAuthUser(user)
          navigate('/profile')
        } else {
          setAuthUser(null)
          navigate('/login')
          signOut(auth)
            console.log('вы вышли')
            window.localStorage.removeItem('token');
            window.localStorage.removeItem('email');
        }
      })
  
      return () => {
        listen();
      }
      
    }, [])


    const [show, setShow] = useState(true);

    const showHide = () => {
      setShow(!show);
    }

    // const [isAuth, setIsAuth] = React.useState(false);

    // React.useEffect(() => {
    //     if (window.localStorage.getItem('email') === 'alex.s.86@mail.ru') {
    //         setIsAuth(true)
    //         navigate('/profile')
    //     } else {
    //         setIsAuth(false)
    //         navigate('/login')
    //     }
    // }, [])

  return (
<FadeIn>
      <div className='full-login'>
      <Form onSubmit={onSubmit} style={{maxWidth: '350px', margin: '0 auto'}} className='container'>
          <Row>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <InputGroup>
          <Form.Control onChange={handleChangeInput} name='email' type="email" value={fields.email} placeholder="Введите адрес почты" />
          <InputGroup.Text id='basic-addon1'>
          <FontAwesomeIcon size='lg' icon={faEnvelope} />
          </InputGroup.Text>
          </InputGroup>
        </Form.Group>
        </Row>
        <Row>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <InputGroup>
          {show === true ? <Form.Control onChange={handleChangeInput} name='password' type='password' value={fields.password} placeholder="Введите пароль" /> :
          <Form.Control onChange={handleChangeInput} name='password' type='text' value={fields.password} placeholder="Введите пароль" />}
          <InputGroup.Text id='basic-addon1' onClick={showHide}>
          {show === true ? <FontAwesomeIcon icon={faEyeSlash} /> :
          <FontAwesomeIcon icon={faEye} />}
          </InputGroup.Text>
          </InputGroup>
        </Form.Group>
        </Row>
        <Button variant="primary" type="submit">
          Войти
        </Button>
      </Form>
      </div>
</FadeIn>
  )
}

export default Login
