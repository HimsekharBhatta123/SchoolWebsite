import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

function Delete5() {
    const { nid } = useParams();
    const navigate = useNavigate();

    const handleDelete = () => {
        axios.delete(`http://localhost:5000/notice/delete/${nid}`)
            .then(res => {
                console.log('Notice deleted successfully');
                navigate('/v6/crjfirvnrijvnvjrijvf/Admin'); // Redirect to Admin page after deletion
            })
            .catch(err => {
                console.error('Error deleting notice:', err);
                // Handle error, show alert or error message
            });
    };

    return (
        <>
            <h2>Delete Notice</h2>
            <p>Are you sure you want to delete this notice?</p>
            <button onClick={handleDelete}>Confirm Delete</button>
        </>
    );
}

export default Delete5;
