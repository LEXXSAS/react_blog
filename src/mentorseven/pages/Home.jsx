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
import CardPost from '../components/CardPost';

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

    const mySkeletonCount = [1, 2, 3, 4, 5, 6];

return  (
    <div>
    {!loading ? 
    <Row xs={1} md={2} className="g-4">
    {mySkeletonCount.map(mySkelItem => 
    <MYSkeleton key={mySkelItem} />
    )}
    </Row>
    : 
    <Row xs={1} md={2} className="g-4">
    {newArray.map((post, index) => (
        <CardPost props={{post, moment, removePost, isAuth}} />
    ))}
    </Row>}
    <div className='cardbtns' style={{textAlign: 'center', marginTop: '1rem'}}>
    {/* <button style={{textAlign: 'center', width: '120px'}} onClick={fetchPrevData}>Previous page</button> */}
    {/* <button  style={{textAlign: 'center', marginLeft: '0.3rem', width: '120px'}} onClick={fetchNextData}>Показать ещё</button> */}
    </div>
    </div>
    )
}
