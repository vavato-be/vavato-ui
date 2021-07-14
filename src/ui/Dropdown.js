import React from 'react'
import styled from 'styled-components'

const Menu = styled.nav`
  visibility: ${(props) => (props.open ? 'visible' : 'hidden')};
  ${(props) => (props.open ? 'display: flex;' : '')}
  background: white;
  position: fixed;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  padding: 24px 16px;
  min-width: 300px;
  overflow-y: auto;
  z-index: 3;

  & > ul {
    flex: 1;
    display: flex;
    flex-direction: column;
    margin: 0;
    padding: 0;
    text-indent: 0;
    list-style-type: none;
  }

  & > ul li {
    flex: 1;
    display: flex;
    cursor: pointer;
  }

  & > ul li a,
  & > ul li a:active,
  & > ul li a:visited,
  & > ul li a:hover {
    color: #000;
    text-decoration: none;
    font-size: 14px;
    font-weight: 400;
  }

  & li:hover {
    background: ${(props) => props.theme.background};
  }
`

function Dropdown({ children, open, className }) {
  function renderChildren() {
    if (!children) {
      return []
    }
    if (!children.length) {
      return <li>{children}</li>
    }
    return children.map((child) => (
      <li key={children.indexOf(child)}>{child}</li>
    ))
  }
  return (
    <Menu className={className} open={open}>
      <ul className='unstyled'>{renderChildren()}</ul>
    </Menu>
  )
}

export default Dropdown
