import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Books from '../Books/Books';

const Home = () => {
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() =>{
        fetch('https://intense-ridge-54717.herokuapp.com/books')
        .then(res => res.json())
        .then(data => {
            setBooks(data)
            setLoading(false);
        })
    }, [])
    return (
        <div className="container">
            <div className="row">

                {
                  loading  ? <img src="https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif" alt=""/>
                        : books.map(book => <Books key={book._id} book={book}></Books>)
                }
            </div>
         </div>
    );
};

export default Home;