import React from 'react'
import {Card, Row, Col, Button} from 'react-bootstrap';
import { AppContext } from '../components/context';
import { Link } from 'react-router-dom';
import useScrollPosition from "../components/useScrollPosition";
import FadeIn from "react-fade-in";
import Skeleton, {SkeletonTheme} from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'
// import Skeleton from '@mui/material/Skeleton';
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
    

    // вариант первый
//     return (
//     <>
//     {!loading ? <h1>Загрузка...</h1>
//     : 
//     <Row xs={1} md={2} className="g-4">
//     {posts.map((post, index) => (
//      <Col key={post.id}>
//      <FadeIn>
//              <Card>
//                  <Link to={`/post/${post.id}`}><Card.Img variant="top" src={post.imageUrl} /></Link>
//                  <Card.Body>
//                  <Card.Title className='cardtitle'>{post.title}</Card.Title>
//                  <Card.Text>
//                      {post.text.substr(0, 150)}...
//                  </Card.Text>
//                  <div className='cardbtns'>
//                  <Link to={`/post/${post.id}`}><Button variant='primary'>Читать</Button></Link>
//                  {isAuth && <Button style={{marginLeft: '0.3rem'}} onClick={() => removePost(post.id)}>Удалить</Button>}
//                  </div>
//                  </Card.Body>
//              </Card>
//          </FadeIn>
//      </Col>
//     ))}
//     </Row>}
//     </>
//     )
// }

// вариант второй
// if (loading)
// return  (
//     <>
//     <Row xs={1} md={2} className="g-4">
//     {posts.map((post, index) => (
//         <Card.Img variant="top" src={post.imageUrl} />
//     ))}
//     </Row>
//     </>
//     )
// else 
// return (
//     <>
//     <Row xs={1} md={2} className="g-4">

//     </Row>
//     </>
// )

    // const postsempty = [
    //     {
    //       id: 1,
    //     },
    //     {
    //       id: 2
    //     },
    //     {
    //       id: 3
    //     },
    //     {
    //       id: 4
    //     }
    //   ];

return  (
    <>
    {!loading ?
    <Row xs={1} md={2} className="g-4">

    {/* <Fakecard />
    <Fakecard />
    <Fakecard />
    <Fakecard />
    <Fakecard />
    <Fakecard />
    <Fakecard />
    <Fakecard /> */}
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

{/* <FadeIn>
<Card>
    <Skeleton animation="wave" height={250} width="460" />
     <Card.Body>
     <Card.Title className='cardtitle'><Skeleton animation="wave" height={60} width={250}/></Card.Title>
     <Card.Text>
     <Skeleton animation="wave" height={125} width={422}/>
     </Card.Text>
     <div className='cardbtns'>
     <Skeleton animation="wave" height={70} width={85}/>
     {isAuth && <Skeleton animation="wave" height={70} width={85}/>}
     </div>
    </Card.Body>
</Card>
</FadeIn> */}

{/* <Row xs={1} md={2} className="g-4">
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
</Row> */}
