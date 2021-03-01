import React from 'react';
import styled from 'styled-components';

import Checkbox from './Checkbox';

const ContainerStyle = styled.div`
  position: relative;
  margin: 1rem;
  width: 170px;
  border-radius: 3px;
  background-color: #f8f9fa;

  &:hover {
    box-shadow: 0px 0px 8px rgba(137, 150, 159, 0.3);
  }
`;

const ContainerImageStyle = styled.div`
  width: 100%;
  height: 100px;
  overflow: hidden;
`;

const ImageStyle = styled.img`
  width: 100%;
  border-radius: 3px 3px 0px 0px;
  border-bottom: 1px solid #a29060;
`;

const TextContainerStyle = styled.div`
  padding: 0 0.5rem;
`;

const CheckboxStyle = styled(Checkbox)`
  position: absolute;
  top: 0;
  right: 0;
`;

function SelectableCardWithImage({ image, value, onChange, children }) {
  return (
    <ContainerStyle>
      <ContainerImageStyle>
        <ImageStyle src={image} />
      </ContainerImageStyle>
      <CheckboxStyle value={value} onChange={onChange} />
      <TextContainerStyle className="text-container">
        {children}
      </TextContainerStyle>
    </ContainerStyle>
  );
}

export default SelectableCardWithImage;
