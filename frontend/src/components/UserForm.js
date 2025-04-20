import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserForm = ({ fetchUsers, selectedUser, setSelectedUser }) => {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    state: '',
    district: '',
    dateOfBirth: '',
    language: '',
  });

  useEffect(() => {
    if (selectedUser) setFormData(selectedUser);
  }, [selectedUser]);

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    if (selectedUser) {
      await axios.put(`http://localhost:5239/api/Users/${selectedUser.id}`, formData);

    } else {
      await axios.post("http://localhost:5239/api/Users", formData);
    }
    setFormData({ name: '', address: '', state: '', district: '', dateOfBirth: '', language: '' });
    setSelectedUser(null);
    fetchUsers();
  };

  const states = [
    "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", "Goa", "Gujarat",
    "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka", "Kerala", "Madhya Pradesh",
    "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab",
    "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura", "Uttar Pradesh",
    "Uttarakhand", "West Bengal"
  ];

  const districts = [
    "Bangalore", "Mysore", "Belagam", "Shivamogga", "Chikkaballapura", "haveri", "Udupi", "Mangalore", "Kodagu"
  ];

  const formStyle = {
    maxWidth: '500px',
    margin: '20px auto',
    padding: '20px',
    borderRadius: '10px',
    backgroundColor: '#f2f2f2',
    boxShadow: '0 0 10px rgba(0,0,0,0.2)',
    fontFamily: 'Arial, sans-serif'
  };

  const labelStyle = {
    display: 'block',
    marginBottom: '5px',
    fontWeight: 'bold',
    color: '#333'
  };

  const inputStyle = {
    width: '100%',
    padding: '8px',
    marginBottom: '15px',
    borderRadius: '5px',
    border: '1px solid #ccc'
  };

  const radioContainer = {
    marginBottom: '15px',
    display: 'flex',
    gap: '10px'
  };

  const buttonStyle = {
    backgroundColor: '#007bff',
    color: 'white',
    padding: '10px 15px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer'
  };

  return (
    <form onSubmit={handleSubmit} style={formStyle}>
      <label style={labelStyle}>Name</label>
      <input name="name" value={formData.name} onChange={handleChange} placeholder="Name" style={inputStyle} />

      <label style={labelStyle}>Address</label>
      <input name="address" value={formData.address} onChange={handleChange} placeholder="Address" style={inputStyle} />

      <label style={labelStyle}>State</label>
      <select name="state" value={formData.state} onChange={handleChange} style={inputStyle}>
        <option value="">Select State</option>
        {states.map(state => (
          <option key={state} value={state}>{state}</option>
        ))}
      </select>

      <label style={labelStyle}>District</label>
      <select name="district" value={formData.district} onChange={handleChange} style={inputStyle}>
        <option value="">Select District</option>
        {districts.map(d => (
          <option key={d} value={d}>{d}</option>
        ))}
      </select>

      <label style={labelStyle}>Date of Birth</label>
      <input type="date" name="dateOfBirth" value={formData.dateOfBirth} onChange={handleChange} style={inputStyle} />

      <label style={labelStyle}>Language</label>
      <div style={radioContainer}>
        {["Kannada", "Hindi", "English"].map(lang => (
          <label key={lang}>
            <input
              type="radio"
              name="language"
              value={lang}
              checked={formData.language === lang}
              onChange={handleChange}
            /> {lang}
          </label>
        ))}
      </div>

      <button type="submit" style={buttonStyle}>
        {selectedUser ? 'Update' : 'Submit'}
      </button>
    </form>
  );
};

export default UserForm;
