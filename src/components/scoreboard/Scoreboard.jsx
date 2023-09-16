import React, { useState } from 'react'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
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

  const [anchorEl, setAnchorEl] = useState(null)
  const open = anchorEl
  const changeOrderStatusClick = (event) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = (e) => {
    setAnchorEl(null)
    console.log(e);
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
        <div className='leftScoreboard'>
          {orders.filter(order => order.status === 'open').map((element) => {
            return (
              <div>
                <Button
                  key={element.id}
                  variant='contained'
                  id="basic-button"
                  aria-controls={open ? 'basic-menu' : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? 'true' : undefined}
                  onClick={changeOrderStatusClick}
                >
                  <p>{element.id}</p>
                </Button>
                <Menu
                  id="basic-menu"
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  MenuListProps={{ 'aria-labelledby': 'basic-button' }}
                >
                  <MenuItem onClick={handleClose}>Order ready</MenuItem>
                  <MenuItem onClick={handleClose}>Order close</MenuItem>
                </Menu>
              </div>
            )
          })}
        </div>
        <div className='rightScoreboard'>
          {orders.filter(order => order.status === 'ready').map((element) => {
            return (
              <Button
                key={element.id}
                variant='contained'
                onClick={changeOrderStatusClick}
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
