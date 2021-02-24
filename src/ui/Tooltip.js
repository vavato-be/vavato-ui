import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCommentDots } from '@fortawesome/free-solid-svg-icons'

const Container = styled.span`
  padding: 2px 4px;
  font-size: 12px;
  color: ${props => props.theme.text};
`

const Popup = styled.nav`
  display: ${props => props.open ? 'flex' : 'none'};
  background: white;
  position: fixed;
  box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
  padding: 24px 16px;
  z-index: 3;
`

function Tooltip({ icon = faCommentDots, children }) {
  const [open, setOpen] = useState(false);
  const container = useRef(null);

  function hidePopup(event) {
    if(!open) {
      return;
    }
    showPopup(event);
  }

  function showPopup(event) {
    setOpen(!open);

    if(open) {
      return;
    }

    // Need to wait for the browser to render to get popup dimensions
    setTimeout(() => positionPopup());
  }

  function positionPopup() {
    const popup = container.current.querySelector('nav');

    const { top, left, right } = container.current.getBoundingClientRect();
    const { width, height } = popup.getBoundingClientRect();

    let newTop = top - height;
    let newLeft = right - (width / 2.0)

    if (newTop < 0) {
      newTop = 0;
    }

    if (newLeft + width > document.documentElement.clientWidth) {
      newLeft = left - width;
    }

    popup.style.left = `${newLeft}px`;
    popup.style.top = `${newTop}px`;
  }

  return (
    <Container role="button"
      ref={ container }
      onMouseEnter={ event => showPopup(event) }
      onMouseLeave={ event => hidePopup(event) }>
      <FontAwesomeIcon icon={icon} />
      <Popup
        role="navigation"
        open={ open }>
        { children }
      </Popup>
    </Container>

  )
}

export default Tooltip;
