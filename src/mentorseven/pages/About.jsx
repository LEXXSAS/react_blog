import React from 'react'
import artTwo from '../img/photo400.jpg'
import FadeIn from "react-fade-in";
import noimage from '../img/noimage.jpg'
import MYSkeletonabout from '../components/MYSkeletonabout';

function About() {
    const [load, setLoad] = React.useState(false)

    function activeLoad() {
        setLoad(true)
    }

    return (
<FadeIn>
            {/* <div style={{height: '50px'}}></div> */}
            <div className="full-post">
            <h2>Станица об авторе блога</h2>
            <div style={{marginBottom: '1rem'}}>
            
            {!load && <MYSkeletonabout/>}
            <img style={{width: '630px', height: '375px'}} src={artTwo} alt="About" onLoad={activeLoad} />
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel amet voluptate quos minus odio quam, vitae assumenda ullam. Molestias, harum iure quisquam natus nihil vitae aut tenetur mollitia doloremque maiores!</p>
            </div>
</FadeIn>
    );
}

export default About;
