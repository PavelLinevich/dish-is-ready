import React, { useState } from 'react';
import './Scoreboard.css';

function Scoreboard() {
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
    <div>
      <div className='inputOrderNumber'>
        <input onChange={handleChange} value={inputText} className="createOrder" type='number' placeholder='Enter order number' />
        <button onClick={createOrderClick} className="createOrderButton" >Create order</button>
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

export default Scoreboard;
