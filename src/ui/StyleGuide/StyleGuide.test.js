import React from 'react'
import { MemoryRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { render, screen } from '@testing-library/react'

import StyleGuide from './StyleGuide'
import VavatoTheme from '../VavatoTheme'
describe('StyleGuide', () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <ThemeProvider theme={VavatoTheme}>
          <StyleGuide />
        </ThemeProvider>
      </MemoryRouter>
    )
  })

  it('has a section on Button', () => {
    expect(screen.queryAllByText('button')[0]).toBeInTheDocument()
  })
  it('has a section on Badge', () => {
    expect(screen.queryAllByText('badge')[0]).toBeInTheDocument()
  })
  it('has a section on Label', () => {
    expect(screen.queryAllByText('label')[0]).toBeInTheDocument()
  })
  it('has a section on Card', () => {
    expect(screen.queryAllByText('card')[0]).toBeInTheDocument()
  })
  it('has a section on Forms', () => {
    expect(screen.queryAllByText('form')[0]).toBeInTheDocument()
  })
})
