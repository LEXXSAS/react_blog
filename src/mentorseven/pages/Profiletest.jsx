import React, {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { Navigate } from 'react-router-dom';

const Profiletest = () => {
    
    if (!window.localStorage.getItem('token')) {
        return <Navigate to='/' />
    }

   return  (
    <div>
       <div>
      <div className="full-post">
      <h2>Вы авторизованы на тестовой странице!</h2>
      <div style={{marginBottom: '1rem'}}>
      </div>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel amet voluptate quos minus odio quam, vitae assumenda ullam. Molestias, harum iure quisquam natus nihil vitae aut tenetur mollitia doloremque maiores!</p>
      <Button>Выйти</Button>
      </div>
      </div>
    </div>
   )


}

export default Profiletest
