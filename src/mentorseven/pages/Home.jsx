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
import {storage, db, auth } from '../firebase'
import { collection, getFirestore, onSnapshot, doc, addDoc, deleteDoc, orderBy, query, getDocs, serverTimestamp, updateDoc, DocumentData, Timestamp } from 'firebase/firestore'
import {getStorage, uploadBytesResumable, ref, uploadBytes, listAll, getDownloadURL, updateMetadata} from 'firebase/storage'
import { useState } from 'react';
import {v4} from 'uuid'
import { useEffect } from 'react';
import ProductCards from '../components/productCards';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import moment from 'moment'


export const Home = () => {

    const {posts, removePost, loading, setLoading, products, setProducts} = React.useContext(AppContext)

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
                    // console.log(url)
                })
            })
        })
    }, [])

    // new method loading and set images in firebase & firestore

    const fileRef = React.useRef(null)
    const [fileUpload, setFileUpload] = useState(null);
    const [formFields, setFormFields] = useState({
        title: '',
    });
    const [disabled, setDisabled] = useState(false);

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
            <Card style={{height: '490px'}}>
                <Link to={`/post/${post.id}`}><Card.Img variant="top" src={post.imageUrl} /></Link>
                <Card.Body>
                <Card.Title className='cardtitle'>{post.title}</Card.Title>
                <Card.Text>
                    {post.text.substr(0, 100)}...
                </Card.Text>
                <div className='cardbtns'>
                <Link to={`/post/${post.id}`}><Button variant='primary'>Читать</Button></Link>
                {isAuth && <Button style={{marginLeft: '0.3rem'}} onClick={() => removePost(post)}>Удалить</Button>}
                </div>
                </Card.Body>
                <Card.Footer className="text-muted">{moment(post.created_at.toDate()).format('DD/MM/YYYY').replaceAll('/', '.')}</Card.Footer>
            </Card>
        </FadeIn>
    </Col>
    ))}
    </Row>}
    </>
    )

}
