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

    // const uploadProduct = async (formFields, file, fileName) => {
    //     try {
    //       const {title} = formFields;
      
    //       const imageRef = ref(storage, `images/${fileName}`);
    //       const uploadImage = await uploadBytes(imageRef, file);
      
    //       const newMetadata = {
    //         cachControl: 'public,max-age=2629800000',
    //         contentType: uploadImage.metadata.contextType
    //       };
      
    //       await updateMetadata(imageRef, newMetadata);
      
    //       const publicImageUrl = await getDownloadURL(imageRef)
      
    //       const cupsData = {
    //         title: title,
    //         imageUrl: publicImageUrl,
    //         created_at: serverTimestamp()
    //       }
      
    //       const cupRef = await addDoc(collection(db, 'cups'), cupsData);
      
    //       await updateDoc(cupRef, {
    //         id: cupRef.id
    //       });
      
    //       return cupRef.id;
    //     } catch (error) {
    //       console.log(error)
    //     }
    //   }

    // const handleSubmit = async (e) => {
    //     e.preventDefault()
    //     setDisabled(true);

    //     if (fileUpload) {
    //         const inputFile = fileRef.current;
    //         const res = await uploadProduct(
    //             formFields,
    //             fileUpload[0],
    //             fileUpload[0].name
    //         );

    //         if (res && inputFile) {
    //             setDisabled(false);
    //             setFormFields({title: ''});
    //             setFileUpload(null);

    //             inputFile.value = '';
    //         }
    //     }
    // }

    // const handleChange = (e) => {
    //     const {name, value} = e.target
    //     setFormFields({...formFields, [name]: value})
    // }

    // return (
    //     <>
    //     <form onSubmit={handleSubmit}>
    //         <input
    //         type="text"
    //         name="title"
    //         value={formFields.title || ''}
    //         placeholder='Name'
    //         onChange={handleChange}
    //         />
    //         <input
    //         ref={fileRef}
    //         type="file"
    //         name="name"
    //         accept='.png, .jpg, .jpeg'
    //         onChange={(e) => setFileUpload(e.target.files)}
    //         />
    //         <button type='submit'>Loading</button>
    //     </form>
    //     <ProductCards products={products} />
    //     </>
    // )

    // function dateGet(posts) {
    //     posts.map((post) => {
    //         const dateCorrect = new Date(post.created_at * 1000);
    //         console.log(dateCorrect)
    //     })
    // }
    // dateGet(posts)

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
                {/* <p style={{marginTop: '-8px'}}><small class="text-muted" style={{marginLeft: '1rem'}}>date</small></p> */}
                {/* <p style={{marginTop: '-8px'}}><small class="text-muted" style={{marginLeft: '1rem'}}>Last updated 3 mins ago</small></p> */}
            </Card>
        </FadeIn>
    </Col>
    ))}
    </Row>}
    </>
    )

}
