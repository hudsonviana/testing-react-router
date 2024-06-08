import React, { useState } from 'react'
import NumberButtonNew from './NumberButtonNew'

const NumberList = () => {
  const [clickedButtons, setClickedButtons] = useState([])

  // ABORDAGEM COM TRÊS FUNÇÕES
  const addValue = (value) => (prevArray) => [...prevArray, value]
  const removeValue = (value) => (prevArray) => prevArray.filter((currVal) => currVal !== value)

  const updateListClickedButtons = (buttonClickedState, value) => {
    if (buttonClickedState) setClickedButtons(addValue(value))
    else setClickedButtons(removeValue(value))
  }

  console.log(clickedButtons)

  return (
    <div>
      <NumberButtonNew num={'01'} checkClickButton={updateListClickedButtons} />
      <NumberButtonNew num={'02'} checkClickButton={updateListClickedButtons} />
      <NumberButtonNew num={'03'} checkClickButton={updateListClickedButtons} />
      <NumberButtonNew num={'04'} checkClickButton={updateListClickedButtons} />
      <NumberButtonNew num={'05'} checkClickButton={updateListClickedButtons} />
      <NumberButtonNew num={'06'} checkClickButton={updateListClickedButtons} />
      <NumberButtonNew num={'07'} checkClickButton={updateListClickedButtons} />
      <NumberButtonNew num={'08'} checkClickButton={updateListClickedButtons} />
      <NumberButtonNew num={'09'} checkClickButton={updateListClickedButtons} />
      <NumberButtonNew num={'10'} checkClickButton={updateListClickedButtons} />

      <p>
        <b>Botões Clicados:</b>
      </p>
      <ul>
        {clickedButtons.map((buttonValue) => (
          <li key={buttonValue}>{buttonValue}</li>
        ))}
      </ul>
    </div>
  )
}

export default NumberList
