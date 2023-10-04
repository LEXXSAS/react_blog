import React from 'react';
import ReactPaginate from 'react-paginate'
import { AppContext } from './context';
import { useLocation } from 'react-router-dom';
import { memo } from 'react';

const Pagination = ({currentPage}) => {
    const {posts, itemsPerPage, totalItems, onPageChange, onPerPageChange, itemOffset, setItemOffset, setItemsPerPage, fetchData, setTriggerVisible} = React.useContext(AppContext);

    const postsRef = React.useRef(posts);

    React.useEffect(() => {
      postsRef.current = posts;
    }, [posts])

    const newOffsetRef = React.useRef(itemOffset)

    React.useEffect(() => {
      newOffsetRef.current = itemOffset;
    }, [itemOffset])

    const totalPages = Math.ceil(totalItems / itemsPerPage);

    const handlePageClick = (pageObj) => {
        const newOffset = (Number(pageObj.selected * itemsPerPage) % totalItems);
        setItemOffset(newOffset);
        onPageChange(Number(pageObj.selected))
      }
      
    const handlePerPageClick = (event) => {
        const {value} = event.target;
        onPerPageChange(Number(value));
        console.log('items on page', value)
        setItemsPerPage(Number(value))
        if (value == totalItems) {
          setTriggerVisible(true);
          fetchData()
        } else {
          setTriggerVisible(false)
        }
    }

    let {pathname} = useLocation();
    let id = pathname.split('/post/')[1]
    const pathName = pathname.replace(`${id}`, '');

  return (
    <>
    {pathName === '/' ? 
    <div className='row pagination-count'>
        {/* <div className="col-md-2">
            <select 
            className="form-select"
            aria-label="Default select"
            value={itemsPerPage}
            onChange={handlePerPageClick}
            >
            <option value={6}>6</option>
            <option value={totalItems}>Все</option>
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
        </span> */}
        {/* <ReactPaginate 
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
        forcePage={currentPage - 1}
        /> */}
        </div>
   : ''}
    </>
  )
}

export default Pagination
