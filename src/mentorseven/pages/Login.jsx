import React, { useEffect, useState } from 'react'
import {Form, Button, Row} from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';
import { onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';
import {auth} from '../../firebase'
import FadeIn from "react-fade-in";

const Login = () => {

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
          navigate('/profile')
          window.localStorage.setItem('token', userCredential.user.accessToken);
          window.localStorage.setItem('email', userCredential.user.email);
        }).catch((error) => {
          console.log(error);
          alert('Ошибка! Неверная почта или пароль')
        });

        // const resp = await fetch(`https://mentor.archakov.im/api/mock/login?email=${fields.email}&password=${fields.password}`);
        // if (resp.ok) {
        //     const {token} = await resp.json();
        //     window.localStorage.setItem('token', token);
        //     navigate('/profiletest')
        // } else {
        //     alert('Ошибка! Неверная почта или пароль')
        // }

    }

    
    const [authUser, setAuthUser] = useState(null);
  
    useEffect(() => {
      const listen = onAuthStateChanged(auth, (user) => {
        if (user) {
          setAuthUser(user)
          navigate('/profile')
        } else {
          setAuthUser(null)
        }
      })
  
      return () => {
        listen();
      }
      
    }, [])

  return (
<FadeIn>
      {/* <div style={{height: '50px'}}></div> */}
      <div className='full-login'>
      <Form onSubmit={onSubmit} style={{maxWidth: '350px', margin: '0 auto'}} className='container'>
          <Row>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control onChange={handleChangeInput} name='email' type="email" value={fields.email} placeholder="Введите адрес почты" />
        </Form.Group>
        </Row>
        <Row>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control onChange={handleChangeInput} name='password' type="password" value={fields.password} placeholder="Введите пароль" />
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
