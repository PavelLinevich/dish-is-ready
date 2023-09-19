import * as React from 'react'
import { ModalUnstyled } from './ModalUnstyled'

export function Scoreboard(props) {

  return (
    <div style={{ padding: '10px', display: 'flex', gap: '10px' }}>
      <div style={{ width: '50%', minHeight: '85vh', display: 'flex', flexWrap: 'wrap', alignContent: 'flex-start', backgroundColor: '#d32f2f' }}>
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
      <div style={{ width: '50%', minHeight: '85vh', display: 'flex', flexWrap: 'wrap', alignContent: 'flex-start', backgroundColor: '#1a7f37' }}>
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