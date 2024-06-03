import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

function Delete() {
    const { id } = useParams();
    const navigate = useNavigate();

    const handleDelete = () => {
        axios.delete(`http://localhost:5000/teachers/delete/${id}`)
            .then(res => {
                console.log('Teacher deleted successfully');
                navigate('/v6/crjfirvnrijvnvjrijvf/Admin'); // Redirect to Admin page after deletion
            })
            .catch(err => {
                console.error('Error deleting teacher:', err);
                // Handle error, show alert or error message
            });
    };
    return (
        <>
            <h2>Delete Teacher</h2>
            <p>Are you sure you want to delete this teacher?</p>
            <button onClick={handleDelete}>Confirm Delete</button>
        </>
    )
}

export default Delete
