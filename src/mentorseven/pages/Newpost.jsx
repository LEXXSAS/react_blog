import React, { useEffect, useState } from 'react'
import {Form, Button, Row} from 'react-bootstrap'
import {storage, db} from '../firebase'
import { collection, onSnapshot, doc, addDoc, deleteDoc, orderBy, query } from 'firebase/firestore'
import { AppContext } from '../components/context';
import FadeIn from "react-fade-in";
import imageCompression from 'browser-image-compression';
import Resizer from "react-image-file-resizer";
import { getFirestore, getDocs, serverTimestamp, updateDoc, DocumentData } from 'firebase/firestore'
import {getStorage, uploadBytesResumable, ref, uploadBytes, listAll, getDownloadURL, updateMetadata} from 'firebase/storage'
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import {QueryClient, QueryClientProvider, useQuery} from 'react-query'
// import { Checkbox, FormControlLabel } from '@mui/material';
// import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
// import BookmarkIcon from '@mui/icons-material/Bookmark';

function Updatepost() {

  const {fetchNextData, fetchData, notyCreate, setNotyCreate} = React.useContext(AppContext)

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
    const [cropImage, setCropImage] = useState(null);
    const [istrue, setTrue] = useState(false);

        const loadingRef = React.useRef(istrue);
    React.useEffect(() => {
        loadingRef.current = istrue;
    }, [istrue])

    const cropImgRef = React.useRef(cropImage);
    React.useEffect(() => {
      cropImgRef.current = cropImage;
    }, [cropImage])

    const [form, setForm] = useState({
        title: '',
        text: '',
        imageUrl: '',
      })

        const uploadProduct = async (form, file, fileName) => {

          try {
            const {title, text} = form;
            // тут начинается firebase storage

            // создаем ссылку на storage и путь до папки, где хранятся изображения
            const imageRef = ref(storage, `images/${fileName}`);
            // загружаем туда файл по ссылке
            const uploadImage = await uploadBytes(imageRef, file);
        
            // добавляем какие-то мета данные
            const newMetadata = {
              cachControl: 'public,max-age=2629800000',
              contentType: uploadImage.metadata.contextType
            };
        
            // обновляем данные файла по ссылке
            await updateMetadata(imageRef, newMetadata);
        
            // создаем переменную в которую записываем url загруженного файла
            const publicImageUrl = await getDownloadURL(imageRef)

            // тут начинается firestore
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
          // if (
          //   !form.title ||
          //   !form.text
          // ) {
          //   alert('Заполните все поля')
          //   return
          // }

      //ставим кнопку в disabled
          setDisabled(true);
      //если файл загружен в input type file, то
          if (fileUpload) {
      //создаем ссылку на файл изображение - записываем ссылку в переменную inputFile
              const inputFile = fileRef.current;
              console.log('fireRef.current && inputFile', fileRef.current)
      // выводится FileList с двумя значениями File и length
              console.log('fileUpload', fileUpload)
      // в fileUpload[0] выводится объект File с параметрами
      // size / lastModified / lastModifiedDate / name "name image" / type "image/png" / webkitRelativePath ""
              console.log('fileUpload[0]', fileUpload[0])
              // записываем в новую переменную для дальнейшей компрессии
              const imageFile = fileUpload[0];

              const imageType = imageFile.name.split('.')[1];
              // получение ширины высоты изображения
              let newwidth;
              const reader = new FileReader();
              reader.readAsDataURL(imageFile);
              reader.onloadend = () => {
                const img = new Image();
                img.src = reader.result;
                img.onload = () => {
                  console.log('img width', img.width, 'img height', img.height)
                  const ogImageRatio = img.width / img.height;
                  console.log('ImageRatio', ogImageRatio)
                  // newwidth = Math.floor(250 * ogImageRatio);
                  newwidth = Math.floor(1376 * ogImageRatio);
                  // const newheight = Math.floor(enter value width / ogImageRatio);
                  console.log('new width if new height is 250px ==>', newwidth);
                  
                  // const canvas = document.createElement('canvas');
                  // const maxSize = Math.max(img.width, img.height);
                  // canvas.width = maxSize;
                  // canvas.height = maxSize;
                  // const ctx = canvas.getContext('2d');
                  // ctx.drawImage(
                  //   img,
                  //   newwidth,
                  //   250
                  // );
                  // canvas.toBlob((blob) => {
                  //   const file = new File([blob], imageFile.name, {
                  //     type: `image/${imageType}`,
                  //     lastModified: Date.now(),
                  //   });
                  //   console.log('new img file', file);
                  //   setCropImage(file);
                  // })
                }
              }

              const resizeFile = (file) =>
              new Promise((resolve) => {
                Resizer.imageFileResizer(
                  file,
                  newwidth,
                  1376,
                  `${imageType}`,
                  100,
                  0,
                  (uri) => {
                    resolve(uri);
                  },
                  "base64",
                  // 400,
                  // 500
                );
              });

              // резайзим файл изображения
              // const image = await resizeFile(imageFile);
              // конвертируем из base64 в blob
              // const dataURIToBlob = (dataURI) => {
              //   const splitDataURI = dataURI.split(",");
              //   const byteString =
              //     splitDataURI[0].indexOf("base64") >= 0
              //       ? atob(splitDataURI[1])
              //       : decodeURI(splitDataURI[1]);
              //   const mimeString = splitDataURI[0].split(":")[1].split(";")[0];
              
              //   const ia = new Uint8Array(byteString.length);
              //   for (let i = 0; i < byteString.length; i++) ia[i] = byteString.charCodeAt(i);
              
              //   return new Blob([ia], { type: mimeString });
              // };
              // const newFile = dataURIToBlob(image);

              // const file = new File([image], imageFile.name, {
              //   type: `image/${imageType}`,
              //   lastModified: Date.now(),
              // });
              // console.log('new resize image', file)

              // console.log('originalFile instanceof Blob', imageFile instanceof Blob);

              // выводим размер оригинального файла
              console.log(`originalFile size ${imageFile.size / 1024 / 1024} MB`);

              // console.log(`new resize image size ${file.size / 1024 / 1024} MB`);
              
              // опции компрессии
              const options = {
                maxSizeMB: 1,
                maxWidthOrHeight: 1908,
                useWebWorker: true,
              }
              
              try {
                // компрессирование файла с опциями
                // const compressedFile = await imageCompression(loadingRef.current, options);
                const compressedFile = await imageCompression(imageFile, options);
                // const compressedFile = await imageCompression(newFile, options);
                // выводим размер скомпрессированного файла
                // console.log('compressedFile instanceof Blob', compressedFile instanceof Blob);
                console.log(`compressedFile size ${compressedFile.size / 1024 / 1024} MB`);
                //запускаем функцию uploadProduct
                //передаем в неё данные с формы, а также имя файла и сам файл
                // const res = await uploadProduct(
                //     form,
                //     fileUpload[0],
                //     fileUpload[0].name
                // );
                const res = await uploadProduct(
                  form,
                  compressedFile,
                  fileUpload[0].name
                );
                
      //если переменная inputFile не пуста и
      //функция uploadProduct выполнилась, то
      //выводим сообщеине об успешном создании статьи и
      //обнуляем форму ввода и все данные в исходное состояние
              if (res && inputFile) {
                setNotyCreate(res);
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
              } catch (error) {
                alert('Загрузка не удалась')
              }

          }
      }

      useEffect(() => {
        setNotyCreate('')
      }, [notyCreate])


      // const handleSubmit = async(e) => {
      // e.preventDefault();
      // }

      // useEffect(() => {
      //   if (cropImage !== null) {
      //     console.log(`cropImage size ${cropImage.size / 1024 / 1024} MB`);
      //   }
      // }, [cropImage])

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
