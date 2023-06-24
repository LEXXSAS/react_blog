import React, { useEffect } from 'react'
import { Button } from 'react-bootstrap';
import { useParams, useNavigate } from 'react-router-dom';
import { AppContext } from '../components/context';
import { Link } from 'react-router-dom';

const Fullpost = () => {
  const {posts} = React.useContext(AppContext)
    const navigate = useNavigate();
    // const [redir, setRedir] = React.useState();
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
        <div className="full-post">
        <h2 className='postheader'>{post.title}</h2>
        <div style={{marginBottom: '1rem'}}>
          <img style={{width: '100%', height: 'auto'}} src={post.imageUrl} alt={post.title} />
          {/* <img style={{width: '50%', height: 'auto'}} src={post.imageUrl} alt={post.title} /> */}
        </div>
        <p className='paragraph'>{post.text}</p>
        <Link to="/">
          <Button>Назад</Button>
        </Link>
      </div>
    );
}

export default Fullpost;
