import React from 'react'
import styled from 'styled-components'

import ButtonStyleGuide from './ButtonStyleGuide'
import CardStyleGuide from './CardStyleGuide'
import TableStyleGuide from './TableStyleGuide'
import LabelStyleGuide from './LabelStyleGuide'
import BadgeStyleGuide from './BadgeStyleGuide'
import FormStyleGuide from './FormStyleGuide'
import ActionPopoverStyleGuide from './ActionPopoverStyleGuide'
import EllipsisMenuStyleGuide from './EllipsisMenuStyleGuide'
import BreadcrumbsStyleGuide from './BreadcrumbsStyleGuide'
import TooltipStyleGuide from './TooltipStyleGuide'
import ToasterStyleGuide from './ToasterStyleGuide'
import Breadcrumbs from '../Breadcrumbs'
import LoaderStyleguide from './LoaderStyleGuide'
import CounterStyleGuide from './CounterStyleGuide'

const Container = styled.div`
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  justify-content: space-between;
`

const NavBar = styled.nav`
  width: 200px;
  height: auto;
  background-color: ${(props) => props.theme.text};
  box-shadow: 5px 0px 10px 1px rgba(0, 0, 0, 0.15);
  padding: 32px 64px;
  z-index: 1;
  overflow-y: scroll;
`

const NavLinkList = styled.ul`
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;
  text-indent: 0;
  list-style-type: none;
`

const NavLinkListItem = styled.li`
  flex: 1;
  display: block;
  margin: 24px 0px;

  & a,
  & a:visited,
  & a:active,
  & a:hover {
    text-transform: uppercase;
    color: ${(props) => props.theme.lightText} !important;
    text-decoration: none;
    letter-spacing: 2px;
  }
`

const Content = styled.div`
  flex: 1;
  padding: 16px 32px;
  height: 100%;
  overflow: auto;
  background: ${(props) => props.theme.background};
`

function StyleGuide() {
  const guides = {
    button: <ButtonStyleGuide />,
    card: <CardStyleGuide />,
    table: <TableStyleGuide />,
    label: <LabelStyleGuide />,
    badge: <BadgeStyleGuide />,
    form: <FormStyleGuide />,
    action: <ActionPopoverStyleGuide />,
    breadcrumbs: <BreadcrumbsStyleGuide />,
    tooltip: <TooltipStyleGuide />,
    ellipsis: <EllipsisMenuStyleGuide />,
    loader: <LoaderStyleguide />,
    toaster: <ToasterStyleGuide />,
    counter: <CounterStyleGuide />
  }

  function renderNavLinks() {
    return Object.entries(guides).map(([id, component]) => {
      return (
        <NavLinkListItem key={id}>
          <a href={`#${id}`}>{id}</a>
        </NavLinkListItem>
      )
    })
  }

  function renderGuides() {
    return Object.entries(guides).map(([id, component]) => {
      return (
        <div id={id} key={id}>
          {component}
        </div>
      )
    })
  }

  return (
    <React.Fragment>
      <Container>
        <NavBar>
          <NavLinkList>{renderNavLinks()}</NavLinkList>
        </NavBar>
        <Content>
          <Breadcrumbs>
            <a href='/'>Home</a>
            <span className='active'>Style Guide</span>
          </Breadcrumbs>
          <h1>Style Guide</h1>
          {renderGuides()}
        </Content>
      </Container>
    </React.Fragment>
  )
}

export default StyleGuide
