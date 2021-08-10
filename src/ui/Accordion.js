import React from 'react'
import styled from 'styled-components'
import vectorDown from '../assets/icons/vector-down.svg'
import vectorRight from '../assets/icons/vector-right.svg'

const AccordionHeaderStyle = styled.div`
  display: flex;
  align-items: center;
`

const AccordionTitleStyle = styled.p`
  display: inline-block;
  font-weight: 400;
  line-height: 2rem;
  font-size: 0.875rem;
  cursor: pointer;
`

const AccordionIconStyle = styled.img`
  display: inline-block;
  margin-right: 16px;
  cursor: pointer;
`

function Accordion({ title, setOpen, isOpen }) {
  return (
    <AccordionHeaderStyle>
      <AccordionIconStyle
        src={isOpen ? vectorDown : vectorRight}
        onClick={setOpen}
      />
      <AccordionTitleStyle data-testid='accordion' onClick={setOpen}>
        {title}
      </AccordionTitleStyle>
    </AccordionHeaderStyle>
  )
}

export default Accordion
