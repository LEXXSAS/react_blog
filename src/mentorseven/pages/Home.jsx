import React from 'react'
import {Card, Row, Col, Button} from 'react-bootstrap';
import { AppContext } from '../components/context';
import { Link } from 'react-router-dom';
import useScrollPosition from "../components/useScrollPosition";

export const Home = () => {

    const {posts, removePost} = React.useContext(AppContext)

    const [isAuth, setIsAuth] = React.useState(false);

    React.useEffect(() => {
        if (window.localStorage.getItem('email') === 'alex.s.86@mail.ru') {
            setIsAuth(true)
        } else {
            setIsAuth(false)
        }
    }, [])

    useScrollPosition("Home")

    return (
        
<>
            {/* <div className='container' style={{height: '50px', padding: '0px 1.8rem'}}>
                <Button disabled>Добавить статью</Button>
            </div> */}
            <Row xs={1} md={2} className="g-4">
            {posts.map((post, index) => (
                <Col key={post.id}>
               
                <Card>
                    <Link to={`/post/${post.id}`}><Card.Img variant="top" src={post.imageUrl} /></Link>
                    <Card.Body>
                    <Card.Title className='cardtitle'>{post.title}</Card.Title>
                    <Card.Text>
                        {post.text.substr(0, 150)}...
                    </Card.Text>
                    <Link to={`/post/${post.id}`}><Button variant='primary'>Читать</Button></Link>
                    {isAuth && <Button style={{marginLeft: '0.3rem'}} onClick={() => removePost(post.id)}>Удалить</Button>}
                    </Card.Body>
                </Card>
                </Col>
            ))}
        </Row>
</>
    )
}
