import './App.css';
import Friend from './Component/Friend/Friend';
import Header from './Component/Header/Header';
import React, { useState, useEffect } from 'react';
import './Component/Friend/Friend.css';
import Cart from './Component/Cart/Cart';

function App() {
  const [friends, setFriends] = useState([]);
  const [cart, setCart] = useState([]);
      useEffect(() => {
        fetch('https://api.mocki.io/v1/496e0e9b')
          .then(res => res.json())
          .then(data => {
            setFriends(data);
            
          })

      }, []);
  const handleAddFriends = (friend) => {
    const newCart = [...cart, friend];
    setCart(newCart)
  };
  return (
    <div className="App">
       
      <Header></Header>
        <div className="box">
          <div className = "friends" >
            {
                
                friends.map(friend => <Friend friend={friend} handleAddFriends = {handleAddFriends}></Friend> )
            }
       
        </div>
        <div className="cart">
           <Cart cart={cart}></Cart>
        </div>
        
        
    </div>
    </div>
  );
}

export default App;
