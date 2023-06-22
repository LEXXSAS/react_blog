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
import { collection, onSnapshot, doc, addDoc, deleteDoc, orderBy, query, getDocs } from 'firebase/firestore'


function App() {

      const [products, setProducts] = useState([]);
      const [posts, setPosts] = useState([])

      const [loading, setLoading] = useState(false);
      
      const [form, setForm] = useState({
        title: '',
        text: '',
        imageUrl: '',
      })
    
      // const [popupActive, setPopupActive] = useState([])

      // const [on, setOn] = useState(false); 

      // const recipesCollectionRef = collection(db, 'posts')
      // const q = query(recipesCollectionRef, orderBy('title', 'asc'))
      const recipesCollectionRef = collection(db, 'posts')
      const q = query(recipesCollectionRef, orderBy('title', 'asc'))

      useEffect(() => {

        onSnapshot(q, snapshot => {
          setLoading(true);
          setPosts(snapshot.docs.map(doc => {
            return {
              id: doc.id,
              viewing: false,
              ...doc.data()
            }
        }))
      })
      }, [])

    //   const findAll = async () => {
    //     const q = query(recipesCollectionRef, orderBy('title', 'asc'))
    
    //     onSnapshot(q, snapshot => {
    //       setLoading(true);
    //       setPosts(snapshot.docs.map(doc => {
    //         return {
    //           id: doc.id,
    //           viewing: false,
    //           ...doc.data()
    //         }
    //     }))
    //   })
    
      
    // }
  
    //   const fetchData = async () => {
    //       await findAll()
    //       setLoading(true)
    //   }
  
    //   useEffect(() => {
    //       fetchData()
    //   }, [])

      const removePost = (id) => {
        deleteDoc(doc(db, 'posts', id))
      }

      const [showButton, setShowButton] = useState(false);

      useEffect(() => {
        window.addEventListener("scroll", () => {
          if (window.pageYOffset > 250) {
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
      

    // let id = window.location.pathname.split('/post/')[1]
    
    return (
        <AppContext.Provider value={{posts, removePost, loading, setLoading, products, setProducts}} >
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
