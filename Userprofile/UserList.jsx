import React from 'react';
import UserProfile from './UserProfile';

const UserList = ({ users }) => {
  return (
    <div style={{display:'flex',flexDirection:"column",alignItems:"center" }}>

      {users.map((user, index) => (
        <UserProfile
          key={index}
          name={user.name}
          age={user.age}
          avatar={user.avatar}
        />
      ))}
    </div>
  );
};

export default UserList;
