import React from 'react'
import {Card, Row, Col, Button} from 'react-bootstrap';
import FadeIn from "react-fade-in";
import noimage from '../img/noimage.jpg'
import Skeleton, {SkeletonTheme} from 'react-loading-skeleton';

const Fakecard = () => {
  return (
    <>
    <Col>
    {/* <FadeIn> */}
            <Card>
                <Card.Img variant="top" src={noimage} />
                <Card.Body>
                <Card.Title className='cardtitle'>Загрузка...</Card.Title>
                <Card.Text>
                    Загрузка...
                </Card.Text>
                <div className='cardbtns'>
                <Button disabled variant='primary'>Читать</Button>
                </div>
                </Card.Body>
            </Card>
    {/* </FadeIn> */}
    </Col>
    </>
  )
}

export default Fakecard
