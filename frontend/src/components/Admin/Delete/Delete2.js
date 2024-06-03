import axios from 'axios';
// import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

function Delete2() {
    const { id } = useParams();
    const navigate = useNavigate();

    const handleDelete = () => {
        axios.delete(`http://localhost:5000/about/fees_structure/delete/${id}`)
            .then(res => {
                console.log('Record deleted successfully');
                navigate('/v6/crjfirvnrijvnvjrijvf/Admin'); // Redirect to Admin page after deletion
            })
            .catch(err => {
                console.error('Error deleting records:', err);
                // Handle error, show alert or error message
            });
    };

    return (
        <>
            <h2>Delete Record</h2>
            <p>Are you sure you want to delete this Record?</p>
            <button onClick={handleDelete}>Confirm Delete Fees</button>
        </>
    )
}

export default Delete2;
