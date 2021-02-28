import React from 'react';
import './Friend.css';

const Friend = (props) => {
    
    const { name, email, phone, address, salary, image } = props.friend;
    const handleAddFriends = props.handleAddFriends;
    return (
        <div className = "single-friend" >
              <img src={image} alt=""/>
                   <h2>Name: {name}</h2> 
                   <h4>Email: {email}</h4> 
                   <h4>Phone: {phone}</h4>
                   <h4>Address: {address}</h4>
                   <h4>Salary: ${salary}</h4>
                   <button className="addBtn" onClick={()=>handleAddFriends(props.friend)}>Add</button> 
      </div>
    );
}

export default Friend;


    