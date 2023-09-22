import React, { useEffect } from 'react';
import ReactPaginate from 'react-paginate'
import { AppContext } from './context';
import { useLocation } from 'react-router-dom';

const Pagination = () => {
    const {posts, itemsPerPage, totalItems, onPageChange, onPerPageChange, itemOffset, setItemOffset, allPosts} = React.useContext(AppContext);

    const postsRef = React.useRef(posts);

    React.useEffect(() => {
      postsRef.current = posts;
    }, [posts])

    const totalPages = Math.ceil(totalItems / itemsPerPage);
    // useEffect(() => {
    //     const endOffset = itemOffset + itemsPerPage
    //     console.log(endOffset)
    // }, [itemOffset])

    const handlePageClick = (pageObj) => {
        const newOffset = (Number(pageObj.selected * itemsPerPage) % totalItems);
        // const endOffset = itemOffset + itemsPerPage;
        // const currentItems = posts.slice(itemOffset, endOffset)
        // console.log('currentItems', currentItems)
        setItemOffset(newOffset);
        onPageChange(Number(pageObj.selected))
    }

    const handlePerPageClick = (event) => {
        const {value} = event.target;
        onPerPageChange(Number(value));
    }

    let {pathname} = useLocation();
    let id = pathname.split('/post/')[1]
    const pathName = pathname.replace(`${id}`, '');

  return (
    <>
    {pathName === '/' ? 
    <div className='row pagination-count'>
        <div className="col-md-2">
            <select 
            className="form-select"
            aria-label="Default select"
            value={itemsPerPage}
            onChange={handlePerPageClick}
            >
            <option value={6}>6</option>
            <option value={totalItems}>Все</option>
            {/* <option value={12}>12</option> */}
            </select> 
        </div>
        <div
        className='col-md-10'
        style={{display: 'flex', justifyContent: 'end'}}
        >
        <span
        className='text-muted'
        style={{
            marginRight: 30,
            display: 'flex',
            alignItems: 'center',
        }}
        >
        Всего: {totalItems}
        </span>
        <ReactPaginate 
        nextLabel=" >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        marginPagesDisplayed={2}
        pageCount={totalPages > 0 ? totalPages : 1}
        previousLabel="< "
        pageLinkClassName='page-link'
        previousClassName='page-item'
        previousLinkClassName='page-link'
        nextClassName='page-item'
        nextLinkClassName='page-link'
        breakLabel="..."
        breakClassName='page-item'
        breakLinkClassName='page-link'
        containerClassName='pagination'
        activeClassName='active'
        renderOnZeroPageCount={null}
        />
        </div>
    </div> : ''}
    </>
  )
}

export default Pagination
