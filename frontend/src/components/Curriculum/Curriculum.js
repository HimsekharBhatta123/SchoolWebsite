import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './Curriculum.css'
function Curriculum() {
  const [data, setData] = useState([]);
  const [data2, setData2] = useState([]); //subject taught by teacher
 
  useEffect(() => {              //subject taught by teacher
      fetchData2();
  }, []);

  useEffect(() => {
    fetchData();
    // fetchData2();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:5000/curriculum/class-schedule');
      setData(response.data);
    } catch (error) {
      console.error('Error fetching class schedule:', error);
    }
  };

  const fetchData2 = async () => {
    try {
      const response = await axios.get('http://localhost:5000/curriculum/teachers');
      setData2(response.data);
    } catch (error) {
      console.error('Error fetching class schedule:', error);
    }
  };

  document.title = 'Curriculum - C.K Academy '
  return (
    <>
      <div className="container">
        <header className='curriculum-header'>
          <h1>Our Curriculum</h1>
        </header>
        <div className="curriculum-content">
          <div className="curriculum-header">
            <h2>Our Curriculum Overview</h2>
          </div>
          <p>Our curriculum lays a strong foundation for academic success and personal development. The core of our curriculum encompasses a range of subjects covering mathematics, science, language arts, social studies, and computer. These subjects are carefully selected to provide a comprehensive understanding of various disciplines, promoting intellectual growth and curiosity. Beyond our curriculum, we offer to a variety of extracurricular activities, including sports,music,singing,dancing and other competitions for a better mind refreshment of our students.</p>

          <h3>SCHOOL SCHEDULE AND SUBJECTS</h3>
          <table className="class-schedule">
            <thead>
              <tr>
                <th>Day</th>
                <th>Time</th>
                <th>Class</th>
                <th>Subjects</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item) => (
                <tr key={item.id}>
                  <td>{item.day}</td>
                  <td>{item.time}</td>
                  <td>{item.clas}</td>
                  <td>{item.subjects}</td>
                </tr>
              ))}

            </tbody>
          </table>


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
                                {data2.map((teacher) => (
                                    <tr key={teacher.id}>
                                        <td>{teacher.name}</td>
                                        <td>{teacher.qualification}</td>
                                        <td>{teacher.subjects}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>

        </div>
      </div>
    </>
  )
}
export default Curriculum;


// INSERT into class_subject(id,classes,subjects) VALUES
// (null"Class 2","Math, G.K, Social Science, General Science, Language, Drawing"),
// (null,"Class 3","Math, G.K, Social Science, General Science, Language, Drawing");
// (null,"Class 4","Math, G.K, Computer Science, Social Science, General Science, Language, Drawing"),
// (null,"Class 5","Math, G.K, Computer Science, Social Science, General Science, Language, Drawing"),
// (null,"Class 6","Math, G.K, Computer Science, Social Science, General Science, Language, Drawing"),
// (null,"Class 7","Math, G.K, Computer Science, Social Science, General Science, Language"),
// (null,"Class 8","Math, G.K, Computer Science, Social Science, General Science, Language"),
// (null,"Class 9","Math, G.K, Computer Science, Social Science, General Science, Language"),
// (null,"Class 10","Math, G.K, Computer Science, Social Science, General Science, Language");