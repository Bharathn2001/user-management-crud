import React from 'react';
import axios from 'axios';

const UserTable = ({ users, fetchUsers, setSelectedUser }) => {
  const handleDelete = async id => {
    await axios.delete(`http://localhost:5239/api/Users/${id}`);
    fetchUsers();
  };

  const styles = {
    container: {
      width: '90%',
      margin: '20px auto',
      padding: '20px',
      borderRadius: '12px',
      background: '#ffffff',
      boxShadow: '0 0 15px rgba(0, 0, 0, 0.1)',
    },
    title: {
      textAlign: 'center',
      color: '#444',
      marginBottom: '20px',
    },
    table: {
      width: '100%',
      borderCollapse: 'collapse',
      fontFamily: 'Arial, sans-serif',
    },
    th: {
      padding: '12px 15px',
      textAlign: 'center',
      backgroundColor: '#4CAF50',
      color: 'white',
    },
    td: {
      padding: '12px 15px',
      textAlign: 'center',
      borderBottom: '1px solid #ddd',
    },
    trEven: {
      backgroundColor: '#f3f3f3',
    },
    trHover: {
      backgroundColor: '#f1f1f1',
      cursor: 'pointer',
    },
    editBtn: {
      backgroundColor: '#2196F3',
      border: 'none',
      color: 'white',
      padding: '6px 12px',
      margin: '0 5px',
      borderRadius: '4px',
      cursor: 'pointer',
    },
    deleteBtn: {
      backgroundColor: '#f44336',
      border: 'none',
      color: 'white',
      padding: '6px 12px',
      margin: '0 5px',
      borderRadius: '4px',
      cursor: 'pointer',
    },
    noData: {
      textAlign: 'center',
      padding: '20px',
      color: '#888',
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>User List</h2>
      <table style={styles.table}>
        <thead>
          <tr>
            <th style={styles.th}>Name</th>
            <th style={styles.th}>Address</th>
            <th style={styles.th}>State</th>
            <th style={styles.th}>District</th>
            <th style={styles.th}>DOB</th>
            <th style={styles.th}>Language</th>
            <th style={styles.th}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.length > 0 ? (
            users.map((user, index) => (
              <tr
                key={user.id}
                style={index % 2 === 0 ? styles.trEven : {}}
                onMouseOver={e => e.currentTarget.style.backgroundColor = styles.trHover.backgroundColor}
                onMouseOut={e => e.currentTarget.style.backgroundColor = index % 2 === 0 ? styles.trEven.backgroundColor : 'transparent'}
              >
                <td style={styles.td}>{user.name}</td>
                <td style={styles.td}>{user.address}</td>
                <td style={styles.td}>{user.state}</td>
                <td style={styles.td}>{user.district}</td>
                <td style={styles.td}>{user.dateOfBirth}</td>
                <td style={styles.td}>{user.language}</td>
                <td style={styles.td}>
                  <button style={styles.editBtn} onClick={() => setSelectedUser(user)}>Edit</button>
                  <button style={styles.deleteBtn} onClick={() => handleDelete(user.id)}>Delete</button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="7" style={styles.noData}>No users found!</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
