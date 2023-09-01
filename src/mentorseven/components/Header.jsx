import React, { createContext, useContext, useEffect } from 'react'
import {Nav, Navbar, Button} from 'react-bootstrap';
import { Link, useMatch, useParams } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Bounce, toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

function Header() {
    // const [us, setUs] = React.useState(false)
    // const {id} = useParams();
    

    const [isAuth, setIsAuth] = React.useState(false);
    let {pathname} = useLocation();
    // const match = useMatch('/path/*');

    React.useEffect(() => {
        if (window.localStorage.getItem('token')) {
            setIsAuth(true)
        } else {
            setIsAuth(false)
        }
    }, [pathname])

    let id = pathname.split('/post/')[1]
    const pathName = pathname.replace(`${id}`, '');

    // function handleClick() {
    // return setUs(!false)
    // }

    // const notifydesctop = () => {
    //     toast.success('Приветствую путник!', {
    //         position: "top-right",
    //         autoClose: 2500,
    //         hideProgressBar: true,
    //         closeOnClick: true,
    //         pauseOnHover: true,
    //         draggable: true,
    //         progress: undefined,
    //         theme: "dark",
    //         });
    //   }
      
    //   useEffect(() => {
    //     const timer = setTimeout(() => {
    //         notifydesctop()
    //     }, 1000)
    //     return () => clearTimeout(timer)
    //   }, [])

    return (
        <div className='header-small' style={{padding: '0 1.5rem'}}>

                {/* <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                />
                <ToastContainer /> */}
                
                {/* <ToastContainer
                position="top-right"
                autoClose={2500}
                hideProgressBar
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
                /> */}
            <div className='container'>
                <div className='header'>

                    {/* <Navbar.Brand><Link to='/'><h2>React Blog</h2></Link></Navbar.Brand>
                    {pathName === '/post/' ?<NavDropdown title="Меню" id="basic-nav-dropdown">
                    <NavDropdown.Item to="/" as={Link}>Главная</NavDropdown.Item>
                    <NavDropdown.Item to='/about' as={Link}>Обо мне</NavDropdown.Item>
                    {isAuth ? <NavDropdown.Item to='/profile' as={Link}>Профиль</NavDropdown.Item> :
                    <NavDropdown.Item to='/login' as={Link}>Войти</NavDropdown.Item>}
                    {isAuth ? <NavDropdown.Item to='/newpost' as={Link}>Создать</NavDropdown.Item> :
                    <NavDropdown.Item disabled to='/newpost' as={Link}>Создать</NavDropdown.Item>}
                    </NavDropdown> : null}
                    {pathName !== '/post/' ? <Nav variant="pills" >
                        <Nav.Link active={pathname === '/'} to="/" as={Link}>Главная</Nav.Link>
                        <Nav.Link active={pathname === '/about'} to='/about' as={Link}>Обо мне</Nav.Link>
                        {isAuth ? <Nav.Link active={pathname === '/profile'} to='/profile' as={Link}>Профиль</Nav.Link> : 
                        <Nav.Link active={pathname === '/login'} to='/login' as={Link}>Войти</Nav.Link>}
                        {isAuth ? <Nav.Link active={pathname === '/newpost'} to='/newpost' as={Link}>Создать</Nav.Link> :
                        <Nav.Link disabled active={pathname === '/newpost'} to='/newpost' as={Link}>Создать</Nav.Link>}
                    </Nav> : null} */}

                    <Navbar.Brand><Link to='/'><h2>React <span style={{color: '#ffaa0cbd'}}>Blog</span></h2></Link></Navbar.Brand>
                    <NavDropdown title="Меню" id="basic-nav-dropdown">
                    <NavDropdown.Item to="/" as={Link}>Главная</NavDropdown.Item>
                    <NavDropdown.Item to='/about' as={Link}>Обо мне</NavDropdown.Item>
                    {isAuth ? <NavDropdown.Item to='/profile' as={Link}>Профиль</NavDropdown.Item> :
                    <NavDropdown.Item to='/login' as={Link}>Войти</NavDropdown.Item>}
                    {isAuth ? <NavDropdown.Item to='/newpost' as={Link}>Создать</NavDropdown.Item> :
                    <NavDropdown.Item disabled to='/newpost' as={Link}>Создать</NavDropdown.Item>}
                    </NavDropdown>
                    {pathName === '/post/' ? <NavDropdown className='mobilemenunone' style={{display: 'block'}} title="Меню" id="basic-nav-dropdown">
                    <NavDropdown.Item to="/" as={Link}>Главная</NavDropdown.Item>
                    <NavDropdown.Item to='/about' as={Link}>Обо мне</NavDropdown.Item>
                    {isAuth ? <NavDropdown.Item to='/profile' as={Link}>Профиль</NavDropdown.Item> :
                    <NavDropdown.Item to='/login' as={Link}>Войти</NavDropdown.Item>}
                    {isAuth ? <NavDropdown.Item to='/newpost' as={Link}>Создать</NavDropdown.Item> :
                    <NavDropdown.Item disabled to='/newpost' as={Link}>Создать</NavDropdown.Item>}
                    </NavDropdown> : null}
                    {pathName !== '/post/' ? <Nav variant="pills" >
                        <Nav.Link active={pathname === '/'} to="/" as={Link}>Главная</Nav.Link>
                        <Nav.Link active={pathname === '/about'} to='/about' as={Link}>Обо мне</Nav.Link>
                        {isAuth ? <Nav.Link active={pathname === '/profile'} to='/profile' as={Link}>Профиль</Nav.Link> : 
                        <Nav.Link active={pathname === '/login'} to='/login' as={Link}>Войти</Nav.Link>}
                        {isAuth ? <Nav.Link active={pathname === '/newpost'} to='/newpost' as={Link}>Создать</Nav.Link> :
                        <Nav.Link disabled active={pathname === '/newpost'} to='/newpost' as={Link}>Создать</Nav.Link>}
                    </Nav> : null}

                </div>
            </div>
        </div>
    );
}

export default Header;
