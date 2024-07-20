import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Card from './components/Card'



function App() {


  const [balance, setBalance] = useState(0);
  // Income?Expense select control
  const [title, setTitle] = useState("Income");
  // Input Value control
  const [amount, setAmount] = useState("");
  //Description 
  const [desc, setDesc] = useState("")
  //Date
  const [date, setDate] = useState("")
  //Cards
  const [cards, SetCards] = useState([]);

  //Card ekleme fonksiyonu
  const addCard = () => {
    if (!title || !amount || !desc || !date) {
      alert("please fill in all inputs")
      return
    }
    const card = {
      id: Math.floor(Math.random() * 99999),
      titlevalue: title,
      amountvalue: amount,
      descvalue: desc,
      datevalue: date
    }
    SetCards(oldCards => [...oldCards, card])

    if (title === "Income") {
      setBalance(balance + amount)
    } else if (title === "Expense") {
      setBalance(balance - amount)
    }
    setAmount("");
    setDate("");
    setDesc("")
  }

  const deleteCard = (id) => {

    const deleteCard = cards.find(card => card.id === id)
    const newArr = cards.filter(card => card.id !== id)

    if (deleteCard.titlevalue === "Income") {
      setBalance(balance - deleteCard.amountvalue)
    } else if (deleteCard.titlevalue === "Expense") {
      setBalance(balance + deleteCard.amountvalue)
    }
    SetCards(newArr)

  }

  // Income? Expense Value 
  const catchSelectValue = (event) => {
    const selectval = event.target.value;
    setTitle(selectval)
  }
  // InputVal
  const catchamountVal = (event) => {
    const amountVal = parseFloat(event.target.value);
    setAmount(amountVal || 0);
    setAmount(amountVal)

  }
  //desc Input
  const catchDescVal = (event) => {
    const descVal = event.target.value
    setDesc(descVal)
  }
  //dateValue
  const catchDateVal = (event) => {
    const dateVal = event.target.value
    setDate(dateVal)
  }

  return (
    <div className='app'>
      <Navbar></Navbar>
      <div className="InputComp">
        <div className="balance-div">
          <h1>Balance {balance} $</h1>
        </div>
        <div className="inputs-div">
          <select onChange={catchSelectValue} className="style-input">
            <option disabled selected hidden>Income?Expense</option>
            <option>Income</option>
            <option>Expense</option>
          </select>
          <input onChange={catchamountVal} value={amount} className="style-input" type="number" placeholder="enter value $" min={1} />
          <input onChange={catchDescVal} value={desc} className="style-input" placeholder="description" type="text" maxLength={118} />
          <input onChange={catchDateVal} value={date} className="style-input" type="date" />
          <button onClick={addCard} className='addBtn'>Add</button>
        </div>
      </div>

      <div className='card-wrap'>
        {
          cards.map(card => {
            return (
              <Card
                key={card.id}
                id={card.id}
                title={card.titlevalue}
                amount={card.amountvalue}
                desc={card.descvalue}
                date={card.datevalue}
                deleteCard={deleteCard}>
              </Card>
            )
          })

        }


      </div>
    </div>
  )
}

export default App
