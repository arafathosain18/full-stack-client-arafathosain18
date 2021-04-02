import React from 'react';
import { Link } from 'react-router-dom';
import '../Books/Books.css'
const Books = ({book}) => {
    return (
        <div className="col m-5" style={{width:'100%'}} >
                <div className="card" style={{width: '17rem'}}>
                    <img src={book.img} className="card-img-top" alt="book"/>
                    <div className="card-body">
                        <h5 className="card-title">{book.name}</h5>
                        <p className="card-text">By: {book.author}</p>
                        <p className="card-text">Price: {book.price} $</p>
                        <Link to ={'/checkout/'+book._id}><button className="btn btn-primary">Buy Now</button></Link>
                    </div>
                </div>
        </div>
    );
};

export default Books;