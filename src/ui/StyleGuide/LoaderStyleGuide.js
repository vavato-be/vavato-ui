import React from 'react'
import styled from 'styled-components'
import Card from '../Card'
import Loader from '../Loader'

const LoaderWrapper = styled.div`
  background-color: #f6f6f6;
  padding: 10px;
`

function LoaderStyleguide() {
  return (
    <Card style={{ marginBottom: '50px' }}>
      <div className='title'>&lt;Loader&gt;</div>
      <p>Normal Loader</p>
      <LoaderWrapper>
        <Loader active color='info' />
      </LoaderWrapper>
      <p>Big Loader</p>
      <LoaderWrapper>
        <Loader active big color='info' />
      </LoaderWrapper>
      <p>Loader with text</p>
      <LoaderWrapper>
        <Loader active message='I am loading...' color='success' />
      </LoaderWrapper>
    </Card>
  )
}

export default LoaderStyleguide
