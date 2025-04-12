import React, { useState } from 'react';

const Dropdown = () => {
  const [selectedOption, setSelectedOption] = useState('');

  return (
    <div>
      <h3>Выбери опцию:</h3>
      <select value={selectedOption} onChange={(e) => setSelectedOption(e.target.value)}>
        <option value="">-- выбери --</option>
        <option value="React">React</option>
        <option value="Vue">Vue</option>
        <option value="Angular">Angular</option>
      </select>

      {selectedOption && <p>Вы выбрали: <strong>{selectedOption}</strong></p>}
    </div>
  );
};

export default Dropdown;
