import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Create2() {
  const [values, setValues] = useState({
    fees_class: '',
    amount: ''
  });
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:5000/about/fees_structure/create', values)
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
            <label htmlFor="class">Class</label>
            <input type="text" name='fees_class' placeholder='Eg- Class V' value={values.fees_class} onChange={e => setValues({ ...values, fees_class: e.target.value })} />
          </div>
          <div>
            <label htmlFor="Amount">Amount</label>
            <input type="text" name='amount' placeholder='Eg- 10000' value={values.amount} onChange={e => setValues({ ...values, amount: e.target.value })} />
          </div>
          <br />
          <button type="submit">Confirm</button>
        </form>
      </div>
    </>
  );
}

export default Create2;
