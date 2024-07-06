import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Form.css';

const Form = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    password: '',
    phoneNo: '',
    country: '',
    city: '',
    panNo: '',
    aadharNo: '',
  });
  
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.firstName) newErrors.firstName = 'First Name is required';
    if (!formData.lastName) newErrors.lastName = 'Last Name is required';
    if (!formData.username) newErrors.username = 'Username is required';
    if (!formData.email) newErrors.email = 'Email is required';
    if (!formData.password) newErrors.password = 'Password is required';
    if (!formData.phoneNo) newErrors.phoneNo = 'Phone Number is required';
    if (!formData.country) newErrors.country = 'Country is required';
    if (!formData.city) newErrors.city = 'City is required';
    if (!formData.panNo) newErrors.panNo = 'PAN Number is required';
    if (!formData.aadharNo) newErrors.aadharNo = 'Aadhar Number is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validate()) {
      navigate('/success', { state: { formData } });
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h2  className='font-semibold'>Registration Form</h2>
        <div className='container'>
        
         <div className='labels'>
        <label>First Name:</label>
          <label>Last Name:</label>
          <label>Username:</label>
          <label>Email:</label>
          <label>Password:</label>
          <label>Phone Number:</label>
          <label>Country:</label>
          <label>City:</label>
          <label>PAN Number:</label>
          <label>Aadhar Number:</label>

          </div>
         
         <div className='inputs'>
         <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} />
        
       
          
        <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} />
       
      
        
        <input type="text" name="username" value={formData.username} onChange={handleChange} />
     
    
       
        <input type="email" name="email" value={formData.email} onChange={handleChange} />

       
        <input type={showPassword ? "text" : "password"} name="password" value={formData.password} onChange={handleChange} />
        
       
    
        
        <input type="text" name="phoneNo" value={formData.phoneNo} onChange={handleChange} />
       
   
        
        <select name="country" value={formData.country} onChange={handleChange}>
          <option value="">Select Country</option>
          <option value="India">India</option>
          <option value="USA">USA</option>
          <option value="Canada">Canada</option>
          <option value="Australia">Australia</option>
        </select>
       
   
       
        <select name="city" value={formData.city} onChange={handleChange}>
          <option value="">Select City</option>
          <option value="New delhi">New delhi</option>
          <option value="Bhubaneswar">Bhubaneswar</option>
          <option value="jaipur">jaipur</option>
          <option value="ujjian">ujjian</option>
        </select>
       
   
       
        <input type="text" name="panNo" value={formData.panNo} onChange={handleChange} />
        
   
        
        <input type="text" name="aadharNo" value={formData.aadharNo} onChange={handleChange} />
         </div>
         </div>
        <button  className="button "type="submit" disabled={Object.keys(errors).length > 0}>Submit</button>
      </form>

      </>
  );
};

export default Form;
