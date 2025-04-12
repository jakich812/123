import React, { useState } from 'react';

const TextInput = () => {
  // Инициализация состояния для хранения текста
  const [text, setText] = useState('');

  return (
    <div>
      <input 
        type="text" 
        value={text} 
        onChange={(e) => setText(e.target.value)} 
        placeholder="Введите текст"
      />
      <p>Вы ввели: {text}</p>
    </div>
  );
};

export default TextInput;
