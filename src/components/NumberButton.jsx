import { useState } from 'react'

const NumberButton = ({ num, handleValue }) => {
  const buttonClickedStyles = {
    backgroundColor: 'red',
    color: 'white',
    marginRight: '5px',
  }

  const buttonUnclickedStyles = {
    backgroundColor: '#cecece',
    marginRight: '5px',
  }

  const [buttonClickedState, setbuttonClickedState] = useState(false)

  const handleButtonState = () => {
    setbuttonClickedState((prevState) => !prevState)
    handleValue()
  }

  return (
    <button
      onClick={handleButtonState}
      value={buttonClickedState ? num : null}
      style={buttonClickedState ? buttonClickedStyles : buttonUnclickedStyles}
    >
      {num}
    </button>
  )
}

export default NumberButton
