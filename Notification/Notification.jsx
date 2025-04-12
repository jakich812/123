import React from 'react';
import PropTypes from 'prop-types';

const Notification = ({ message, type }) => {
  const style = {
    padding: '10px',
    borderRadius: '5px',
    color: '#fff',
    marginBottom: '10px',
    backgroundColor: type === 'error' ? '#e74c3c' : '#2ecc71', // красный или зелёный
  };

  return <div style={style}>{message}</div>;
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['success', 'error']),
};

Notification.defaultProps = {
  type: 'success',
};

export default Notification;
