import React, {useState, useEffect} from 'react'
import { onAuthStateChanged, signOut } from 'firebase/auth'
import {auth} from '../../firebase'
import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import FadeIn from "react-fade-in";

const Profile = () => {

  const [authUser, setAuthUser] = useState(null);
  let navigate = useNavigate();

  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user)
      } else {
        setAuthUser(null)
        navigate('/login')
      }
    })

    return () => {
      listen();
    }
    
  }, [])

  let name = null;

  if (authUser !== null) {
    name = authUser;
  } else {
    return;
  }

  const userSignOut = () => {
    signOut(auth).then(() => {
      console.log('вы вышли')
      window.localStorage.removeItem('token');
      window.localStorage.removeItem('email');
    }).catch(error => console.log(error))
  }

   return  (
    <FadeIn>
    <div>
       <div>
      <div className="full-post">
      <h2>Вы авторизованы!</h2>
      <div style={{marginBottom: '1rem'}}>
      </div>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel amet voluptate quos minus odio quam, vitae assumenda ullam. Molestias, harum iure quisquam natus nihil vitae aut tenetur mollitia doloremque maiores!</p>
      <p>{`Рады тебя видеть ${name.email.split('@')[0]}`}</p>
      <Button onClick={userSignOut}>Выйти</Button>
      </div>
      </div>
    </div>
    </FadeIn>
   )


}

export default Profile
