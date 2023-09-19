import * as React from 'react'
import Button from '@mui/material/Button'

export function Scoreboard(props) {

  const changeOrderStatus = (id, status) => {
    let order = props.orders.filter(el => el.id === id)
    if (order) {
      order[0].status = 'ready';
      props.setOrders([...props.orders]);
    }
  }

  const closeOrderStatus = (id, status) => {
    let order = props.orders.filter(el => el.id === id)
    if (order) {
      order[0].status = 'close';
      props.setOrders([...props.orders]);
    }
  }

  return (
    <div style={{ padding: '10px', display: 'flex', gap: '10px' }}>
      <div style={{ width: '50%' }}>
        {props.orders.filter(order => order.status === 'open').map((element) => {
          const changeOrderStatusClick = () => { changeOrderStatus(element.id, element.status) }
          return (
            <Button
              size='large'
              key={element.id}
              variant='contained'
              color='error'
              onClick={changeOrderStatusClick}
              style={{ fontSize: '2rem' }}
            >
              {element.id}
            </Button>

          )
        })}
      </div>
      <div className='rightScoreboard'>
        {props.orders.filter(order => order.status === 'ready').map((element) => {
          const closeOrderStatusClick = () => { closeOrderStatus(element.id, element.status) }
          return (
            <Button
              key={element.id}
              variant='contained'
              color="success"
              onClick={closeOrderStatusClick}
              style={{ fontSize: '2rem' }}
            >
              {element.id}
            </Button>
          )
        })}
      </div>
    </div>
  );
}