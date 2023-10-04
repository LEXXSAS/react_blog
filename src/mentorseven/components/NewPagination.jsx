import React from "react";
import { useLocation } from 'react-router-dom';

const NewPagination = ({postsPerPage, totalPosts, paginate, currentPage}) => {
    const pageNumbers = [];

    for(let i=1; i<= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i);
    }

    let {pathname} = useLocation();
    let id = pathname.split('/post/')[1]
    const pathName = pathname.replace(`${id}`, '');
    
    return (
        <div className="newpagination">
        {pathName === '/' ?
        <span
        className='text-muted'
        style={{
            marginRight: 30,
            display: 'flex',
            alignItems: 'center',
        }}
        >
        Всего: {totalPosts}
        </span>
        : ''}
        {pathName === '/' ? 
        <nav>
            <ul className="pagination">
                {
                pageNumbers.map(number => (
                    <li className={`page-item ${currentPage === number ?  ' active' : ''}`} key={number}>
                        <a onClick={() => paginate(number)} href="!#" className="page-link">
                            {number}
                        </a>
                    </li>
                ))
                }
            </ul>
        </nav>
        : ''}
        </div>
    )
}

export default NewPagination;
