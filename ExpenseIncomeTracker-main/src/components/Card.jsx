import React, { useEffect, useState } from 'react'
import { FaTrashAlt } from "react-icons/fa";

function Card({ id, title, amount, desc, date, deleteCard }) {

  let incomeColor = "rgba(3, 201, 136, 0.9)";
  let expenseColor = "rgba(205, 24, 24, 0.9)";

  const [cardColor, setCardColor] = useState("")

  useEffect(() => {
    if (title == "Income") {
      setCardColor(incomeColor)
    } else if (title == "Expense") {
      setCardColor(expenseColor)
    }
  }, [title])

  const handleDelete = () => {
    deleteCard(id)
  }

  return (

    <>
      <div className='card' style={{ backgroundColor: cardColor }}>
        <div className='card-icon-wrap'>
          <h1>{title}</h1>
          <FaTrashAlt onClick={handleDelete} className='trash' />
        </div>
        {
          title === "Income" ? <h2>{amount}$</h2>
            : <h2>-{amount}$</h2>
        }
        <p className='card-desc'>{desc}</p>
        <p className='card-date'>{date}</p>
      </div>
    </>
  )
}

export default Card