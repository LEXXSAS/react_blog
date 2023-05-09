import React, { createContext, useContext } from 'react'
import {Nav, Navbar, Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';



function Header() {
    // const [us, setUs] = React.useState(false)

    const [isAuth, setIsAuth] = React.useState(false);
    let {pathname} = useLocation();

    React.useEffect(() => {
        if (window.localStorage.getItem('token')) {
            setIsAuth(true)
        } else {
            setIsAuth(false)
        }
    }, [pathname])

    // function handleClick() {
    // return setUs(!false)
    // }

    return (
        <div style={{padding: '0 1.5rem'}}>
            <div className='container'>
                <div className='header'>
                    <Navbar.Brand><Link to='/'><h2>React Blog</h2></Link></Navbar.Brand>
                    <Nav variant="pills" >
                        
                        <Nav.Link active={pathname === '/'} to="/" as={Link}>Главная</Nav.Link>
                        <Nav.Link active={pathname === '/about'} to='/about' as={Link}>Обо мне</Nav.Link>
                        {isAuth ? <Nav.Link active={pathname === '/profile'} to='/profile' as={Link}>Профиль</Nav.Link> : 
                        <Nav.Link active={pathname === '/login'} to='/login' as={Link}>Войти</Nav.Link>}
                        {isAuth ? <Nav.Link active={pathname === '/newpost'} to='/newpost' as={Link}>Создать</Nav.Link> :
                        <Nav.Link disabled active={pathname === '/newpost'} to='/newpost' as={Link}>Создать</Nav.Link>}
                    </Nav>
                    {/* <Button disabled style={{marginLeft: '0.3rem', marginTop: '0.3rem'}}>Добавить статью</Button> */}
                </div>
            </div>
        </div>
    );
}

export default Header;
