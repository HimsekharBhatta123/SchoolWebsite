import React, { useState } from 'react';
import './Login.css';
import { useNavigate } from 'react-router-dom';
import Validation from './Validation';
import axios from 'axios';

function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(Validation(formData));

    // Check if there are no errors in the form
    if (Object.keys(errors).length === 0) {
      const trimmedFormData = {
        email: formData.email.trim(),
        password: formData.password.trim(),
      };

      axios
        .post('http://localhost:5000/login', trimmedFormData)

        .then((res) => {
          if (res.data === 'Success') {
            navigate('/v6/crjfirvnrijvnvjrijvf/Admin');
          } else {
            alert('No record existed');
          }
        })
        .catch((err) => {
          console.log(err);
          alert('Authentication failed. Please check your credentials.');
        });
    }
  };

  return (
    <>
      <div className="form">
        <form onSubmit={handleSubmit}>
          <div>
            <h2>Admin Login</h2>
          </div>
          <div>
            <label htmlFor="email">Enter Email</label>
            <input
              type="email"
              placeholder="Enter email id"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
            />
            {errors.email && <span style={{ color: 'red' }}>{errors.email}</span>}
          </div>
          <div>
            <label htmlFor="password">Enter password</label>
            <input
              type="password"
              placeholder="Enter password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
            />
            {errors.password && <span style={{ color: 'red' }}>{errors.password}</span>}
          </div>
          <button type="submit">Login</button>
        </form>
      </div>
    </>
  );
}

export default Login;
