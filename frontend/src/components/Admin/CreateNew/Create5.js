import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Create5() {
  const [values, setValues] = useState({
    description:'',
    timing: ''
  });
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:5000/notice/post', values)
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
            <label htmlFor="description">Description</label>
            <textarea name='description' placeholder='write notice here' rows={8} cols={40} value={values.description} onChange={e => setValues({ ...values, description: e.target.value })} />
          </div>
          <div>
            <label htmlFor="timing">Time</label>
            <input type="text" name='timing' placeholder='Eg- 12:00PM to 2:00PM' value={values.timing} onChange={e => setValues({ ...values, timing: e.target.value })} />
          </div>
          <br />
          <button type="submit">Confirm</button>
        </form>
      </div>
    </>
  );
}

export default Create5;
