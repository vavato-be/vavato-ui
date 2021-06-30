import React from 'react'
import styled from 'styled-components'

const RightPanelFooter = styled.div`
  position: fixed;
  bottom: 0px;
  right: 0px;
  height: 76px;
  background: ${(props) => props.theme.background};
  display: flex;
  flex-direction: row;
  justify-content: ${(props) =>
    React.Children.count(props.children) > 1 ? 'space-between' : 'flex-end'};
  align-items: center;
  width: calc(33vw - 32px);
  padding: 0px 16px;
  box-shadow: 0 -10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
`

export default RightPanelFooter
