import { useState } from 'react'
import styles from './styles.module.css'

const NumberButtonNew = ({ num, checkClickButton }) => {
  const [buttonClickedState, setButtonClickedState] = useState(false)

  const buttonClickHandler = () => {
    setButtonClickedState((prevState) => !prevState)
    checkClickButton(!buttonClickedState, num)
  }

  return (
    <button
      className={`${styles.btn} ${buttonClickedState ? styles.btnClicked : ''}`}
      onClick={buttonClickHandler}
      value={num}
    >
      {num}
    </button>
  )
}

export default NumberButtonNew
