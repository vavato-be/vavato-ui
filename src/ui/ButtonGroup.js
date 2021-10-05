import React from 'react'
import styled from 'styled-components'
import Button from './Button'

const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  margin-bottom: 10px;
`

const Group = styled.div`
  padding: 10px;
  background-color: ${(props) => props.theme.background};
  border-radius: 3px;
  display: flex;
`

const StyledButton = styled(Button)`
  background-color: ${(props) => props.theme.background};
  color: ${(props) => props.theme.text};
  margin: 0;

  &.active {
    background-color: ${(props) => props.theme.secondary};
    color: ${(props) => props.theme.lightText};
  }
`

function ButtonGroup({ values, onClick, selectedStyle }) {
  return (
    <Container>
      <Group>
        {values.map((elem) => (
          <StyledButton
            key={elem.value}
            onClick={() => onClick(elem.value)}
            style={elem.selected ? selectedStyle : {}}
          >
            {elem.text}
          </StyledButton>
        ))}
      </Group>
    </Container>
  )
}

export default ButtonGroup
