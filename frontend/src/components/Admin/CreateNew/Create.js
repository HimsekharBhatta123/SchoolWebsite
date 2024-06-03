import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Create() {
  const [values, setValues] = useState({
    name: '',
    qualification: '',
    t_subject:''
  });
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:5000/teachers/create', values)
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
            <label htmlFor="name">Name</label>
            <input type="text" name='name' placeholder='Eg- Pradip' value={values.name} onChange={e => setValues({ ...values, name: e.target.value })} />
          </div>
          <div>
            <label htmlFor="qualification">Qualification</label>
            <input type="text" name='qualification' placeholder='Eg- BCA, BSC, etc...' value={values.qualification} onChange={e => setValues({ ...values, qualification: e.target.value })} />
          </div>
          <div>
            <label htmlFor="SubjectID">Subject Id</label>
            <input type="number" name='t_subject' placeholder='Eg- Enter subject id' value={values.t_subject} onChange={e => setValues({ ...values, t_subject: e.target.value })} />
          </div>
          <br />
          <button type="submit">Confirm</button>
        </form>
      </div>
    </>
  );
}

export default Create;
