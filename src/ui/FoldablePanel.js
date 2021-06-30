import React, { useState } from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretUp, faCaretDown } from '@fortawesome/free-solid-svg-icons'

const Panel = styled.div`
  background: ${(props) => props.theme.background};
  margin: 8px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`

const TitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  & h3 {
    flex: 1
    margin: 0;
    padding: 0 16px;
  }
`
const CaretContainer = styled.span`
  margin: 0 8px;
`

const Content = styled.div`
  display: none;
  overflow: hidden;

  &.open {
    display: block;
    padding: 8px 16px 32px 16px;
  }
`

function FoldablePanel({ title, children, startOpen }) {
  const [open, setOpen] = useState(startOpen)

  return (
    <Panel>
      <TitleContainer onClick={() => setOpen(!open)}>
        <h3>{title}</h3>
        <CaretContainer>
          <FontAwesomeIcon icon={open ? faCaretUp : faCaretDown} />
        </CaretContainer>
      </TitleContainer>
      <Content className={open ? 'open' : ''}>{children}</Content>
    </Panel>
  )
}

export default FoldablePanel
