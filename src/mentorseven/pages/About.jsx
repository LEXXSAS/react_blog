import React from 'react'
import art from '../img/400-1unsplash.jpg'
import artTwo from '../img/photo400.jpg'

function About() {
    return (
        <div className="full-post">
        <h2>Станица об авторе блога</h2>
        <div style={{marginBottom: '1rem'}}>
        <img src={artTwo} alt="About" />
        </div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel amet voluptate quos minus odio quam, vitae assumenda ullam. Molestias, harum iure quisquam natus nihil vitae aut tenetur mollitia doloremque maiores!</p>
        </div>
    );
}

export default About;
