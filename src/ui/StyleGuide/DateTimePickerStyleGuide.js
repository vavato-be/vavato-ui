import React, { useState } from 'react'
import Card from '../Card'
import DateTimePicker from '../DateTimePicker'

function DateTimePickerStyleGuide() {
  const [datetime, setDatetime] = useState('2021-05-15T08:00:00.000Z')

  return (
    <Card>
      <div className='title'>&lt;Date Time Picker&gt;</div>
      <p>A datetime picker serves to select a datetime within a given range.</p>
      <Card>
        <DateTimePicker
          datetime={datetime}
          setDatetime={setDatetime}
          timezone='Europe/Brussels'
          min='2021-05-01T08:00:00.000Z'
          max='2021-05-31T08:00:00.000Z'
        />
      </Card>
    </Card>
  )
}

export default DateTimePickerStyleGuide
