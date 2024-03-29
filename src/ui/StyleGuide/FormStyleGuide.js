import React, { useState } from 'react'
import Card from '../Card'
import Checkbox from '../Checkbox'
import RadioButton from '../RadioButton'
import SearchField from '../SearchField'
import Switch from '../Switch'
import DateTimePicker from '../DateTimePicker'
import Counter from '../Counter'

function FormStyleGuide() {
  const [checked, setChecked] = useState(false)
  const [search, setSearch] = useState('')
  const [switchState, setSwitchState] = useState(false)
  const [radioState, setRadioState] = useState('orange')
  const [datetime, setDatetime] = useState('2021-05-15T08:00:00.000Z')
  const [counter, setCounter] = useState(0)

  function handleCheckboxChanged(value) {
    setChecked(value)
  }

  return (
    <Card>
      <div className='title'>Form Controls</div>
      <p>Elements to create forms with.</p>
      <Card>
        <div className='title'>&lt;Checkbox&gt;</div>
        <p>
          A custom styled checkbox. Accepts binding to{' '}
          <span className='pre'>value</span> and &nbsp;
          <span className='pre'>onChange</span>. Props are passed to the
          underlying &nbsp;<span className='pre'>&lt;input&gt;</span>
        </p>
        <Checkbox
          name='checkbox'
          id='checkbox'
          value={checked}
          onChange={(e) => handleCheckboxChanged(e)}
        >
          Accept terms and conditions
        </Checkbox>
        <p>Value: {checked.toString()}</p>
      </Card>
      <Card>
        <div className='title'>&lt;SearchField&gt;</div>
        <p>
          An input field formatted as a search box that automatically expands
          when focused.
        </p>
        <SearchField
          placeholder='Search for anything you might want, like a payment request or an invoice.'
          onChange={(value) => setSearch(value)}
        />
        <p>Value: {search}</p>
      </Card>
      <Card>
        <div className='title'>&lt;Switch&gt;</div>
        <p>A switch input field serves to enable and disable a state</p>
        <Switch
          checked={switchState}
          onCheck={() => {
            setSwitchState(!switchState)
          }}
        />
      </Card>
      <Card>
        <div className='title'>&lt;Radio Button&gt;</div>
        <p>A custom radio button providing many options to be selected</p>
        {['orange', 'banana', 'apple'].map((option) => (
          <RadioButton
            key={`radio.${option}`}
            name={`radio.${option}`}
            value={option}
            checked={radioState === option}
            onCheck={() => {
              setRadioState(option)
            }}
          />
        ))}
      </Card>
      <Card>
        <div className='title'>&lt;Date Time Picker&gt;</div>
        <p>
          A datetime picker serves to select a datetime within a given range.
        </p>
        <DateTimePicker
          datetime={datetime}
          setDatetime={setDatetime}
          timezone='Europe/Brussels'
          min='2021-05-01T08:00:00.000Z'
          max='2021-05-31T08:00:00.000Z'
        />
      </Card>
      <Card>
        <div className='title'>&lt;Counter&gt;</div>
        <p>
          A counter serves to count up and down (it's needed to set a minValue).
        </p>
        <Counter minValue={0} setCounter={setCounter} counter={counter} />
      </Card>
    </Card>
  )
}

export default FormStyleGuide
