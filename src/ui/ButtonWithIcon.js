import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Button from './Button'
import { safeProps } from './utils'

const StyledIcon = styled(FontAwesomeIcon)`
  margin-right: ${(props) => (props.haslabel ? '16px' : '0')};
`
const StyledButton = styled(Button)`
  width: ${(props) => (props.children.length ? '130px' : 'auto')};
  box-sizing: border-box !important;
  line-height: 1.1em;
  height: 46px;
  border-bottom-width: 5px;
`

const Content = styled.div`
  display: flex;
  flex-direction: row;
  flex-spacing: space-between;
  align-items: center;

  & span {
    flex: 1;
    text-align: center;
  }
`

function ButtonWithIcon(props) {
  const { icon } = props

  return (
    <StyledButton {...safeProps(props)}>
      <Content>
        <StyledIcon
          icon={icon}
          haslabel={props.children && props.children.length}
        />
        {props.children && props.children.length ? (
          <span>{props.children}</span>
        ) : (
          []
        )}
      </Content>
    </StyledButton>
  )
}

export default ButtonWithIcon
