import React, { useEffect } from 'react'
import { Card, Button } from 'react-bootstrap';
import { useParams, useNavigate } from 'react-router-dom';
import { AppContext } from '../components/context';
import { Link } from 'react-router-dom';
import MYSkeletonabout from '../components/MYSkeletonabout';
import FadeIn from "react-fade-in";
// import { useLocation } from 'react-router-dom';

const Fullpost = () => {
  const [load, setLoad] = React.useState(false)

  const {posts, allPosts} = React.useContext(AppContext)

    const navigate = useNavigate();

    let {id} = useParams();

    const post = allPosts.find((obj) => obj.id === (id));
    // const post = posts.find((obj) => obj.id === (id));

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

    // let {pathname} = useLocation();
    // let pathId = pathname.split('/post/')[1]
    // const pathName = pathname.replace(`${pathId}`, '');

    if (!post) {
      return (
        // <FadeIn>
        <div className="full-post" style={{padding: 0}}>
          <Card>
              <Card.Body
              style={{padding: '1rem 0', paddingTop: '8px'}}>
              <Card.Title
              style={{padding: '1rem 1rem'}} className='cardtitle'>
              </Card.Title>
              {!load &&
              <MYSkeletonabout/>
              }
              {
              <Card.Img
              className='cardimg' style={{width: '100%', height: 'auto', borderRadius: '0', display: 'none'}} onLoad={activeLoad} variant='top' />
              }
              <Card.Text
              style={{padding: '0 1rem', paddingTop: '1rem'}}
              >
              </Card.Text>
              {/* <div style={{paddingBottom: '8px'}} className='cardbtns'>
              <Link
              style={{padding: '0 1rem'}}
              to='/'>
              <Button variant='primary'>
              </Button>
              </Link>
              </div> */}
              </Card.Body>
          </Card>
      </div>
      // </FadeIn>
      )
    }

    function activeLoad() {
        setLoad(true)
    }
    
    return (
      <FadeIn>
        <div className="full-post" style={{padding: 0}}>
          <Card>
              <Card.Body style={{padding: '1rem 0', paddingTop: '8px'}}>
              <Card.Title style={{padding: '1rem 1rem'}} className='cardtitle'>
              {post.title}
              </Card.Title>
              {!load &&
              <MYSkeletonabout/>
              }
              {<Card.Img
              className='cardimg' style={{width: '100%', height: 'auto', borderRadius: '0', display: 'none'}}
              onLoad={activeLoad}
              variant='top'
              src={post.imageUrl}
              />}
              {load &&
              <Card.Img
              className='cardimg' style={{width: '100%', height: 'auto', borderRadius: '0', display: 'block'}} variant='top'
              src={post.imageUrl}
              />
              }
              <Card.Text className='cardtext'
              style={{padding: '0 1rem', paddingTop: '1rem', whiteSpace: 'pre-line'}}>
                {post.text}
              </Card.Text>
              <div style={{paddingBottom: '8px'}} className='cardbtns'>
              <Link style={{padding: '0 1rem'}}
              to='/'>
              <Button variant='primary'>
                Назад
              </Button>
              </Link>
              </div>
              </Card.Body>
          </Card>
      </div>
      </FadeIn>
    );
}

export default Fullpost;
