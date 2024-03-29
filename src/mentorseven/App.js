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
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Login from './pages/Login';
import Profile from './pages/Profile';
import Profiletest from './pages/Profiletest';
import Newpost from './pages/Newpost';
import Updatepost from './pages/Updatepost';
import NewPagination from './components/NewPagination';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'react-toastify/dist/ReactToastify.css';
import {db} from './firebase'
import { collection, onSnapshot, doc, deleteDoc, orderBy, query, getDocs, startAfter, limit, endBefore, limitToLast, getCountFromServer, where } from 'firebase/firestore'
import {ref, deleteObject, getStorage} from 'firebase/storage'
import SearchForm from './components/SearchForm';
import Pagination from './components/Pagination';
import moment from 'moment'
// import { off, get, limitToFirst } from "firebase/database";
function App() {

      const [products, setProducts] = useState([]);
      const [posts, setPosts] = useState([])
      const [allPosts, setAllPosts] = useState([])
      const [searchData, setSearchData] = useState([])
      const [triggerVisible, setTriggerVisible] = useState(false)
      // const [totalItems, setTotalItems] = useState([])

      const [searchPost, setSearchPost] = useState(posts);
      const [search, setSearch] = useState('');

      const [loading, setLoading] = useState(false);
      const [q, setQ] = useState();
      const [qTwo, setQTwo] = useState(null);
      const [qThree, setQThree] = useState(null);
      const [qLast, setQLast] = useState();
      const [fetching, setFetching] = useState(false);
      const [loadingNew, setLoadingNew] = useState(false);
      const [noty, setNoty] = useState(false);
      const [notytwo, setNotyTwo] = useState();
      const [notyDelete, setNotyDelete] = useState();
      const [notyCreate, setNotyCreate] = useState();
      const [notyUserAuth, setNotyUserAuth] = useState();

      const [notifyR, setNotifyRef] = useState(false);

      const [selectedItem, setSelectedItem] = useState(null);
      const [itemOffset, setItemOffset] = useState(0);
      const [currentPage, setCurrentPage] = useState(1);
      const [itemsPerPage, setItemsPerPage] = useState(6);
      const [totalItems, setTotalItems] = useState(0);

      const [newLoading, setNewLoading] = useState(false);
      const [newCurrentPage, setNewCurrentPage] = useState(1);
      const [postsPerPage, setPostsPerPage] = useState(6);

      let location = useLocation();
      // console.log('searchPost:', searchPost)

      // const searchRef = React.useRef(searchPost);
      // React.useEffect(() => {
      //     searchRef.current = searchPost;
      // }, [searchPost])

      // useEffect(() => {
      //   if(searchPost.length !== 0) {
      //     setPosts(searchPost)
      //   } 
      // }, [searchPost])
    

      // количество загружаемых элементов
      let pageSize = 6;
      
      const postsRef = collection(db, 'posts')

      // const first = query(recipesCollectionRef, orderBy('created_at', 'desc'), limit(9))

      async function oldAllData() {
        // const qr = query(postsRef, orderBy('created_at', 'desc'));
        // const resp = await getDocs(qr);
        // const allData = resp.docs.map(data => {return {id: doc.id, viewing: false, ...data.data()}});
        // setAllPosts(allData);

        if (search !== '') {
          const sData = allPosts.filter(element => element.title.toLowerCase().includes(`${search}`))
          setSearchData(sData)
        }
      }

      useEffect(() => {
        const allData = async() => {
          setNewLoading(true);
          const qr = query(postsRef, orderBy('created_at', 'desc'));
          const resp = await getDocs(qr);
          const allData = resp.docs.map(data => {return {id: doc.id, viewing: false, ...data.data()}});
          setAllPosts(allData);
          setNewLoading(false);
        }
        
        allData()
      }, [])

      const indexOfLastPost = currentPage *postsPerPage;
      const indexOfFirstPost = indexOfLastPost - postsPerPage;
      const currentPosts = allPosts.slice(indexOfFirstPost, indexOfLastPost);
      
      useEffect(() => {
        oldAllData()
      }, [search])

      // значение при загрузке страницы - нескоьлко элементов равных limit(number)
      async function fetchData() {
        const startIndex = (currentPage - 1) * itemsPerPage;
        console.log('%ccurrentPage', 'font-weight: bold', currentPage)
        console.log('itemOffset', itemOffset)
        const forLimitToLast = startIndex + itemsPerPage;
        console.log('%cforLimitToLast', 'font-weight: bold', forLimitToLast)
        // const first =  query(postsRef, orderBy('created_at', 'desc'), limitToLast(totalItems));
          await getTotalCount();
          const first = query(postsRef, orderBy('created_at'), limitToLast(forLimitToLast));
          const response = await getDocs(first);
          setLoading(true);
          
          const firstVisible = response.docs.map(data => {return {id: doc.id, viewing: false, ...data.data()}}).slice(0, itemsPerPage).reverse()
          setQ(firstVisible);
  
          setPosts(firstVisible)
  
          const lastVisible = response.docs[response.docs.length - 1];
          setQTwo(lastVisible)
  
          console.log('%cfirstVisible', 'color: yellow-green', firstVisible)
        // } else {
        //   const first = query(postsRef, orderBy('created_at', 'desc'), limit(pageSize));
        //   const response = await getDocs(first);
        //   setLoading(true);
          
        //   const firstVisible = response.docs.map(data => {return {id: doc.id, viewing: false, ...data.data()}}).slice(0, itemsPerPage)
        //   setQ(firstVisible);
  
        //   setPosts(firstVisible)
  
        //   const lastVisible = response.docs[response.docs.length - 1];
        //   setQTwo(lastVisible)
  
        //   console.log('first docs map data', firstVisible);
        //   console.log('firstVisible else', firstVisible)
        // }
        // const first = query(postsRef, orderBy('created_at', 'desc'), limitToLast(itemOffset || totalItems));
        // const first = query(postsRef, orderBy('created_at', 'desc'), limitToLast(startIndex + itemsPerPage || 0));
        // const first = query(postsRef, orderBy('created_at', 'desc'), limit(pageSize));

      }

      // следующее значение
      async function fetchNextData() {

        const next = query(postsRef, orderBy('created_at', 'desc'), startAfter(qTwo || 0), limit(pageSize));
        const responseNext = await getDocs(next);
        setLoadingNew(true);

        if (!responseNext.empty && fetching) {
          console.log('next button on')
          const fV = responseNext.docs.map(data => {return {id: doc.id, viewing: false, ...data.data()}})
          setPosts([...posts, ...fV])
  
          const nextVisible = responseNext.docs.map(data => {return data.data()});
          setQLast(nextVisible);
          console.log("fetchNextData nextVisible docs map", nextVisible);
          console.log('New data is loading')
  
          const newLastVisible = responseNext.docs[responseNext.docs.length - 1];
          setQTwo(newLastVisible)
          const nLV = responseNext.docs[0];
          setQThree(nLV)
          setFetching(false);
        }

        else {
          console.log('next button test ok - data is empty')
          setFetching(false);
          setLoadingNew(false);
        }
        
      }

      // предыдущее значение
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
          // setFetching(false);
        }
        
      }

      useEffect(() => {
        fetchData();
        setFetching(false)
      }, [currentPage])
// scroll download nextData
      useEffect(() => {
        window.addEventListener('scroll', scrollHandler);
        return () => {
          window.removeEventListener('scroll', scrollHandler);
          setFetching(false);
        }
      }, [])

      const scrollHandler = (e) => {
        const documentRect = document.documentElement.getBoundingClientRect();
        if (documentRect.bottom < document.documentElement.clientHeight + 150) {
          setFetching(true);
          setLoadingNew(false)
        } else {
          setFetching(false);
        }
      }

      useEffect(() => {
        if (fetching && (location.pathname === '/') && search === '') {
          // setFetching(true)
          // fetchNextData()
        } else {
          setFetching(false)
        }
      }, [fetching])

     const storage = getStorage();

      const removePost = (post) => {
        deleteDoc(doc(db, 'posts', post.id));

        const imageRef = ref(storage, post.imageUrl);

        deleteObject(imageRef).then(() => {
          console.log('Файл удалён!');
          setNotyDelete('delete ok');
          fetchNextData();
          fetchData();
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

      const searchText = 'Мир';

      const qr = query(postsRef, orderBy('created_at', 'desc'));
      // const qS = query(postsRef, where('title', '==', `${searchText.toLocaleLowerCase()}`));
      // useEffect(() => {
        
        async function getTotalCount() {
          
          const snapshot = await getCountFromServer(qr);
          const res = snapshot.data().count;
          setTotalItems(res)
          
        }

        useEffect(() => {
          getTotalCount()
        }, [])

      // useEffect(() => {
      //     onSnapshot(qr, snapshot => {
      //     setLoading(true);
      //     setAllPosts(snapshot.docs.map(doc => {
      //       setTotalItems(allPosts.length)
      //       return {
      //         id: doc.id,
      //         viewing: false,
      //         ...doc.data()
      //       }
      //   }))
      // })
      // }, [totalItems])

      // console.log(allPosts)

      let {pathname} = useLocation();
      let id = pathname.split('/post/')[1]
      const pathName = pathname.replace(`${id}`, '');

      const firstPageFunc = () => {
        if (pathName === '/') {
          setCurrentPage(1)
          if (currentPage === 1) {
            fetchData()
          }
        }
      }

      const paginate = pageNumber => setCurrentPage(pageNumber);

      const onPageChange =(pageNumber) => {
        setCurrentPage(pageNumber + 1); 
      }

      const onPerPageChange = (perPage) => {
        setItemsPerPage(perPage)
      };

    return (
        <AppContext.Provider value={{posts, setPosts, removePost, loading, setLoading, products, setProducts, qLast, fetchData, fetchNextData, fetchPrevData, pageSize, fetching, setFetching, loadingNew, setNoty, notifyR, setNotifyRef, notytwo, setNotyTwo, notyDelete, notyCreate, setNotyCreate, setNotyDelete, notyUserAuth, setNotyUserAuth, searchPost, setSearchPost, search, setSearch, itemsPerPage, totalItems, onPageChange, onPerPageChange, itemOffset, setItemOffset, allPosts, searchData, setItemsPerPage, triggerVisible, setTriggerVisible, firstPageFunc}} >

        <div className='d-flex flex-column min-vh-100'>

            <Header />
           <div className='container'>
            <Pagination currentPage={currentPage} />
            {/* <NewPagination postsPerPage={postsPerPage} totalPosts={allPosts.length} currentPage={currentPage} paginate={paginate} /> */}
            <SearchForm />
            </div>
      
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
              <Route path='/updatepost/:id' element={<Updatepost />} />
              <Route path='/not-found' element={<NotFound />} />
              <Route path='*' element={<Navigate to="/not-found" />} />
            </Route>
          </Routes>

        </div>
          {/* <Pagination /> */}
           <Footer />

        {showButton && (
        <div onClick={scrollToTop} className="upclick">&#9650;</div>
        )}

        </div>
        </AppContext.Provider>
    )
}

export default App;
