import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { useState } from 'react'; // Import useState for error handling

function DeleteStudent() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [error, setError] = useState(null); // State variable for error handling

    const handleDelete = () => {
        // Display confirmation dialog
        if (window.confirm('Are you sure you want to delete this student record?')) {
            axios.delete(`http://localhost:5000/submit-form/admin/delete/${id}`)
                .then(res => {
                    console.log('Student record deleted successfully!!!');
                    navigate('/v6/crjfirvnrijvnvjrijvf/Admin'); // Redirect to Admin page after deletion
                })
                .catch(err => {
                    console.error('Error deleting student record:', err);
                    setError('Error deleting student record. Please try again.'); // Set error state
                });
        }
    };

    return (
        <>
            <h2>Delete Student</h2>
            {error && <p style={{ color: 'red' }}>{error}</p>} {/* Display error message if any */}
            <p>Are you sure you want to delete this student record?</p>
            <button onClick={handleDelete}>Confirm Delete</button>
        </>
    );
}

export default DeleteStudent;
