import React from 'react';
import ReactPaginate from 'react-paginate';
import styled from "styled-components";

const StyledWrapper = styled.div`

  & {
    margin-top: 2em;
  }

  ul {
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding-left: 10px;
    padding-right: 10px;
  }

  ul li {
    display: inline-block;
  }

  a {
    color: #0a0a0a;
    padding: 5px;
    font-size: 1em;
  }

  ul li.active a {
    background: #a29060;
    color: #fefefe;
  }
  a:hover {
    cursor: pointer;
    background: #eee;
    text-decoration: none;
  }
`

function Pagination({ pageCount, onPageChange }) {
  return (
    <StyledWrapper>
      <ReactPaginate
        previousLabel={'<< Previous'}
        nextLabel={'Next >>'}
        breakLabel={'...'}
        pageCount={pageCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={8}
        onPageChange={onPageChange}
        containerClassName={'pagination'}
        subContainerClassName={'pages pagination'}
        activeClassName={'active'}
        initialPage={0}
      />

    </StyledWrapper>
  )
}

export default Pagination;
