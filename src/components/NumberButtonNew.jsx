import { useState } from 'react'
import styles from './styles.module.css'

const NumberButtonNew = ({ num, updateListFromButton, isButtonEnabled }) => {
  const [isButtonClicked, setIsButtonClicked] = useState(false)

  const addButtonValue = (value) => (prevList) => [...prevList, value]
  const removeButtonValue = (value) => (prevList) => prevList.filter((currVal) => currVal !== value)

  const buttonClickHandler = () => {
    if (isButtonClicked || isButtonEnabled) {
      setIsButtonClicked((prevState) => !prevState)
      updateListFromButton(isButtonClicked ? removeButtonValue(num) : addButtonValue(num))
    }
  }

  return (
    <button
      className={`${styles.btn} ${isButtonClicked ? styles.btnClicked : ''}`}
      onClick={buttonClickHandler}
    >
      {num}
    </button>
  )
}

export default NumberButtonNew
