import React, { useEffect, useState } from 'react'
import {Form, Button, Row} from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import {storage, db} from '../firebase'
import { collection, onSnapshot, doc, addDoc, deleteDoc, orderBy, query } from 'firebase/firestore'
import {QueryClient, QueryClientProvider, useQuery} from 'react-query'
import { AppContext } from '../components/context';
import FadeIn from "react-fade-in";
import { Checkbox, FormControlLabel } from '@mui/material';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import { getFirestore, getDocs, serverTimestamp, updateDoc, DocumentData } from 'firebase/firestore'
import {getStorage, uploadBytesResumable, ref, uploadBytes, listAll, getDownloadURL, updateMetadata} from 'firebase/storage'

function Updatepost() {

  const {fetchNextData, fetchData} = React.useContext(AppContext)

    const [autoImage, setAutoImage] = useState(false);

    const handleChangeChecked = (event) => {
      setAutoImage(event.target.checked)
      window.localStorage.setItem('autoImage', event.target.checked)
    }

    useEffect(() => {
      const data = window.localStorage.getItem('autoImage') === 'true';
      setAutoImage(data)
    }, [])


    const fileRef = React.useRef(null)

    const [disabled, setDisabled] = useState(false);

    const [fileUpload, setFileUpload] = useState(null);

    const [form, setForm] = useState({
        title: '',
        text: '',
        imageUrl: '',
      })

        const uploadProduct = async (form, file, fileName) => {
          try {
            const {title, text} = form;
        
            const imageRef = ref(storage, `images/${fileName}`);
            const uploadImage = await uploadBytes(imageRef, file);
        
            const newMetadata = {
              cachControl: 'public,max-age=2629800000',
              contentType: uploadImage.metadata.contextType
            };
        
            await updateMetadata(imageRef, newMetadata);
        
            const publicImageUrl = await getDownloadURL(imageRef)
        
            const postData = {
              imageUrl: publicImageUrl,
              title: title,
              text: text,
              created_at: serverTimestamp()
            }
        
            const cupRef = await addDoc(collection(db, 'posts'), postData);
            await updateDoc(cupRef, {id: cupRef.id});
        
            return cupRef.id;
          } catch (error) {
            console.log(error)
          }
        }
  
      const handleSubmit = async (e) => {
          e.preventDefault()

          if (
            !form.title ||
            !form.text
          ) {
            alert('Заполните все поля')
            return
          }

          setDisabled(true);
  
          if (fileUpload) {
              const inputFile = fileRef.current;
              const res = await uploadProduct(
                  form,
                  fileUpload[0],
                  fileUpload[0].name
              );
  
              if (res && inputFile) {
                  alert('Статья создана')
                  setDisabled(false);
                  setForm({
                    title: '',
                    text: '',
                    imageUrl: ''
                  });
                  setFileUpload(null);
                  fetchNextData();
                  fetchData();
  
                  inputFile.value = '';
              }
          }
      }


    return (
<FadeIn>
      <div className='full-login'>
      <Form onSubmit={handleSubmit} style={{maxWidth: '350px', margin: '0 auto'}} className='container'>
          <Row>
        <Form.Group className="mb-2" controlId="formBasicEmail">
          <Form.Label>Post title</Form.Label>
          <Form.Control name='title' type="text" placeholder="Введите заголовок" value={form.title} onChange={e => setForm({...form, title: e.target.value})} />
        </Form.Group>
        {/* <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Post image</Form.Label>
          <Form.Control name='name' type="file" accept='.png, .jpg, .jpeg' ref={fileRef} onChange={(e) => setFileUpload(e.target.files)} />
        </Form.Group> */}
        </Row>
        <Row>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Post text</Form.Label>
          <Form.Control as="textarea" rows={7}  name='text' type="text" placeholder="Введите текст" value={form.text} onChange={e => setForm({...form, text: e.target.value})} />
        </Form.Group>
        </Row>
        {disabled === false ? <Button variant="primary" type="submit" disabled={disabled} >
          Сохранить
        </Button> :
        <Button style={{width: '149px'}} variant="primary" type="submit" disabled={disabled} >
          Загрузка...
        </Button>}
        {/* <p>Loading...</p> */}
        {/* <br />
        <FormControlLabel
          label="Рандомное изображение"
          control={
            <Checkbox icon={<BookmarkBorderIcon />} checkedIcon={<BookmarkIcon />} checked={autoImage} onChange={handleChangeChecked} />
          }
        /> */}
      </Form>
      </div>
</FadeIn>
    );
}

export default Updatepost;
