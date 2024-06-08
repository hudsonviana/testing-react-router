import { useState } from 'react'

const NumberButtonNew = ({ num, sendDataToButton }) => {
  const [buttonClickedState, setButtonClickedState] = useState(false)

  const buttonClickedStyles = {
    backgroundColor: 'blue',
    color: 'white',
    marginRight: '5px',
  }

  const buttonUnclickedStyles = {
    backgroundColor: '#cecece',
    marginRight: '5px',
  }

  const buttonClickHandler = () => {
    setButtonClickedState((prevState) => !prevState)
    sendDataToButton(!buttonClickedState, num)
  }

  return (
    <button
      onClick={buttonClickHandler}
      value={num}
      style={buttonClickedState ? buttonClickedStyles : buttonUnclickedStyles}
    >
      {num}
    </button>
  )
}

export default NumberButtonNew
