import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { safeProps } from './utils';

const Link = styled.a`
  cursor: pointer;
  display: flex;
  flex-direction: row;
  align-items: center;
  line-height: 48px;

  & > svg {
    margin-right: 16px;
  }

  & > span {
    flex: 1;
  }
`

function LinkWithIcon(props) {
  const { icon } = props;
  return (
    <Link {...safeProps(props)}>
      <FontAwesomeIcon icon={ icon } />
      <span>{ props.children }</span>
    </Link>
  )


}

export default LinkWithIcon;
