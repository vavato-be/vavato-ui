import React from 'react'
import moment from 'moment-timezone'
import styled from 'styled-components'

const DateTimePickerStyle = styled.input.attrs({ type: 'datetime-local' })`
  max-width: 200px;
  color: ${(props) => props.theme.text};
  padding: 8px;
  text-align: right;
  font-size: 0.75rem;
  border-radius: 5px;
  border: ${(props) => `2px solid ${props.theme.darkBackground}`};
  background: linear-gradient(to right, #fff 80%, #c4c4c4 20%);
  background-size: 200px;
  background-repeat: no-repeat;

  ::-webkit-calendar-picker-indicator {
    display: block;
    border-width: thin;
    background: url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTciIGhlaWdodD0iMTciIHZpZXdCb3g9IjAgMCAxNyAxNyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMi42NjY3NSAxMy45MTY4QzIuNjY2NzUgMTQuNjA2OSAzLjIyNjY0IDE1LjE2NjggMy45MTY3NSAxNS4xNjY4SDEzLjA4MzRDMTMuNzczNSAxNS4xNjY4IDE0LjMzMzQgMTQuNjA2OSAxNC4zMzM0IDEzLjkxNjhWNi44MzM1SDIuNjY2NzVWMTMuOTE2OFpNMTEuMDAwMSA4LjgxMjY2QzExLjAwMDEgOC42NDA3OSAxMS4xNDA3IDguNTAwMTYgMTEuMzEyNiA4LjUwMDE2SDEyLjM1NDJDMTIuNTI2MSA4LjUwMDE2IDEyLjY2NjcgOC42NDA3OSAxMi42NjY3IDguODEyNjZWOS44NTQzM0MxMi42NjY3IDEwLjAyNjIgMTIuNTI2MSAxMC4xNjY4IDEyLjM1NDIgMTAuMTY2OEgxMS4zMTI2QzExLjE0MDcgMTAuMTY2OCAxMS4wMDAxIDEwLjAyNjIgMTEuMDAwMSA5Ljg1NDMzVjguODEyNjZaTTExLjAwMDEgMTIuMTQ2QzExLjAwMDEgMTEuOTc0MSAxMS4xNDA3IDExLjgzMzUgMTEuMzEyNiAxMS44MzM1SDEyLjM1NDJDMTIuNTI2MSAxMS44MzM1IDEyLjY2NjcgMTEuOTc0MSAxMi42NjY3IDEyLjE0NlYxMy4xODc3QzEyLjY2NjcgMTMuMzU5NSAxMi41MjYxIDEzLjUwMDIgMTIuMzU0MiAxMy41MDAySDExLjMxMjZDMTEuMTQwNyAxMy41MDAyIDExLjAwMDEgMTMuMzU5NSAxMS4wMDAxIDEzLjE4NzdWMTIuMTQ2Wk03LjY2Njc1IDguODEyNjZDNy42NjY3NSA4LjY0MDc5IDcuODA3MzcgOC41MDAxNiA3Ljk3OTI1IDguNTAwMTZIOS4wMjA5MUM5LjE5Mjc5IDguNTAwMTYgOS4zMzM0MSA4LjY0MDc5IDkuMzMzNDEgOC44MTI2NlY5Ljg1NDMzQzkuMzMzNDEgMTAuMDI2MiA5LjE5Mjc5IDEwLjE2NjggOS4wMjA5MSAxMC4xNjY4SDcuOTc5MjVDNy44MDczNyAxMC4xNjY4IDcuNjY2NzUgMTAuMDI2MiA3LjY2Njc1IDkuODU0MzNWOC44MTI2NlpNNy42NjY3NSAxMi4xNDZDNy42NjY3NSAxMS45NzQxIDcuODA3MzcgMTEuODMzNSA3Ljk3OTI1IDExLjgzMzVIOS4wMjA5MUM5LjE5Mjc5IDExLjgzMzUgOS4zMzM0MSAxMS45NzQxIDkuMzMzNDEgMTIuMTQ2VjEzLjE4NzdDOS4zMzM0MSAxMy4zNTk1IDkuMTkyNzkgMTMuNTAwMiA5LjAyMDkxIDEzLjUwMDJINy45NzkyNUM3LjgwNzM3IDEzLjUwMDIgNy42NjY3NSAxMy4zNTk1IDcuNjY2NzUgMTMuMTg3N1YxMi4xNDZaTTQuMzMzNDEgOC44MTI2NkM0LjMzMzQxIDguNjQwNzkgNC40NzQwNCA4LjUwMDE2IDQuNjQ1OTEgOC41MDAxNkg1LjY4NzU4QzUuODU5NDYgOC41MDAxNiA2LjAwMDA4IDguNjQwNzkgNi4wMDAwOCA4LjgxMjY2VjkuODU0MzNDNi4wMDAwOCAxMC4wMjYyIDUuODU5NDYgMTAuMTY2OCA1LjY4NzU4IDEwLjE2NjhINC42NDU5MUM0LjQ3NDA0IDEwLjE2NjggNC4zMzM0MSAxMC4wMjYyIDQuMzMzNDEgOS44NTQzM1Y4LjgxMjY2Wk00LjMzMzQxIDEyLjE0NkM0LjMzMzQxIDExLjk3NDEgNC40NzQwNCAxMS44MzM1IDQuNjQ1OTEgMTEuODMzNUg1LjY4NzU4QzUuODU5NDYgMTEuODMzNSA2LjAwMDA4IDExLjk3NDEgNi4wMDAwOCAxMi4xNDZWMTMuMTg3N0M2LjAwMDA4IDEzLjM1OTUgNS44NTk0NiAxMy41MDAyIDUuNjg3NTggMTMuNTAwMkg0LjY0NTkxQzQuNDc0MDQgMTMuNTAwMiA0LjMzMzQxIDEzLjM1OTUgNC4zMzM0MSAxMy4xODc3VjEyLjE0NlpNMTMuMDgzNCAzLjUwMDE2SDExLjgzMzRWMi4yNTAxNkMxMS44MzM0IDIuMDIxIDExLjY0NTkgMS44MzM1IDExLjQxNjcgMS44MzM1SDEwLjU4MzRDMTAuMzU0MiAxLjgzMzUgMTAuMTY2NyAyLjAyMSAxMC4xNjY3IDIuMjUwMTZWMy41MDAxNkg2LjgzMzQxVjIuMjUwMTZDNi44MzM0MSAyLjAyMSA2LjY0NTkxIDEuODMzNSA2LjQxNjc1IDEuODMzNUg1LjU4MzQxQzUuMzU0MjUgMS44MzM1IDUuMTY2NzUgMi4wMjEgNS4xNjY3NSAyLjI1MDE2VjMuNTAwMTZIMy45MTY3NUMzLjIyNjY0IDMuNTAwMTYgMi42NjY3NSA0LjA2MDA2IDIuNjY2NzUgNC43NTAxNlY2LjAwMDE2SDE0LjMzMzRWNC43NTAxNkMxNC4zMzM0IDQuMDYwMDYgMTMuNzczNSAzLjUwMDE2IDEzLjA4MzQgMy41MDAxNloiIGZpbGw9IiNmZmYiLz48L3N2Zz4=')
      no-repeat right;
  }

  :disabled {
    background: #dddddd;
  }
`

function DateTimePicker({
  datetime,
  setDatetime,
  timezone,
  disabled,
  min,
  max,
  onKeyDown
}) {
  function toTimeZone(datetime) {
    return moment.tz(datetime, 'UTC').tz(timezone).format('yyyy-MM-DDTHH:mm')
  }

  function fromTimeZone(datetime) {
    return moment.tz(datetime, timezone).tz('UTC').format()
  }

  return (
    <DateTimePickerStyle
      value={toTimeZone(datetime)}
      onChange={(e) => setDatetime(fromTimeZone(e.target.value))}
      disabled={!!disabled}
      min={min}
      max={max}
      onKeyDown={onKeyDown}
    />
  )
}

export default DateTimePicker
