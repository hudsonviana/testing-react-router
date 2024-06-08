import { useState } from 'react'
import styles from './styles.module.css'

const NumberButtonNew = ({ num, updateListFromButton, isButtonEnabled }) => {
  const [isButtonClicked, setIsButtonClicked] = useState(false)

  const buttonClickHandler = () => {
    if (isButtonClicked || isButtonEnabled) {
      setIsButtonClicked((prevState) => !prevState)
      updateListFromButton(!isButtonClicked, num)
    }
  }

  return (
    <button
      className={`${styles.btn} ${isButtonClicked ? styles.btnClicked : ''}`}
      onClick={buttonClickHandler}
      value={num}
    >
      {num}
    </button>
  )
}

export default NumberButtonNew
