import * as React from 'react'
import { CreateOrder } from './components/src/CreateOrder';
import { Scoreboard } from './components/src/Scoreboard';
import './App.css';

function App() {

  const [orders, setOrders] = React.useState([{ id: 1, status: 'ready' }])
  const [inputText, setInputText] = React.useState("")
  const [lastOrderNumber, setLastOrderNumber] = React.useState(2)

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

export default App;
