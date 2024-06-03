import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import './AdminControl.css'
function Admincontrol() {
  //Fees Structure
  const [data, setData] = useState([])
  //Fees  of student
  const [stdFees, setStdFees] = useState([])

  //School Hours
  const [data2, setData2] = useState([]);
  //Class Subject
  const [data3, setData3] = useState([]);
  //Teachers
  const [data4, setData4] = useState([]);
  //Notice
  const [data5, setData5] = useState([]);
  //Students
  const [data6, setData6] = useState([]);

  const [data7, setData7] = useState([]); //subject taught by teacher
  useEffect(() => {
    fetchData()    //Fees Structure
    fetchstdFees()  //Fees  of student
    fetchData2()   //School Hours
    fetchData3()   //Class Subject
    fetchData4()   //Teachers
    fetchData5()   //Notice
    fetchData6()   //Students
    fetchData7()   //subjects taught by teachers
  }, [])

  //Fees Structure
  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:5000/about');
      setData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  //Fees  of student
  const fetchstdFees = async () => {
    try {
      const response = await axios.get('http://localhost:5000/about/admin');
      setStdFees(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  //School Hours
  const fetchData2 = async () => {
    try {
      const response = await axios.get('http://localhost:5000/curriculum/class-schedule/show');
      setData2(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  //Class Subject.............
  const fetchData3 = async () => {
    try {
      const response = await axios.get('http://localhost:5000/curriculum/class-subjects');
      setData3(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  //Teachers...................
  const fetchData4 = async () => {
    try {
      const response = await axios.get('http://localhost:5000');
      setData4(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  //Notice..................
  const fetchData5 = async () => {
    try {
      const response = await axios.get('http://localhost:5000/notice');
      setData5(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  //Students.................
  const fetchData6 = async () => {
    try {
      const response = await axios.get('http://localhost:5000/submit-form/admin');
      setData6(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  //subject taught by teacher
  const fetchData7 = async () => {
    try {
      const response = await axios.get('http://localhost:5000/curriculum/teachers');
      setData7(response.data);
    } catch (error) {
      console.error('Error fetching class schedule:', error);
    }
  };


  return (
    <>
      <div className="admin-page">

        {/* Fees Structure.................. */}
        <div className="fees-structure">
          <h3>Admission Fees</h3>
          <button><Link to={`/create2/:id`}>Create Admission Fees</Link></button>
          <table className='fees-structure-table'>
            <thead>
              <tr>
                <th>Class</th>
                <th>Amount</th>
              </tr>
            </thead>
            <tbody>
              {data.map((fees) => (
                <tr key={fees.id}>
                  <td>{fees.fees_class}</td>
                  <td>{fees.amount}</td>
                  <td><Link to={`/update/${fees.id}`}>Update</Link></td>
                  <td><Link to={`/delete2/${fees.id}`}>Delete</Link></td>
                </tr>
              ))}

            </tbody>
          </table>
        </div>

        <div className="fees-structure">
          <h3>Admission Fees</h3>
          <table className='fees-structure-table'>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Class</th>
                <th>Admission Fees</th>
              </tr>
            </thead>
            <tbody>

              {stdFees.map((fee) => (
                <tr key={fee.id}>
                  <td>{fee.name}</td>
                  <td>{fee.email}</td>
                  <td>{fee.fees_class}</td>
                  <td>{fee.amount}</td>
                  {/* <td><Link to={`/delete6/${fee.id}`}>Delete</Link></td> */}
                </tr>
              ))}

            </tbody>
          </table>
        </div>

        {/* School Hours........... */}
        <div className="school-hours">
          <button><Link to={`/create4/:id`}>Create Schedule</Link></button>
          <table className="class-schedule">
            <thead>
              <tr>
                <th>ID</th>
                <th>Day</th>
                <th>Time</th>
                <th>Class</th>
              </tr>
            </thead>
            <tbody>
              {data2.map((item) => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.day}</td>
                  <td>{item.time}</td>
                  <td>{item.clas}</td>
                  <td><Link to={`/update2/${item.id}`}>Update</Link></td>
                  <td><Link to={`/delete4/${item.id}`}>Delete</Link></td>
                </tr>
              ))}

            </tbody>
          </table>
        </div>

        {/* Class subjects........... */}
        <div className="class-subjects-admin">
          <button><Link to={`/create3/:id`}>Create Class Subjects</Link></button>
          <table className="class-subjects-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Subject</th>
              </tr>
            </thead>
            <tbody>
              {data3.map((subject) => (
                <tr key={subject.id}>
                  <td>{subject.id}</td>
                  <td>{subject.subjects}</td>
                  <td><Link to={`/update3/${subject.id}`}>Update</Link></td>
                  <td><Link to={`/delete3/${subject.id}`}>Delete</Link></td>
                </tr>
              ))}

            </tbody>
          </table>
        </div>

        {/* Teachers..... */}
        <div className="teacher-profile">
          <button><Link to={`/create/:id`}>Create Teacher Profile</Link></button>
          <table className='teachers'>
            <thead>
              <tr>
                <th>Name</th>
                <th>Qualification</th>
              </tr>
            </thead>
            <tbody>
              {data4.map((teacher) => (
                <tr key={teacher.id}>
                  <td>{teacher.name}</td>
                  <td>{teacher.qualification}</td>
                  <td><Link to={`/update4/${teacher.id}`}>Update</Link></td>
                  <td><Link to={`/delete/${teacher.id}`}>Delete</Link></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {/* Subjects taught by our teachers */}
        <table className='teachers'>
          <thead>
            <tr>
              <th>Name</th>
              <th>Qualification</th>
              <th>Subject</th>
            </tr>
          </thead>
          <tbody>
            {data7.map((teacher) => (
              <tr key={teacher.id}>
                <td>{teacher.name}</td>
                <td>{teacher.qualification}</td>
                <td>{teacher.subjects}</td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Notice............... */}
        <div className='notice'>
          <button><Link to={`/create5/:id`}>Create Notices</Link></button>
          <table>
            <thead>
              <tr>
                <th>Notice</th>
                <th>Timing</th>
              </tr>
            </thead>
            <tbody>
              {data5.map((notice) => (
                <tr key={notice.nid}>
                  <td>{notice.description}</td>
                  <td>{notice.timing}</td>
                  <td><Link to={`/delete5/${notice.nid}`}>Delete</Link></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Students.................... */}
        <div className='students'>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                {/* <th>Message</th> */}
              </tr>
            </thead>
            <tbody>
              {data6.map((student) => (
                <tr key={student.id}>
                  <td>{student.name}</td>
                  <td>{student.email}</td>
                  {/* <td>{student.message}</td> */}
                  <td><Link to={`/delete6/${student.id}`}>Delete</Link></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

    </>
  )
}
export default Admincontrol