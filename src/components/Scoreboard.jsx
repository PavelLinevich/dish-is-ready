import * as React from 'react'
import { ModalUnstyled } from './ModalUnstyled'
import LeftImage from '../images/left.jpg'
import RightImage from '../images/right.jpg'

export function Scoreboard(props) {

  return (
    <div style={{ padding: '10px', display: 'flex', gap: '10px' }}>
      <div style={{
        padding: '5px',
        width: '50%',
        minHeight: '85vh',
        display: 'flex',
        flexWrap: 'wrap',
        alignContent: 'flex-start',
        backgroundImage: `url(${LeftImage})`,
        backgroundSize: 'cover'
      }}>
        {props.orders.filter(order => order.status === 'open').map((element) => {
          return (
            <ModalUnstyled
              key={element.id}
              element={element}
              orders={props.orders}
              setOrders={props.setOrders}
            />
          )
        })}
      </div>
      <div style={{
        padding: '5px',
        width: '50%',
        minHeight: '85vh',
        display: 'flex',
        flexWrap: 'wrap',
        alignContent: 'flex-start',
        backgroundImage: `url(${RightImage})`,
        backgroundSize: 'cover'
      }}>
        {props.orders.filter(order => order.status === 'ready').map((element) => {
          return (
            <ModalUnstyled
              key={element.id}
              element={element}
              orders={props.orders}
              setOrders={props.setOrders}
            />
          )
        })}
      </div>
    </div >
  )
}