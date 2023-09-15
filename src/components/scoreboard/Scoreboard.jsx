import React, { useState } from 'react'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import './Scoreboard.css'

function Scoreboard() {
  const [orders, setOrders] = useState([
    { id: 1, status: 'ready' }
  ])
  const [inputText, setInputText] = useState("")
  const [lastOrderNumber, setLastOrderNumber] = useState(2)

  const handleChange = (e) => {
    setInputText(e.currentTarget.value)
  }

  const createOrderClick = () => {
    inputText === '' ? nextOrderNumber() : customOrderNumber()
  }

  const nextOrderNumber = () => {
    const order = {
      id: lastOrderNumber,
      status: 'open',
    }
    setOrders([...orders, order]);
    setLastOrderNumber(Number(lastOrderNumber) + 1)
  }

  const customOrderNumber = () => {
    const order = {
      id: inputText,
      status: 'open',
    }
    setOrders([...orders, order]);
    setLastOrderNumber(Number(inputText) + 1)
    setInputText('')
  }

  const onKeyPressHandler = (e) => {
    if (e.key === 'Enter') {
      createOrderClick()
    }
  }

  const changeOrderStatusClick = () => {
    alert(12)
  }

  return (
    <div>
      <div style={{ padding: '10px', display: 'flex', }}>
        <TextField
          label='Add order number'
          variant='standard'
          onChange={handleChange}
          onKeyDown={onKeyPressHandler}
          value={inputText}
          className='createOrder'
          type='number'
        />
        <Button
          onClick={createOrderClick}
          style={{ marginLeft: '10px' }}
          variant='contained'
          color='error'
        >
          Create order
        </Button>
      </div>
      <div className='scoreboard'>
        <div className='leftScoreboard' onClick={changeOrderStatusClick}>
          {orders.filter(order => order.status === 'open').map((element) => {
            return (
              <div key={element.id} className='orderCook'>
                <p>{element.id}</p>
              </div>
            )
          })}
        </div>
        <div className='rightScoreboard' onClick={changeOrderStatusClick}>
          {orders.filter(order => order.status === 'ready').map((element) => {
            return (
              <div key={element.id} className='orderCook'>
                <p>{element.id}</p>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  );
}

export default Scoreboard
