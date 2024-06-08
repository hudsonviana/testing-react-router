import React, { useState, useEffect } from 'react'
import NumberButton from './components/NumberButton'
import CountSection from './components/CountSection'

const App = () => {
  const [totalClicked, setTotalClicked] = useState(0)
  const [values, setValues] = useState([])

  const handleValue = () => {
    setTotalClicked((prev) => prev + 1)
  }

  useEffect(() => {
    const buttons = [...document.querySelectorAll('button[value]')]
    const buttonsValues = buttons.map((button) => button.value)
    console.log(buttonsValues)
    setValues(buttonsValues)
  }, [totalClicked])

  return (
    <>
      <div>
        <NumberButton num="01" handleValue={handleValue} />
        <NumberButton num="02" handleValue={handleValue} />
        <NumberButton num="03" handleValue={handleValue} />
        <NumberButton num="04" handleValue={handleValue} />
        <NumberButton num="05" handleValue={handleValue} />
        <NumberButton num="06" handleValue={handleValue} />
        <NumberButton num="07" handleValue={handleValue} />
        <NumberButton num="08" handleValue={handleValue} />
        <NumberButton num="09" handleValue={handleValue} />
        <NumberButton num="10" handleValue={handleValue} />
      </div>
      <div>
        <CountSection numButtonClicked={values} />
      </div>
    </>
  )
}

export default App
