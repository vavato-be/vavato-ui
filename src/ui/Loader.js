import React from 'react';
import styled, {css} from 'styled-components';
import {transparentize} from 'polished';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSpinner} from "@fortawesome/free-solid-svg-icons";
import {applyColors} from "./utils";

//TODO: Kill options, too many, allows for inconsistencies
const Loader = styled(
  ({
     className,
     big,
     message,
   }) => (
    <div className={className}>
      <FontAwesomeIcon
        icon={faSpinner}
        spin
        size={big && '2x'}
        className="circle"
      />
      {message && (
        <p>
          {message}
        </p>
      )}
    </div>
  ),
)`
  position: relative;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  z-index: 5;

  ${({absolute}) => absolute && css`
    position: absolute;
  `}

  ${({overlay}) => overlay && css`
    background-color: ${transparentize(0.15, '#FFFFFF')};
  `}

  ${({active}) => !active && css`
    display: none;
  `}

  .circle {
    ${applyColors('color')}
  }
`;

export default Loader;
