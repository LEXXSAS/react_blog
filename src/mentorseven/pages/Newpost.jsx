import React, { useEffect, useState } from 'react'
import {Form, Button, Row} from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import {db} from '../firebase'
import { collection, onSnapshot, doc, addDoc, deleteDoc, orderBy, query } from 'firebase/firestore'
import {QueryClient, QueryClientProvider, useQuery} from 'react-query'



// async function fetchAPI() {
//   const response = await axios.get(`https://api.unsplash.com/photos/random/?client_id=${clientIDTwo}`)

//   return response.data.urls.raw + "&fit=crop&w=460&h=250";
// }

function Newpost() {
    // const [userRequest, setUserRequest] = useState({
    //     loading: false
    // })
    const [loading, setLoading] = useState(false);

    const [form, setForm] = useState({
        title: '',
        text: '',
        imageUrl: '',
      })
    //   https://images.unsplash.com/photo-1682955212632-95fc551307cc?ixid=Mnw0NDYyNzF8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODM2NDUyNDk&ixlib=rb-4.0.3&fit=crop&w=460&h=250

        let clientID = 'rGjzWznfC6EPirpykjLXPmZF_fKj6g-EwJRauPvSV70';
        let clientIDTwo = '9tk8OKr9wnZvXVyodmmfQwvy1O6UzHrIaGKAfnu72Cw';

        async function fetchAPI() {
          try {
            await axios.get(`https://api.unsplash.com/photos/random/?client_id=${clientIDTwo}`)
            .then(response => {
                let iUrl = response.data.urls.raw + "&fit=crop&w=460&h=250";
                setLoading(true)
                console.log(iUrl)
                return setForm({
                    title: '',
                    text: '',
                    imageUrl: iUrl
                })
            })
            } catch(error) {
                console.log(error)
                setLoading(true)
                return setForm({
                    title: '',
                    text: '',
                    imageUrl: 'https://images.unsplash.com/photo-1635604392842-69afcee9e0ad?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=250&ixid=MnwxfDB8MXxyYW5kb218MHx8Mnx8fHx8fDE2NDQzNjQ0MDU&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=460'
                })
            }
        }

        const {data,  isLoading, isError } = useQuery('response', fetchAPI )

        if (isLoading) {
          return console.log('Загрузка данных...')
        }



        // old код без React query
        
        // const fetchAPI = async() => {
        //     try {
        //         await axios.get(`https://api.unsplash.com/photos/random/?client_id=${clientIDTwo}`)
        //         .then(response => {
        //             let iUrl = response.data.urls.raw + "&fit=crop&w=460&h=250";
        //             setLoading(true)
        //             console.log(iUrl)
        //             return setForm({
        //                 title: '',
        //                 text: '',
        //                 imageUrl: iUrl
        //             })
        //         })
        //         } catch(error) {
        //             console.log(error)
        //             setLoading(true)
        //             return setForm({
        //                 title: '',
        //                 text: '',
        //                 imageUrl: 'https://images.unsplash.com/photo-1635604392842-69afcee9e0ad?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=250&ixid=MnwxfDB8MXxyYW5kb218MHx8Mnx8fHx8fDE2NDQzNjQ0MDU&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=460'
        //             })
        //         }
        // }

      // useEffect(() => {
      //   fetchAPI()
      // }, [])

    //   const fetchAPI = async() => {
    //   await axios.get(`https://api.unsplash.com/photos/random/?client_id=${clientIDTwo}`)
    //   .then(response => {
    //       let iUrl = response.data.urls.raw + "&fit=crop&w=460&h=250";
    //       console.log(iUrl)
    //       return setForm({
    //           title: '',
    //           text: '',
    //           imageUrl: iUrl
    //       })
    //   })
    // }

    //   const {data, isLoading, isError} = useQuery('data', fetchAPI);

      // if (isLoading) {
      //   return console.log('Загрузка данных...')
      // }

    //   if (isError) {
    //     console.log(isError)
    //     return setForm({
    //         title: '',
    //         text: '',
    //         imageUrl: 'https://images.unsplash.com/photo-1635604392842-69afcee9e0ad?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=250&ixid=MnwxfDB8MXxyYW5kb218MHx8Mnx8fHx8fDE2NDQzNjQ0MDU&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=460'
    //     })
    //   }

    //   if (!data) {
    //     console.log('Нет данных')
    //   }

      
      const recipesCollectionRef = collection(db, 'posts')

      const handleSubmit = e => {
        e.preventDefault();

        if (
          !form.title ||
          !form.text
        ) {
          alert('Заполните все поля')
          return
        }
    
        addDoc(recipesCollectionRef, form)
    
        setForm({
          title: '',
          text: '',
          imageUrl: ''
        })

        fetchAPI()

      }

    return (
<>
      <div className='full-login'>
      <Form onSubmit={handleSubmit} style={{maxWidth: '350px', margin: '0 auto'}} className='container'>
          <Row>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Post title</Form.Label>
          <Form.Control name='title' type="text" placeholder="Введите заголовок" value={form.title} onChange={e => setForm({...form, title: e.target.value})} />
        </Form.Group>
        </Row>
        <Row>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Post text</Form.Label>
          <Form.Control as="textarea" rows={7}  name='text' type="text" placeholder="Введите текст" value={form.text} onChange={e => setForm({...form, text: e.target.value})} />
        </Form.Group>
        </Row>
        <Button variant="primary" type="submit">
          Добавить статью
        </Button>
      </Form>
      </div>
</>
    );
}

export default Newpost;
