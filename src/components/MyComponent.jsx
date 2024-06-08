import React, { useState } from 'react'

const MyComponent = () => {
  const [foods, setFoods] = useState(['Apple', 'Orange', 'Banana', 'Grapes'])

  const handleAddFood = () => {
    const newFood = document.getElementById('foodInput').value
    setFoods((prevFoods) => [...prevFoods, newFood])
  }

  const handleRemoveFood = (index) => {
    setFoods((prevFoods) => [...prevFoods].filter((_, i) => i !== index))
  }

  return (
    <div>
      <input type="text" id="foodInput" placeholder="Enter food name" />
      <button onClick={handleAddFood}>add Food</button>

      <h2>Lista de Frutas</h2>
      <ul>
        {foods.map((food, index) => (
          <li key={index}>
            {food}
            &nbsp;
            <button onClick={() => handleRemoveFood(index)}>x</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default MyComponent
