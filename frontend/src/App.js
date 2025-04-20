import React, { useState, useEffect } from 'react';
import axios from 'axios';
import UserForm from './components/UserForm';
import UserTable from './components/UserTable';

function App() {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);

  const fetchUsers = async () => {
    const res = await axios.get('http://localhost:5239/api/Users');
    setUsers(res.data);
  };

  useEffect(() => { fetchUsers(); }, []);

  return (
    <div>
      <h1>User Management</h1>
      <UserForm fetchUsers={fetchUsers} selectedUser={selectedUser} setSelectedUser={setSelectedUser} />
      <UserTable users={users} fetchUsers={fetchUsers} setSelectedUser={setSelectedUser} />
    </div>
  );
}

export default App;
