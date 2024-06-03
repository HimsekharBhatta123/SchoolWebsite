import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Create4() {
  const [values, setValues] = useState({
    day:'',
    time:'',
    classes: ''
  });
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:5000/curriculum/class-schedule/class_schedule/create', values)
      .then((res) => {
        console.log('Data created successfully');
        navigate('/v6/crjfirvnrijvnvjrijvf/Admin');
      })
      .catch((err) => console.log(err.response.data));
  };

  return (
    <>
      <div className="form">
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="day">Day</label>
            <input type="text" name='day' placeholder='Wednesday' value={values.day} onChange={e => setValues({ ...values, day: e.target.value })} />
          </div>
          <div>
            <label htmlFor="time">Time</label>
            <input type="text" name='time' placeholder='Eg- 12:00PM to 4:00PM' value={values.time} onChange={e => setValues({ ...values, time: e.target.value })} />
          </div>
          <div>
            <label htmlFor="classes">Class</label>
            <input type="text" name='clas' placeholder='Eg- Class-3' value={values.clas} onChange={e => setValues({ ...values, clas: e.target.value })} />
          </div>
          
          <br />
          <button type="submit">Confirm</button>
        </form>
      </div>
    </>
  );
}

export default Create4;
