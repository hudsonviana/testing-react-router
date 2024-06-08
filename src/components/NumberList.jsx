import React, { useState } from 'react'
import NumberButtonNew from './NumberButtonNew'

const NumberList = () => {
  const [clickedButtons, setClickedButtons] = useState([])

  // ABORDAGEM COM TRÊS FUNÇÕES
  const addValue = (value) => (prevArray) => [...prevArray, value]
  const removeValue = (value) => (prevArray) => prevArray.filter((currVal) => currVal !== value)

  const receiveDataFromButton = (buttonClickedState, value) => {
    if (buttonClickedState) setClickedButtons(addValue(value))
    else setClickedButtons(removeValue(value))
  }

  // ABORDAGEM COM DUAS FUNÇÕES
  // const addOrRemoveValue = (state, value) => {
  //   if (state) return (prevArray) => [...prevArray, value]
  //   return (prevArray) => prevArray.filter((currVal) => currVal !== value)
  // }

  // const receiveDataFromButton = (state, value) => {
  //   setClickedButtons(addOrRemoveValue(state, value))
  // }

  // ABORDAGEM COM UMA ÚNICA FUNÇÃO
  // const receiveDataFromButton = (state, value) => {
  //   if (state) {
  //     return setClickedButtons((prevArray) => [...prevArray, value])
  //   }
  //   return setClickedButtons((prevArray) =>
  //     prevArray.filter((currVal) => currVal !== value)
  //   )
  // }

  console.log(clickedButtons)

  return (
    <div>
      <NumberButtonNew num={'01'} sendDataToButton={receiveDataFromButton} />
      <NumberButtonNew num={'02'} sendDataToButton={receiveDataFromButton} />
      <NumberButtonNew num={'03'} sendDataToButton={receiveDataFromButton} />
      <NumberButtonNew num={'04'} sendDataToButton={receiveDataFromButton} />
      <NumberButtonNew num={'05'} sendDataToButton={receiveDataFromButton} />
      <NumberButtonNew num={'06'} sendDataToButton={receiveDataFromButton} />
      <NumberButtonNew num={'07'} sendDataToButton={receiveDataFromButton} />
      <NumberButtonNew num={'08'} sendDataToButton={receiveDataFromButton} />
      <NumberButtonNew num={'09'} sendDataToButton={receiveDataFromButton} />
      <NumberButtonNew num={'10'} sendDataToButton={receiveDataFromButton} />

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
