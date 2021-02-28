import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    let totalSalary = 0;
    for (let i = 0; i < cart.length; i++) {
        const friend = cart[i];
        totalSalary = totalSalary + friend.salary;
        
    }
       let totalFriendAdded = [];
       for (let i = 0; i < cart.length; i++) {
           const friend = cart[i].name;
           console.log(friend)
           totalFriendAdded.push(friend, ' . ');
       }
    return (
        <div>
            <h1>Total Salary-</h1>
            <h3>${totalSalary}</h3>

            <br />
            <h3>Added: {totalFriendAdded}</h3>
            
        </div>
    );
}

export default Cart;
