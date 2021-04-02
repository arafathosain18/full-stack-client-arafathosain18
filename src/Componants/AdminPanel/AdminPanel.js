import React from 'react';
import AddBooks from '../AddBooks/AddBooks';
import '../AdminPanel/AdminPanel.css'
import ManageBook from '../ManageBook/ManageBook';
const AdminPanel = () => {
    const handleAddProduct = ()=>{
         document.getElementById('add-book').style.display = 'block';
      
    }
    const handleManageBooks = () =>{
        document.getElementById('manage-books').style.display = 'block';
    
    }
    return (
        <div className='container'>
                <div className= 'btn-container'>
                    <button onClick={handleAddProduct}>Add Book</button>
                    <br/>
                    <button onClick={handleManageBooks}>Manage Books</button>
                </div>
                <div id='manage-books' className='manage-container'>
                    <ManageBook></ManageBook>
                </div>
                <div id='add-book' className='add-container'>
                    <AddBooks></AddBooks>
                </div>
        </div>
    );
};

export default AdminPanel;