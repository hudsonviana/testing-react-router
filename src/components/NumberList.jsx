import React, { useState } from 'react'
import NumberButtonNew from './NumberButtonNew'

const NumberList = () => {
  const [listClickedButtons, setListClickedButtons] = useState([])

  const CLICKS_LIMIT = 6
  const isButtonEnabled = listClickedButtons.length < CLICKS_LIMIT

  const dozens = Array.from({ length: 10 }, (_, i) => (i + 1).toString().padStart(2, '0'))

  const addValue = (value) => (prevList) => [...prevList, value]
  const removeValue = (value) => (prevList) => prevList.filter((currVal) => currVal !== value)

  const updateListClickedButtons = (buttonState, value) => {
    const updateList = buttonState ? addValue(value) : removeValue(value)
    setListClickedButtons(updateList)
  }

  return (
    <div>
      <p>
        {dozens.map((dozen) => (
          <NumberButtonNew
            key={dozen}
            num={dozen}
            updateListFromButton={updateListClickedButtons}
            isButtonEnabled={isButtonEnabled}
          />
        ))}
      </p>

      <p>
        <b>Botões Clicados:</b>
      </p>
      <ul>
        {listClickedButtons.map((buttonValue) => (
          <li key={buttonValue}>{buttonValue}</li>
        ))}
      </ul>
    </div>
  )
}

export default NumberList
