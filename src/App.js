import * as React from 'react'
import { CreateOrder } from './components/CreateOrder'
import { Scoreboard } from './components/Scoreboard'

export function App() {

  const [orders, setOrders] = React.useState([])
  const [inputText, setInputText] = React.useState("")
  const [lastOrderNumber, setLastOrderNumber] = React.useState(1)

  return (
    <div className="App">
      <CreateOrder
        orders={orders}
        setOrders={setOrders}
        inputText={inputText}
        setInputText={setInputText}
        lastOrderNumber={lastOrderNumber}
        setLastOrderNumber={setLastOrderNumber}
      />
      <Scoreboard
        orders={orders}
        setOrders={setOrders}
      />
    </div>
  )
}