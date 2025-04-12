import React from 'react';
import PropTypes from 'prop-types';

const ThemeSwitcher = ({ theme, onThemeChange }) => {
  const handleThemeToggle = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'; // Переключение между темами
    onThemeChange(newTheme); // Передаем новую тему в App
  };

  return (
    <button onClick={handleThemeToggle} style={styles.button}>
      Переключить тему ({theme === 'light' ? 'Светлая' : 'Темная'})
    </button>
  );
};

ThemeSwitcher.propTypes = {
  theme: PropTypes.string.isRequired,
  onThemeChange: PropTypes.func.isRequired,
};

const styles = {
  button: {
    padding: '10px 20px',
    fontSize: '16px',
    cursor: 'pointer',
    backgroundColor: '#1da1f2',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    margin: '10px 0',
  },
};

export default ThemeSwitcher;
