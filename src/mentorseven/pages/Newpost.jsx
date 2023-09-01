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
        
            // создаем ссылку на storage и путь до папки, где хранятся изображения
            const imageRef = ref(storage, `images/${fileName}`);
            // загружаем туда файл по ссылке
            const uploadImage = await uploadBytes(imageRef, file);
        
            // добавляем какие то мета данные
            const newMetadata = {
              cachControl: 'public,max-age=2629800000',
              contentType: uploadImage.metadata.contextType
            };
        
            // обновляем данные файла по ссылке
            await updateMetadata(imageRef, newMetadata);
        
            // создаем переменную в которую записываем url загруженного файла
            const publicImageUrl = await getDownloadURL(imageRef)
        
            // создаем переменную в которую записываем все данные для firestore о тексте, файле и т.д.
            const postData = {
              imageUrl: publicImageUrl,
              title: title,
              text: text,
              created_at: serverTimestamp()
            }

            // добавляем созданные данные в коллекцию firestore
            // и сохраняем ссылку на созданные данные
            const cupRef = await addDoc(collection(db, 'posts'), postData);
            // обновляем у загруженного файла id по созданной ссылке
            // равный пути хранения в firestore
            await updateDoc(cupRef, {id: cupRef.id});
        
            return cupRef.id;
          } 
          
          
          catch (error) {
            console.log(error)
          }
        }
  
      const handleSubmit = async (e) => {
      //отменяем стандартное поведение браузера
          e.preventDefault()

      //если заголовок и текст пусты выводим алерт
          if (
            !form.title ||
            !form.text
          ) {
            alert('Заполните все поля')
            return
          }

      //ставим кнопку в disabled
          setDisabled(true);

      //если файл загружен в input type file, то
          if (fileUpload) {
      //создаем ссылку на файл изображение - записываем ссылку в переменную inputFile
              const inputFile = fileRef.current;
      //запускаем функцию uploadProduct
      //передаем в неё данные с формы, а также имя файла и сам файл
              const res = await uploadProduct(
                  form,
                  fileUpload[0],
                  fileUpload[0].name
              );
  
      //если переменная inputFile и
      //функция выполнилась uploadProduct, то
      //выводим сообщеине об успешном создании статьи и
      //обнуляем форму ввода и все данные в исходное состояние
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


      // const handleSubmit = async(e) => {
      // e.preventDefault();
      
      // }


    return (
<FadeIn>
      <div className='full-login'>
      <Form onSubmit={handleSubmit} style={{maxWidth: '350px', margin: '0 auto'}} className='container'>
          <Row>
        <Form.Group className="mb-2" controlId="formBasicEmail">
          <Form.Label>Post title</Form.Label>
          <Form.Control name='title' type="text" placeholder="Введите заголовок" value={form.title} onChange={e => setForm({...form, title: e.target.value})} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Post image</Form.Label>
          <Form.Control name='name' type="file" accept='.png, .jpg, .jpeg' ref={fileRef} onChange={(e) => setFileUpload(e.target.files)} />
        </Form.Group>
        </Row>
        <Row>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Post text</Form.Label>
          <Form.Control as="textarea" rows={7}  name='text' type="text" placeholder="Введите текст" value={form.text} onChange={e => setForm({...form, text: e.target.value})} />
        </Form.Group>
        </Row>
        {/* <button type='submit'>Test upload</button> */}
        {disabled === false ? <Button variant="primary" type="submit" disabled={disabled} >
          Создать статью
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
