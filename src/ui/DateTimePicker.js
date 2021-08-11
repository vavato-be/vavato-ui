import React from 'react'
import moment from 'moment-timezone'
import styled from 'styled-components'
import calendarIcon from '../../assets/icons/calendar.svg'

const DateTimePickerStyle = styled.input.attrs({ type: 'datetime-local' })`
  width: 200px;
  color: ${(props) => props.theme.text};
  padding: 0.5rem;
  text-align: right;
  font-size: 0.75rem;
  border-radius: 5px;
  border: 2px solid #c4c4c4;
  background: linear-gradient(to right, #fff 80%, #c4c4c4 20%);
  background-size: 200px;
  background-repeat: no-repeat;

  ::-webkit-calendar-picker-indicator {
    display: block;
    border-width: thin;
    background: ${(props) => `url(${props.calendarIcon}) no-repeat right`};
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
      calendarIcon={calendarIcon}
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
