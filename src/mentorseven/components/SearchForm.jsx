import React, { useEffect, useState } from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useLocation } from 'react-router-dom';
import { AppContext } from './context';
// import FadeIn from 'react-fade-in/lib/FadeIn';

const filterPosts = (searchText, listOfPosts) => {
    if (!searchText) {
        return listOfPosts;
    }
    return listOfPosts.filter(({title}) => 
    title.toLowerCase().includes(searchText.toLowerCase())
    )
}


const SearchForm = () => {
    const {posts, setSearchPost, search, setSearch} = React.useContext(AppContext);

    const postsRef = React.useRef(posts);

    React.useEffect(() => {
      postsRef.current = posts;
    }, [posts])

    useEffect(() => {
        const Debounce = setTimeout(() => {
            const filteredPosts = filterPosts(search, posts);
            setSearchPost(filteredPosts);
        }, 300);
    
        return () => clearTimeout(Debounce)
    }, [search])

    useEffect(() => {
      if (search === '') {
        setSearchPost(posts)
      }
    }, [search, posts])


    let {pathname} = useLocation();
    let id = pathname.split('/post/')[1]
    const pathName = pathname.replace(`${id}`, '');

    return (
        <div className='header-small' style={{padding: '0 1.5rem'}}>
            <div className='container'>
            <div className='header header-search'>
        {/* <FadeIn> */}
        <Navbar className="bg-body-tertiary justify-content-between">
          <Form
          inline
          >
            <Row>
              <Col xs="auto">
                {pathName !== '/post/' ? 
                <Form.Control
                  type="text"
                  placeholder="Search"
                  value={search}
                  className=" mr-sm-2"
                  onChange={(e) => setSearch(e.target.value)}
                />
                :
                ''
                // <Form.Control
                //   disabled
                //   type="text"
                //   placeholder="Search"
                //   className=" mr-sm-2"
                // />
                }
              </Col>
              <Col xs="auto">
                {pathName !== '/post/' ?
                <Button
                style={{display: 'none'}}
                id='search-btn'
                type="submit"
                >
                Submit
                </Button>
                :
                ''
                // <Button id='search-btn' type="submit" disabled>
                // Submit
                // </Button>
                }
              </Col>
            </Row>
          </Form>
        </Navbar>
        {/* </FadeIn> */}
        </div>
        </div>
        </div>
      );
}

export default SearchForm
