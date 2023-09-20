import * as React from 'react'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'

export function CreateOrder(props) {

  const createOrderClick = () => {
    props.inputText === '' ? nextOrderNumber() : customOrderNumber()
  }

  const nextOrderNumber = () => {
    const order = {
      id: props.lastOrderNumber,
      status: 'open',
    }
    props.setOrders([...props.orders, order])
    props.setLastOrderNumber(Number(props.lastOrderNumber) + 1)
  }

  const customOrderNumber = () => {
    const order = {
      id: props.inputText,
      status: 'open',
    }
    props.setOrders([...props.orders, order])
    props.setLastOrderNumber(Number(props.inputText) + 1)
    props.setInputText('')
  }

  const handleChange = (e) => {
    props.setInputText(e.currentTarget.value)
  }

  const onKeyPressHandler = (e) => {
    if (e.key === 'Enter') {
      createOrderClick()
    }
  }

  return (
    <div style={{ padding: '10px', display: 'flex', alignItems: 'baseline' }}>
      <Button
        onClick={createOrderClick}
        variant='contained'
        style={{
          marginRight: '10px',
          backgroundColor: 'red',
          fontWeight: 'bold'
        }}
      >
        Create order
      </Button>
      <TextField
        label={'№ ' + props.lastOrderNumber + ' or Add order number'}
        variant='standard'
        onChange={handleChange}
        onKeyDown={onKeyPressHandler}
        value={props.inputText}
        type='number'
        color='error'
        InputLabelProps={{
          style: {
            color: '#ffffff'
          }
        }}
        inputProps={{
          style: {
            color: "#ffffff"
          }
        }}
      />
    </div>
  )
}