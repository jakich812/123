import React, { useState } from 'react';

const Counter = () => {
  // Инициализация состояния счетчика с начальным значением 0
  const [count, setCount] = useState(0);

  // Функции для увеличения и уменьшения счета
  const increment = () => setCount(prev => prev + 1);
  const decrement = () => setCount(prev => prev - 1);

  return (
    <div>
      <h1>Счетчик: {count}</h1>
      <button onClick={increment}>+1</button>
      <button onClick={decrement}>-1</button>
    </div>
  );
};

export default Counter;
