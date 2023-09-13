import React from 'react'
import artTwo from '../img/about_img.jpg'
import FadeIn from "react-fade-in";
import noimage from '../img/noimage.jpg'
import MYSkeletonabout from '../components/MYSkeletonabout';
import {Card, Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';

function About() {
    const [load, setLoad] = React.useState(false)

    function activeLoad() {
        setLoad(true)
    }

    return (
<FadeIn>
            <div className="full-post" style={{padding: 0, width: '100%'}}>
            
            {/* <h2>Станица об авторе блога</h2> */}
            {/* <div style={{marginBottom: '1rem'}}>
            {!load && <MYSkeletonabout/>}
            <img style={{width: '630px', height: '375px'}} src={artTwo} alt="About" onLoad={activeLoad} />
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel amet voluptate quos minus odio quam, vitae assumenda ullam. Molestias, harum iure quisquam natus nihil vitae aut tenetur mollitia doloremque maiores!</p> */}
            

            {/* <div style={{marginBottom: '1rem'}}> */}
            
            <Card style={{height: '100%'}}>
                <Card.Body style={{padding: '1rem 0', paddingTop: '8px'}}>
                <Card.Title style={{padding: '1rem 1rem'}} className='cardtitle'>Станица об авторе блога</Card.Title>
                {!load && <MYSkeletonabout/>}
                {<Card.Img style={{height: '375px', borderRadius: '0', display: 'none'}} variant="top" src={artTwo} alt="About" onLoad={activeLoad} />}
                {load && <Card.Img style={{height: 'auto', width: '100%', borderRadius: '0', display: 'block'}} variant="top" src={artTwo} alt="About" />}
                <Card.Text style={{padding: '0 1rem', paddingTop: '1rem'}}>
                Приветствую путник. Меня зовут Алексей.<br/>
                Данный блог построен в процессе обучения React, за основу взят пример с курсов.
                От себя добавил много доработок, касаемых функционала, также правки стилей css для более правильного отображения с сохранением общей стилистики.<br/> 
                Авторизация, а также хранение, выгрузка изображений построена на технологиях Google firebase.
                </Card.Text>
                <div style={{paddingBottom: '8px'}} className='cardbtns'>
                <Link style={{padding: '0 1rem'}} to='/'><Button variant='primary'>Назад</Button></Link>
                </div>
                </Card.Body>
                {/* <p style={{marginTop: '-8px'}}><small class="text-muted" style={{marginLeft: '1rem'}}>date</small></p> */}
            </Card>
            </div>
</FadeIn>
    );
}

export default About;
