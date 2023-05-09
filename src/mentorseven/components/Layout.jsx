import React from 'react'
import { Outlet } from 'react-router-dom';

function Layout() {
    return (
        <>
        {/* <h4>Тест Layout</h4>
        <input type='text' placeholder='Поиск по статьям'></input><span style={{marginLeft: '0.3rem'}}>text</span> */}
        {/* <div>
        <h4>Добавить статью</h4>
        </div> */}
        <Outlet />
        </>
    );
}

export default Layout;
