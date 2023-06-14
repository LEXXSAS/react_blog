import React from 'react'
import {Card, Row, Col, Button} from 'react-bootstrap';
import { AppContext } from '../components/context';
import { Link } from 'react-router-dom';
import useScrollPosition from "../components/useScrollPosition";
import FadeIn from "react-fade-in";
import Skeleton, {SkeletonTheme} from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'
import noimage from '../img/noimage.jpg'
import Fakecard from '../components/Fakecard';
import MYSkeleton from '../components/mySkeleton';

export const Home = () => {

    const {posts, removePost, loading, setLoading} = React.useContext(AppContext)

    const loadingRef = React.useRef(loading);

    React.useEffect(() => {
        loadingRef.current = loading;
    }, [loading])
    

    const [isAuth, setIsAuth] = React.useState(false);

    React.useEffect(() => {
        if (window.localStorage.getItem('email') === 'alex.s.86@mail.ru') {
            setIsAuth(true)
        } else {
            setIsAuth(false)
        }
    }, [])

    useScrollPosition("Home")

return  (
    <>
    {!loading ?
    <Row xs={1} md={2} className="g-4">
    <MYSkeleton />
    <MYSkeleton />
    <MYSkeleton />
    <MYSkeleton />
    <MYSkeleton />
    <MYSkeleton />
    <MYSkeleton />
    <MYSkeleton />
    </Row>
    : 
    <Row xs={1} md={2} className="g-4">
    {posts.map((post, index) => (
    <Col key={post.id}>
    <FadeIn>
            <Card>
                <Link to={`/post/${post.id}`}><Card.Img variant="top" src={post.imageUrl} /></Link>
                <Card.Body>
                <Card.Title className='cardtitle'>{post.title}</Card.Title>
                <Card.Text>
                    {post.text.substr(0, 150)}...
                </Card.Text>
                <div className='cardbtns'>
                <Link to={`/post/${post.id}`}><Button variant='primary'>Читать</Button></Link>
                {isAuth && <Button style={{marginLeft: '0.3rem'}} onClick={() => removePost(post.id)}>Удалить</Button>}
                </div>
                </Card.Body>
            </Card>
        </FadeIn>
    </Col>
    ))}
    </Row>}
    </>
    )

}
