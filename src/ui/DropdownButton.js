import React, { useState, useEffect, useRef } from 'react'
import styled from 'styled-components'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'

import ButtonWithIcon from './ButtonWithIcon'
import Dropdown from './Dropdown'

const Container = styled('div')`
  display: flex;

  & button {
    flex: 1;
  }
`

function DropdownButton({ children, disabled, label, className }) {
  const [open, setOpen] = useState(false)
  const container = useRef(null)

  useEffect(() => {
    const handler = (e) => {
      if (open && container.current && !container.current.contains(e.target)) {
        setOpen(false)
      }
    }

    document.addEventListener('click', handler)
    return () => document.removeEventListener('click', handler)
  })

  function openDropdown(event) {
    if (disabled) {
      return
    }

    const container = event.currentTarget
    setOpen(!open)
    if (open) {
      return
    }

    // Need to wait for the browser to render to get menu dimensions
    setTimeout(() => positionMenu(container))
  }

  /* TODO: Use refs instead of currentTarget and queries.
   *       I tried doing this here but ran into trouble
   *       with forwardedRefs in children. Need to research
   *       how other libraries do it.
   */
  function positionMenu(container) {
    const menu = container.querySelector('nav')

    const { top, left, bottom, right } = container.getBoundingClientRect()
    const { width, height } = menu.getBoundingClientRect()

    let newTop = bottom - 5
    let newLeft = right - width + 5

    if (newTop + height > document.documentElement.clientHeight) {
      newTop = top - height
    }

    if (newLeft + width > document.documentElement.clientWidth) {
      newLeft = left - width
    }

    menu.style.left = `${newLeft}px`
    menu.style.top = `${newTop}px`
  }

  return (
    <Container
      className={className}
      ref={container}
      onClick={(e) => openDropdown(e)}
      role='button'
    >
      <ButtonWithIcon icon={faCaretDown} disabled={disabled}>
        {label}
      </ButtonWithIcon>
      <Dropdown className='dropdown-menu' open={open} role='navigation'>
        {children}
      </Dropdown>
    </Container>
  )
}

export default DropdownButton
