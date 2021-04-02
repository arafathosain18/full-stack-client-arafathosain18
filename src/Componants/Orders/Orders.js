import React, { useContext, useEffect } from 'react';
import { UserContext } from '../../App';


const Orders = () => {
    const [loggedIn, setLoggedIn] = useContext(UserContext);
    const [orders, setOrders] = useContext(UserContext);
    useEffect(()=>{
        const newOrder = {...loggedIn, ...orders};
        console.log(newOrder);
        fetch('https://intense-ridge-54717.herokuapp.com/allOrders', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(newOrder)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
        })
    }, [loggedIn, orders])
    
    return (
        <div style= {{textAlign:'center'}} >
            <h1>name {loggedIn.displayName}</h1>
        </div>
    );
};

export default Orders;