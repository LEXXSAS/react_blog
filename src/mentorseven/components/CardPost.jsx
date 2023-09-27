import React from 'react'
import {Card, Button, Col} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useInView } from 'react-intersection-observer'
import FadeIn from "react-fade-in";

const CardPost = ({props}) => {
const {post, moment, removePost, isAuth} = props;

    const { ref, inView } = useInView({
        threshold: 0.5,
        triggerOnce: true,
      });

  return (
    <Col key={post.id} >
    <FadeIn>
    <Card ref={ref} style={{height: '490px'}} >
    {inView ? <Link style={{borderRadius: '6px 6px 0 0', overflow: 'hidden'}}
    to={`/post/${post.id}`}>
        <Card.Img style={{width: '100%', height: '250px'}} variant="top"
        src={post.imageUrl}
        />
    </Link> : <div className='photo-card__skeleton'></div>}
    <Card.Body>
        <Card.Title
            className='cardtitle'>
            {post.title}
        </Card.Title>
        <Card.Text>
            {post.text.substr(0, 100)}...
        </Card.Text>
        <div className='cardbtns'>
            <Link to={`/post/${post.id}`}>
            <Button variant='primary'><i className="bi bi-book"></i></Button>
            </Link>
            {isAuth &&
            <Link to={`/updatepost/${post.id}`}>
                <Button variant='primary' style={{marginLeft: '0.3rem'}}>
                <i className="bi bi-pencil-square"></i>
                </Button>
            </Link>}
            {isAuth &&
            <Button
            className='delbtn' style={{marginLeft: '0.3rem'}}
            onClick={() => removePost(post)}>
            Удалить
            <i className="bi bi-x-square" style={{marginLeft: '6px'}}></i>
            </Button>}
        </div>
    </Card.Body>
    <Card.Footer
        className="text-muted">
        {moment(post.created_at.toDate()).format('DD/MM/YYYY').replaceAll('/', '.')}
    </Card.Footer>
</Card>
</FadeIn>
</Col>
  )
}

export default CardPost
