import React, { useState } from 'react';

const CheckboxGroup = () => {
  const [checkedItems, setCheckedItems] = useState([]);

  const items = ['React', 'Vue', 'Angular'];

  const handleChange = (item) => {
    setCheckedItems(prev =>
      prev.includes(item)
        ? prev.filter(i => i !== item) // убираем
        : [...prev, item]              // добавляем
    );
  };

  return (
    <div>
      <h3>Выбери фреймворки:</h3>
      {items.map(item => (
        <label key={item} style={{ display: 'block', margin: '5px 0' }}>
          <input
            type="checkbox"
            checked={checkedItems.includes(item)}
            onChange={() => handleChange(item)}
          />
          {item}
        </label>
      ))}

      <p>Отмеченные: {checkedItems.join(', ') || 'Ничего'}</p>
    </div>
  );
};

export default CheckboxGroup;
