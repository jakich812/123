import React, { useState } from 'react';

const items = [
  { id: 1, name: 'Яблоко', category: 'Фрукты' },
  { id: 2, name: 'Морковь', category: 'Овощи' },
  { id: 3, name: 'Банан', category: 'Фрукты' },
  { id: 4, name: 'Огурец', category: 'Овощи' },
];

const FilterList = () => {
  const [filter, setFilter] = useState('Все');

  const filteredItems = filter === 'Все'
    ? items
    : items.filter(item => item.category === filter);

  return (
    <div>
      <h3>Фильтр по категории</h3>
      <div style={{ marginBottom: '10px' }}>
        <button onClick={() => setFilter('Все')}>Все</button>{' '}
        <button onClick={() => setFilter('Фрукты')}>Фрукты</button>{' '}
        <button onClick={() => setFilter('Овощи')}>Овощи</button>
      </div>

      <ul>
        {filteredItems.map(item => (
          <li key={item.id}>{item.name} ({item.category})</li>
        ))}
      </ul>
    </div>
  );
};

export default FilterList;
