import React, { useState } from 'react'
import Card from '../Card'
import Checkbox from '../Checkbox'
import SearchField from '../SearchField'

function FormStyleGuide() {
  const [checked, setChecked] = useState(false)
  const [search, setSearch] = useState('')

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
    </Card>
  )
}

export default FormStyleGuide
