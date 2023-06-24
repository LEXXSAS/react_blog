import React, { useEffect } from 'react'
import { Card, Button } from 'react-bootstrap';
import { useParams, useNavigate } from 'react-router-dom';
import { AppContext } from '../components/context';
import { Link } from 'react-router-dom';

const Fullpost = () => {
  const {posts} = React.useContext(AppContext)
    const navigate = useNavigate();
    let {id} = useParams();

    const post = posts.find((obj) => obj.id === (id));

    // React.useEffect(() => {
    //   setTimeout(() => {
    //     navigate('/', {replace: true});
    //   }, 3000)
    // }, [])

    useEffect(() => {
      window.scrollTo(0, 0);
      return () => {
        window.scrollTo(0, 0);
      }
    }, [])

    if (!post) {
      return <h4>Статья не найдена 😔</h4>
    }
    
    return (
        <div className="full-post" style={{padding: 0}}>
        {/* <h2 className='postheader'>{post.title}</h2>
        <div style={{marginBottom: '1rem'}}>
          <img style={{width: '100%', height: 'auto'}} src={post.imageUrl} alt={post.title} />
        </div>
        <p className='paragraph'>{post.text}</p>
        <Link to="/">
          <Button>Назад</Button>
        </Link> */}
            <Card>
                {/* <Card.Header className='cardheader'>{post.title}</Card.Header> */}
                {/* <Card.Img className='cardimg' style={{width: '100%', height: 'auto'}} variant='top' src={post.imageUrl} /> */}
                <Card.Body style={{padding: '1rem 0', paddingTop: '8px'}}>
                <Card.Title style={{padding: '1rem 1rem'}} className='cardtitle'>{post.title}</Card.Title>
                {/* <Card.Title style={{padding: '0 1rem'}} className='cardtitle'>{post.title}</Card.Title> */}
                <Card.Img className='cardimg' style={{width: '100%', height: 'auto', borderRadius: '0'}} variant='top' src={post.imageUrl} />
                <Card.Text style={{padding: '0 1rem', paddingTop: '1rem'}} >
                  {post.text}
                </Card.Text>
                <div style={{paddingBottom: '8px'}} className='cardbtns'>
                <Link style={{padding: '0 1rem'}} to='/'><Button variant='primary'>Назад</Button></Link>
                </div>
                </Card.Body>
            </Card>
      </div>
    );
}

export default Fullpost;
