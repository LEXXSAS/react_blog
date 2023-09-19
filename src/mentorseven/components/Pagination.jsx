import React, { useEffect } from 'react';
import ReactPaginate from 'react-paginate'
import { AppContext } from './context';

const Pagination = () => {
    const {itemsPerPage, totalItems, onPageChange, onPerPageChange, itemOffset, setItemOffset} = React.useContext(AppContext);

    const totalPages = Math.ceil(totalItems / itemsPerPage);

    // useEffect(() => {
    //     const endOffset = itemOffset + itemsPerPage
    //     console.log(endOffset)
    // }, [itemOffset])

    const handlePageClick = (pageObj) => {
        const newOffset = (pageObj.selected * itemsPerPage) % totalItems;
        setItemOffset(newOffset);
        onPageChange(pageObj.selected)
    }

    const handlePerPageClick = (event) => {
        const {value} = event.target;
        onPerPageChange(value);
    }

  return (
    <div className='row'>
        <div className="col-md-2">
            <select 
            className="form-select"
            aria-label="Default select"
            value={itemsPerPage}
            onChange={handlePerPageClick}
            >
            <option value={6}>6</option>
            <option value={12}>12</option>
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
        Total: {totalItems}
        </span>
        <ReactPaginate 
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        marginPagesDisplayed={2}
        pageCount={totalPages}
        previousLabel="< previous"
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
    </div>
  )
}

export default Pagination
