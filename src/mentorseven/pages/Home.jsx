import React from 'react'
import {Card, Row, Col, Button} from 'react-bootstrap';
import { AppContext } from '../components/context';
import { Link } from 'react-router-dom';
import useScrollPosition from "../components/useScrollPosition";
import FadeIn from "react-fade-in";
import 'react-loading-skeleton/dist/skeleton.css'
import MYSkeleton from '../components/mySkeleton';
import {storage, auth } from '../firebase'
import {ref, uploadBytes, listAll, getDownloadURL} from 'firebase/storage'
import { useState } from 'react';
import {v4} from 'uuid'
import { useEffect } from 'react';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import moment from 'moment'
// import Skeleton, {SkeletonTheme} from 'react-loading-skeleton';
// import noimage from '../img/noimage.jpg'
// import Fakecard from '../components/Fakecard';
// import ProductCards from '../components/productCards';
// import { LazyLoadImage } from "react-lazy-load-image-component";
// import infiniteScroll from 'react-infinite-scroll-component'

export const Home = () => {
    const {posts, removePost, loading, fetching, searchPost, fetchNextData} = React.useContext(AppContext)

    const loadingRef = React.useRef(loading);
    const fetchingRef = React.useRef(fetching);
    const postsRef = React.useRef(posts);

    React.useEffect(() => {
        loadingRef.current = loading;
    }, [loading])

    React.useEffect(() => {
        fetchingRef.current = fetching;
    }, [fetching])

    React.useEffect(() => {
        postsRef.current = posts;
    }, [posts])

    const [isAuth, setIsAuth] = React.useState(false);

    const [newArray, setNewArray] = React.useState([]);

    React.useEffect(() => {
        if (window.localStorage.getItem('email') === 'alex.s.86@mail.ru') {
            setIsAuth(true)
        } else {
            setIsAuth(false)
        }
    }, [])

    React.useEffect(() => {
        const listen = onAuthStateChanged(auth, (user) => {
          if (user) {
            setIsAuth(true)
          } else {
            setIsAuth(false)
            signOut(auth)
            console.log('вы вышли')
            window.localStorage.removeItem('token');
            window.localStorage.removeItem('email');
          }
        })

        return () => {
          listen();
        }
      }, [])

    useScrollPosition("Home")

    // if (fetching) {
    //     console.log('fetching ...')
    // }

    // useEffect(() => {
    //       if (window.pageYOffset > 50) {
    //         window.scrollTo(0, 0);
    //       } else {
    //       }
    //   }, []);
    
    const [imageUpload, setImageUpload] = useState(null);
    const [imageList, setImageList] = useState([]);

    const imageListRef = ref(storage, 'images/')
    const handleUpload = () => {
        if (imageUpload == null) return;
        const imageRef = ref(storage, `images/${imageUpload.name + v4()}`);
        uploadBytes(imageRef, imageUpload).then((snapshot) => {
            getDownloadURL(snapshot.ref).then((url) => {
                setImageList((prev) => [...prev, url]);
            })
            console.log('изображение загружено')
        })
    }

    useEffect(() => {
        listAll(imageListRef).then((response) => {
            response.items.forEach((item) => {
                getDownloadURL(item).then((url) => {
                    setImageList((prev) => [...prev, url])
                })
            })
        })
    }, [])

    useEffect(() => {
        if(searchPost.length !== 0) {
            setNewArray(searchPost)
        } else {
            setNewArray(posts)
        }
    }, [posts, searchPost])

// new method loading and set images in firebase & firestore
    const fileRef = React.useRef(null)
    const [fileUpload, setFileUpload] = useState(null);
    const [formFields, setFormFields] = useState({
        title: '',
    });
    const [disabled, setDisabled] = useState(false);
    // console.log(searchPost.length)
// нужно добавить рендеринг скелетонов динамически по количеству загружаемого контента за раз равному pageSize
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
    </Row>
    : 
    <Row xs={1} md={2} className="g-4">
    {newArray.map((post, index) => (
    <Col key={post.id}>
    <FadeIn>
    <Card style={{height: '490px'}} >
        <Link style={{borderRadius: '6px 6px 0 0', overflow: 'hidden'}}
        to={`/post/${post.id}`}>
            <Card.Img style={{width: '100%', height: '250px'}} variant="top"
            src={post.imageUrl}
            />
        </Link>
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
    ))}
    </Row>}
    <div className='cardbtns' style={{textAlign: 'center', marginTop: '1rem'}}>
    {/* <button style={{textAlign: 'center', width: '120px'}} onClick={fetchPrevData}>Previous page</button> */}
    {/* <button  style={{textAlign: 'center', marginLeft: '0.3rem', width: '120px'}} onClick={fetchNextData}>Показать ещё</button> */}
    </div>
    </>
    )
}
