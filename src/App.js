import React, { useState } from 'react';
import './App.css';

function App() {
  const [orders, setOrders] = useState([]);
  const [inputText, setInputText] = useState("");
  const [lastOrderNumber, setLastOrderNumber] = useState(1);

  const handleChange = (e) => {
    setInputText(e.target.value);
  };

  const nextOrderNumber = () => {
    setOrders(current => [...current, lastOrderNumber]);
    setLastOrderNumber(Number(lastOrderNumber) + 1);
  }

  const customOrderNumber = () => {
    setOrders(current => [...current, inputText]);
    setLastOrderNumber(Number(inputText) + 1);
    setInputText('');
  }

  const createOrderClick = () => {
    inputText === '' ? nextOrderNumber() : customOrderNumber();
  }

  return (
    <div className="App">
      <div>
        <input onChange={handleChange} value={inputText} className="createOrder" type='number' placeholder='Enter order number' />
        <button onClick={createOrderClick} >Create order</button>
      </div>
      <div className="scoreboard">
        <div className="leftScoreboard">
          {orders.map((element, index) => {
            return (
              <div key={index} className="orderCook">
                <p>{element}</p>
              </div>
            );
          })}
        </div>
        <div className="rightScoreboard"></div>
      </div>
    </div>
  );
}

export default App;
