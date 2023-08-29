import React from 'react'
import { useState, useEffect} from 'react';
import {Home} from './pages/Home'
import Header from './components/Header';
import About from './pages/About';
import NotFound from './pages/NotFound';
import Fullpost from './pages/Fullpost';
import Footer from './pages/Footer';
import Layout from './components/Layout';
import { AppContext } from './components/context';
import { Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Profile from './pages/Profile';
import Profiletest from './pages/Profiletest';
import Newpost from './pages/Newpost';
import {db} from './firebase'
import { collection, onSnapshot, doc, addDoc, deleteDoc, orderBy, query, getDocs, startAfter, limit, endBefore, endAt, limitToLast } from 'firebase/firestore'
import {ref, deleteObject, getStorage} from 'firebase/storage'


function App() {

      const [products, setProducts] = useState([]);
      const [posts, setPosts] = useState([])

      const [loading, setLoading] = useState(false);
      const [q, setQ] = useState();
      const [qTwo, setQTwo] = useState(null);
      const [qThree, setQThree] = useState(null);
      const [qLast, setQLast] = useState();
      // const [form, setForm] = useState({
      //   title: '',
      //   text: '',
      //   imageUrl: '',
      // })

      let pageSize = 3;
      
      const postsRef = collection(db, 'posts')
      // const first = query(recipesCollectionRef, orderBy('created_at', 'desc'), limit(9))
      // const q = query(recipesCollectionRef, orderBy('created_at', 'desc'), limit(9))

      async function fetchData() {
        const first = query(postsRef, orderBy('created_at', 'desc'), limit(pageSize));
        const response = await getDocs(first);
        setLoading(true);
        
        const firstVisible = response.docs.map(data => {return {id: doc.id, viewing: false, ...data.data()}})
        setQ(firstVisible);

        setPosts(firstVisible)

        const lastVisible = response.docs[response.docs.length - 1];
        setQTwo(lastVisible)
        // const lastVisible2 = response.docs[0];
        // setQThree(lastVisible2)

        console.log('first docs map data', firstVisible);
        console.log("last docs id", lastVisible);

        console.log('posts', firstVisible)
      }

      async function fetchNextData() {
        const next = query(postsRef, orderBy('created_at', 'desc'), startAfter(qTwo || 0), limit(pageSize));
        const responseNext = await getDocs(next);

        if (!responseNext.empty) {
          console.log('next button on')
          const fV = responseNext.docs.map(data => {return {id: doc.id, viewing: false, ...data.data()}})
          setPosts([...posts, ...fV])
  
          const nextVisible = responseNext.docs.map(data => {return data.data()});
          setQLast(nextVisible);
          console.log("next nextVisible docs map", nextVisible);
  
          const newLastVisible = responseNext.docs[responseNext.docs.length - 1];
          setQTwo(newLastVisible)
          const nLV = responseNext.docs[0];
          setQThree(nLV)
        }

        else {
          console.log('next button test ok - data is empty')
        }
        
      }

      async function fetchPrevData() {
        
        const next = query(postsRef, orderBy('created_at', 'desc'), endBefore(qThree || 0), limitToLast(pageSize));
        const responseNext = await getDocs(next);

        if (!responseNext.empty && qThree !== null) {
          console.log('prev button on')
          const fV = responseNext.docs.map(data => {return {id: doc.id, viewing: false, ...data.data()}})
          setPosts(fV)
  
          const prevVisible = responseNext.docs.map(data => {return data.data()});
          setQLast(prevVisible);
          console.log("prev docs map", prevVisible);
  
          const newLastVisible = responseNext.docs[responseNext.docs.length - 1];
          setQTwo(newLastVisible)
  
          const newLastVisibleThree = responseNext.docs[0];
          setQThree(newLastVisibleThree)
        }

        else  {
          console.log('prev button test ok - data is empty')
        }
        
      }

      //endBefore()

      useEffect(() => {
        fetchData();
      }, [])



      // useEffect(() => {
      //     onSnapshot(q, snapshot => {
      //     setLoading(true);
      //     setPosts(snapshot.docs.map(doc => {
      //       return {
      //         id: doc.id,
      //         viewing: false,
      //         ...doc.data()
      //       }
      //   }))
      // })
      // }, [])


     const storage = getStorage();

      const removePost = (post) => {
        deleteDoc(doc(db, 'posts', post.id));

        const imageRef = ref(storage, post.imageUrl);

        deleteObject(imageRef).then(() => {
          console.log('Файл удалён!');
        }).catch((error) => {
          console.log(error)
        })

      }

      const [showButton, setShowButton] = useState(false);

      useEffect(() => {
        window.addEventListener("scroll", () => {
          if (window.scrollY > 250) {
            setShowButton(true);
          } else {
            setShowButton(false);
          }
        });
      }, []);

      const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
        
      };

    return (
        <AppContext.Provider value={{posts, removePost, loading, setLoading, products, setProducts, qLast, fetchData, fetchNextData, fetchPrevData, pageSize}} >
        <div className='d-flex flex-column min-vh-100'>
          

            <Header />

        <div className='container'>

          <Routes>
            <Route path='/' element={<Layout />}>
              <Route path='/' element={<Home />} />
              <Route path='/profile' element={<Profile />} />
              <Route path='/profiletest' element={<Profiletest />} />
              <Route path='/login' element={<Login />} />
              <Route path='/newpost' element={<Newpost />} />
              <Route path='/about' element={<About />} /> 
              <Route path='/post/:id' element={<Fullpost />} />
              <Route path='/not-found' element={<NotFound />} />
              <Route path='*' element={<Navigate to="/not-found" />} />
            </Route>
          </Routes>

        </div>
        
           <Footer />

        {showButton && (
        <div onClick={scrollToTop} className="upclick">&#9650;</div>
        )}

        </div>
        </AppContext.Provider>
    )
}

export default App;
