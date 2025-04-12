import { useState } from 'react';

import React from 'react';
import UserList from './Userprofile/UserList';
import ProductList from './ProductList/ProductList';
import Home from './TweetList/Home';
import Tweethome from './NewTweet/Tweethome';
import Notification from './Notification/Notification';
import NavBar from './NavBar/NavBar';
import ThemeSwitcher from './ThemeSwitcher/ThemeSwitcher';
import Counter from './Counter/Counter';
import TextInput from './TextInput/TextInput';
import CheckboxGroup from './CheckboxGroup/CheckboxGroup';
import FilterList from './FilterList/FilterList';
import Tweet from './TweetList/Tweet';
import Dropdown from './Dropdown/Dropdown';

const users = [
  { name: 'Макс', age: 25, avatar: 'https://i.pravatar.cc/150?img=1' },
  { name: 'Иван', age: 30 },
  { name: 'Антон', age: 22, avatar: 'https://i.pravatar.cc/150?img=3' },
];

const App = () => {
  const products = [
    { title: 'Кроссовки', price: 4500, image: 'https://via.placeholder.com/150' },
    { title: 'Рюкзак', price: 2800, image: 'https://via.placeholder.com/150' },
    { title: 'Футболка', price: 1200, image: 'https://via.placeholder.com/150' },
  ];
  
    const links = [
      { label: 'Главная', url: '/' },
      { label: 'О нас', url: '/about' },
      { label: 'Контакты', url: '/contact' },
      { label: 'Товары', url: '/products' },
    ];

  const handleAddToCart = (product) => {
    alert(`Добавлено в корзину: ${product.title}`);
  };

  const [theme, setTheme] = useState('light'); // Состояние для хранения текущей темы

  const handleThemeChange = (newTheme) => {
    setTheme(newTheme); // Обновляем тему
  };

  return (
    <div className="App">
      <h1>Список пользователей</h1>
      <UserList users={users} />

      <h2>Список товаров</h2>
      <ProductList products={products} onAddToCart={handleAddToCart} />

      <h1 style={{ textAlign: "center" }}>Твиты</h1>
      <Home />

      <h1 style={{ textAlign: "center" }}>Твиты</h1>
      <Tweethome />

      <h2>Уведомления</h2>

      <Notification message="Успешно выполнено!" type="success" />
      <Notification message="Произошла ошибка!" type="error" />
      <Notification message="Это уведомление без указания типа." />

      <NavBar links={links} />
      <h1>Добро пожаловать в наш сайт!</h1>

      <h1>Переключатель темы</h1>
      <ThemeSwitcher theme={theme} onThemeChange={handleThemeChange} />
      <p>
        Текущая тема: <strong>{theme === 'light' ? 'Светлая' : 'Темная'}</strong>
      </p>

      <h2>Пример счетчика</h2>
      <Counter /> {/* Вставляем компонент счетчика */}

      <h2>Введите текст</h2>
      <TextInput /> {/* Вставляем компонент TextInput */}

      <h2>Группа чекбоксов</h2>
      <CheckboxGroup />

      <FilterList />

      <Tweet author="Anna" content="Привет, это мой первый твит!" />

      <Dropdown />


    </div>
  );
};


export default App;
