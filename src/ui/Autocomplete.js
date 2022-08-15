import React, { useState, useRef } from 'react'
import styled from 'styled-components'
import { rgba } from 'polished'

import Dropdown from './Dropdown'
import { useFetch } from '../Fetch'

const Selected = styled('div')`
  flex: 1;
  width: 100%;
  border: 2px solid ${(props) => rgba(props.theme.text, 0.4)};
  padding: 8px 16px;
  font-size: 13px;
  border-radius: 3px;
  color: ${(props) => rgba(props.theme.text, 0.4)};

  &.highlighted {
    color: ${(props) => props.theme.lightText};
    border-color: ${(props) => props.theme.lightText};
  }
`

const StyledLink = styled('a')`
  cursor: pointer;
  display: flex;
  flex-direction: row;
  align-items: center;
  line-height: 48px;
  width: 100%;
  & > svg {
    margin-right: 16px;
  }
  & > span {
    flex: 1;
  }
`

function DefaultResultRenderer(result) {
  function getText() {
    if (!result) {
      return []
    }

    if (result.name) {
      return result.name
    }

    if (result.name_translations) {
      return result.name_translations.en
    }

    if (result.title) {
      return result.title
    }

    if (result.title_translations) {
      return result.title_translations.en
    }

    return result || '&nbsp;'
  }

  return <span>{getText()}</span>
}

function Autocomplete({
  onSelect,
  url,
  value,
  resultRenderer,
  placeholder,
  highlighted,
  extraReqHeaders
}) {
  const [query, setQuery] = useState('')
  const [timer, setTimer] = useState(null)
  const [search, setSearch] = useState()
  const [querying, setQuerying] = useState()
  const [open, setOpen] = useState(false)
  const [results, setResults] = useState([])
  const inputRef = useRef(null)

  function executeQuery(e) {
    setQuery(e.target.value)
    if (timer) {
      clearTimeout(timer)
    }

    const newTimer = setTimeout(() => {
      if (e.target.value.length >= 3) {
        setSearch(e.target.value)
      }
    }, 500)
    setTimer(newTimer)
  }

  function renderResults() {
    const renderer = resultRenderer || DefaultResultRenderer
    return results.map((result) => (
      <StyledLink
        href='/'
        key={result.id || results.indexOf(result)}
        onClick={(e) => {
          e.preventDefault()
          selectResult(result)
        }}
        onMouseDown={(e) => {
          e.preventDefault()
          selectResult(result)
        }}
      >
        {renderer(result)}
      </StyledLink>
    ))
  }

  function startQuerying() {
    setQuerying(true)
    onSelect(null)
    setTimeout(() => {
      inputRef.current.focus()
      positionPopup()
    })
  }

  function renderSelected() {
    const renderer = resultRenderer || DefaultResultRenderer
    return (
      <Selected
        className={highlighted ? 'highlighted' : ''}
        onClick={() => startQuerying()}
      >
        {value ? renderer(value) : placeholder || 'Click to search'}
      </Selected>
    )
  }

  function selectResult(result) {
    onSelect(result)
    setOpen(false)
    setQuerying(false)
  }

  function applyResults(data) {
    let results = data
    if (data.results) {
      results = data.results
    }
    setResults(results)
    setOpen(true)
  }

  function positionPopup() {
    const menu = inputRef.current.parentElement.querySelector('nav')

    const { top, left, bottom } = inputRef.current.getBoundingClientRect()
    const { width, height } = menu.getBoundingClientRect()

    let newTop = bottom + 5
    let newLeft = left
    const maxHeight =
      document.documentElement.clientHeight - newTop - menu.clientHeight - 5

    if (newTop + height > document.documentElement.clientHeight) {
      newTop = top - height
    }

    if (newLeft + width > document.documentElement.clientWidth) {
      newLeft = left - width
    }

    menu.style.left = `${newLeft}px`
    menu.style.top = `${newTop}px`
    menu.style.maxHeight = `${maxHeight}px`
  }

  function closeMenu() {
    setTimeout(() => {
      setOpen(false)
      setQuerying(false)
    })
  }

  const encodedQuery = encodeURIComponent(search)
  useFetch(
    `${url}?q=${encodedQuery}&query=${encodedQuery}`,
    applyResults,
    [search],
    extraReqHeaders
  )

  // TODO: Keydown handler for esc to close query
  return (
    <React.Fragment>
      {!querying ? renderSelected() : []}
      {querying ? (
        <input
          type='text'
          ref={inputRef}
          value={query}
          placeholder={placeholder}
          onChange={executeQuery}
          onBlur={closeMenu}
        />
      ) : (
        []
      )}
      <Dropdown open={open}>{renderResults()}</Dropdown>
    </React.Fragment>
  )
}

export default Autocomplete
