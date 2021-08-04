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
`

function ButtonWithIcon(props) {
  const { icon } = props

  return (
    <StyledButton {...safeProps(props)}>
      <div>
        <StyledIcon
          icon={icon}
          haslabel={props.children && props.children.length}
        />
        {props.children && props.children.length ? (
          <span>{props.children}</span>
        ) : (
          []
        )}
      </div>
    </StyledButton>
  )
}

export default ButtonWithIcon
