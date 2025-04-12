import React from 'react';
import PropTypes from 'prop-types';

const defaultAvatar = 'https://via.placeholder.com/150';

const UserProfile = ({ name, age, avatar }) => {
  return (
    <div className="user-profile">
      <img src={avatar} alt={`${name}'s avatar`} className="avatar" />
      <div className="user-info">
        <h2>{name}</h2>
        <p>Возраст: {age}</p>
      </div>
    </div>
  );
};

UserProfile.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  avatar: PropTypes.string,
};

UserProfile.defaultProps = {
  avatar: defaultAvatar,
};

export default UserProfile;
