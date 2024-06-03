import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Create3() {
  const [values, setValues] = useState({
    subjects: '',
    classes:''
  });
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:5000/curriculum/class-subjects/class_subjects/create', values)
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
            <label htmlFor="subjects">Subjects</label>
            <input type="text" name='subjects' placeholder='Eg- English, G.K etc...' value={values.subjects} onChange={e => setValues({ ...values, subjects: e.target.value })} />
          </div>
          <div>
            <label htmlFor="class">Class</label>
            <input type="number" name='classes' placeholder='Eg- Class-10' value={values.classes} onChange={e => setValues({ ...values, classes: e.target.value })} />
          </div>
          <br />
          <button type="submit">Confirm</button>
        </form>
      </div>
    </>
  );
}

export default Create3;
