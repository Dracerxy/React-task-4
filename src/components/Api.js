import React, { useState, useEffect } from 'react';

function UserTable() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Fetch data from the API
    fetch('https://dummyjson.com/users')
      .then((response) => response.json())
      .then((data) => {
        if (data && data.users) {
          setUsers(data.users);
        }
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);
  const mystyle={
    color:"white",
    border:"1px solid white",
    borderCollapse:"collapse",
    }

  return (
    <div>
      <h1>Dummy Data</h1>
      <table style={mystyle} class="table">
        <thead>
          <tr>
            <th style={{border:"1px solid white",borderCollapse:"collapse"}} scope='col'>Sno</th>
            <th style={{border:"1px solid white",borderCollapse:"collapse"}} scope='col'>Profile Pic</th>
            <th style={{border:"1px solid white",borderCollapse:"collapse"}} scope='col'>First Name</th>
            <th style={{border:"1px solid white",borderCollapse:"collapse"}} scope='col'>last Name</th>
            <th style={{border:"1px solid white",borderCollapse:"collapse"}} scope='col'> Email</th>
            <th style={{border:"1px solid white",borderCollapse:"collapse"}} scope='col'>Username</th>
            <th style={{border:"1px solid white",borderCollapse:"collapse"}} scope='col'>Domain</th>
            <th style={{border:"1px solid white",borderCollapse:"collapse"}} scope='col'>IP</th>
            <th style={{border:"1px solid white",borderCollapse:"collapse"}} scope='col'>University</th>
          </tr>
        </thead>
        <tbody class="table-group-divider">
          {users.map((user) => (
            <tr key={user.id}>
              <th scope='row'>{user.id}</th>
              <td><img src={user.image} style={{height:"50px",width:"80px"}}></img></td>
              <td>{user.firstName}</td>
              <td>{user.lastName}</td>
              <td>{user.email}</td>
              <td>{user.username}</td>
              <td>{user.domain}</td>
              <td>{user.ip}</td>
              <td>{user.university}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UserTable;
