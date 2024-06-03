import { Link } from 'react-router-dom';
import './Home.css'
import SchoolImg from '../Assets/school.jpg'
import staff from '../Assets/teachers/staff.jpg'
import { useEffect, useState } from 'react';
import axios from 'axios';

function Home() {

    const [data, setData] = useState([]);
    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await axios.get('http://localhost:5000');
            setData(response.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const [data2, setData2] = useState([]);
    useEffect(() => {
        fetchData2();
    }, []);
    const fetchData2 = async () => {
        try {
            const response = await axios.get('http://localhost:5000/notice');
            setData2(response.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    document.title = 'C.K Academy - Home';
    return (
        <>
            <div className="container">

                <div className="main-content">
                    <div className="school-img">
                        <img className="fit-img" src={SchoolImg} alt="" />
                        <div className="school-img-content">
                            <h1>God is Almighty</h1>
                            <div className="line"></div>
                            <p><strong>welcome to C.K academy:</strong> "Step into the world of knowledge and possibilities!<br /> Where each day is a new opportunity to learn and grow."</p>
                        </div>
                    </div>
                </div>

                <div className="content-heading">
                    <h1>Discover your Learning Capabilities <br />With Us!</h1>
                    <div className="line"></div>
                    <div className="content-text">
                        <p className='content-text1'>We, at C.K Academy School offer supportive and inspirational environments for young enquiring minds to learn and grow with us. Our dedicated team of teachers is committed to unlocking the potential within the students, guiding them on a path of academic excellence, creativity, and personal achievement. At C.K Academy, we believe that every student has the potential to achieve greatness. Join us in polishing that potential and watch as dreams become accomplishments. Together, let's make every day a step towards success. </p>
                        <p className='content-text2'><b>Start Your Journey: </b>Whether you are a student, parent, or member of our dedicated staff, C.K Academy welcomes you to embark on this exciting journey with us. Together, let's create a legacy of academic success, personal growth, and a community that uplifts and inspires.<br /><Link to={'/About'}>Know more</Link></p>
                    </div>
                </div>

                <div className='notice'>
                <h1>Notice Board</h1>
                    <table>
                        <thead>
                            <tr>
                                <th>Notice</th>
                                <th>Timing</th>
                            </tr>
                        </thead>
                        <tbody>
                        {data2.map((notice) => (
                                    <tr key={notice.nid}>
                                        <td>{notice.description}</td>
                                        <td>{notice.timing}</td>
                                    </tr>
                                ))}
                        </tbody>
                    </table>
                </div>


                <div className="teacher-content">
                    <h1 className="staff">Our Staff </h1>
                    <div className="staff-img">
                        <img src={staff} alt="" />
                    </div>
                    <h2 id='teacher-profile'>Our Teachers are our pride</h2>
                    <div className="teacher-profile">

                        <table className='teachers'>
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Qualification</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.map((teacher) => (
                                    <tr key={teacher.id}>
                                        <td>{teacher.name}</td>
                                        <td>{teacher.qualification}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Home; 