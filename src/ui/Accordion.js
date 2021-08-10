import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown, faCaretRight } from '@fortawesome/free-solid-svg-icons'

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

const AccordionIconStyle = styled(FontAwesomeIcon)`
  cursor: pointer;
  font-size: 1.3rem;
  margin-right: 16px;
  display: inline-block;
  color: ${(props) => props.theme.primary};
`

function Accordion({ title, setOpen, isOpen }) {
  return (
    <AccordionHeaderStyle>
      <AccordionIconStyle
        icon={isOpen ? faCaretDown : faCaretRight}
        onClick={setOpen}
      />
      <AccordionTitleStyle data-testid='accordion' onClick={setOpen}>
        {title}
      </AccordionTitleStyle>
    </AccordionHeaderStyle>
  )
}

export default Accordion
