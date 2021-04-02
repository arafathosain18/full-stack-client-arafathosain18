import React, { useContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';

const CheckOut = () => {
    const [book, setBook] = useState({});
    const {bookId} = useParams();
    const [loggedIn, setLoggedIn] = useContext(UserContext);
    
    
    
    useEffect(()=> {
        fetch(`https://intense-ridge-54717.herokuapp.com/book/${bookId}`)
        .then(res => res.json())
        .then(data => {
            setBook(data);
        })
    }, [bookId])
   
    
  
    return (
        <div className='container'>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Price</th>
                     </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{book.name}</td>
                        <td>1</td>
                        <td>${book.price}</td>
                    </tr>

                </tbody>    
            </table>
            <Link to = '/orders' style={{marginLeft:'30px', marginTop:'30px'}}><button className='btn btn btn-primary'>Check Out</button></Link>
        </div>
    );
};

export default CheckOut;