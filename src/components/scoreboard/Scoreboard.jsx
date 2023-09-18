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

  return (
    <div>
      <div style={{ padding: '10px', display: 'flex', }}>
        <Button
          onClick={createOrderClick}
          style={{ marginRight: '10px' }}
          variant='contained'
          color='error'
        >
          Create order
        </Button>
        <TextField
          label={'№ ' + lastOrderNumber + ' or Add order number'}
          variant='standard'
          onChange={handleChange}
          onKeyDown={onKeyPressHandler}
          value={inputText}
          className='createOrder'
          type='number'
        />
      </div>
      <div className='scoreboard'>
        <div className='leftScoreboard'>
          {orders.filter(order => order.status === 'open').map((element) => {
            return (
                <Button
                  key={element.id}
                  variant='contained'

                >
                  <p>{element.id}</p>
                </Button>
            )
          })}
        </div>
        <div className='rightScoreboard'>
          {orders.filter(order => order.status === 'ready').map((element) => {
            return (
              <Button
                key={element.id}
                variant='contained'
              >
                <p>{element.id}</p>
              </Button>
            )
          })}
        </div>
      </div>
    </div>
  );
}

export default Scoreboard
