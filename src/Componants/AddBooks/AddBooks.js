import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useForm } from "react-hook-form";

const AddBooks = () => {
    const { register, handleSubmit} = useForm();
    const [imageUrl, setImageUrl] = useState(null);
    const onSubmit = data =>{
        const booksData = {
                name : data.name,
                price : data.price,
                author : data.author,
                img : imageUrl
            };
        const url = 'https://intense-ridge-54717.herokuapp.com/addBook';
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type':'application/json'
            },
            body: JSON.stringify(booksData)
        })
        .then(res => console.log('server'))
    };
    const handleImageUpload = event =>{
        console.log(event.target.files[0]);
        const imageData = new FormData();
        imageData.set('key', '64037a5383c59c55848f320f1f743adc');
        imageData.append('image',event.target.files[0] );

        axios.post('https://api.imgbb.com/1/upload', imageData)
          .then(function (response) {
            setImageUrl(response.data.data.display_url);
          })
          .catch(function (error) {
            console.log(error);
          });
    }

    return (
        <div>
             <form onSubmit={handleSubmit(onSubmit)}>
                    <input name="name" defaultValue="book name" ref={register} />
                    <br/>
                    <br/>
                    <input name="author" defaultValue="author name" ref={register} />
                    <br/>
                    <br/>
                    <input name="price" defaultValue="price" ref={register} />
                    <br/>
                    <br/>
                    <input name="exampleRequired" type='file' onChange={handleImageUpload} />
                    <br/>
                    <br/>
                    <input type="submit" />
             </form>
        </div>
    );
};

export default AddBooks;