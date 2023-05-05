import React from 'react'
import { Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer className='container mt-auto'>
        <Navbar bg='light' expand="lg" style={{margin: '20px 0 0 0', padding: '0 1.5rem', height: '75px'}}>
            <div className='container'>
                <Navbar.Brand href="#home" style={{fontSize: '1.2rem'}}><Link to='/'>REACT BLOG 2023</Link></Navbar.Brand>
                <Navbar>
                    <Navbar.Text>by Alexey Sedov</Navbar.Text>
                </Navbar>
            </div>
        </Navbar>

        <div style={{textAlign: 'center', padding: '3px', backgroundColor: 'rgba(0, 0, 0, 0.02)' }}> 
             &copy; {new Date().getFullYear()} All right reserved:{' '}
            <a href="/">LEXXS</a>
        </div>
        </footer>
    );
}

export default Footer;
