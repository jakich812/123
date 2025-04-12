
import React from 'react';
import TweetList from './TweetList';

function Home() {
  const tweets = [
    {
      authorName: 'Анна',
      authorUsername: 'anna_dev',
      content: 'Привет, мир! Я изучаю React 🎉',
      likes: 12,
      retweets: 3,
      replies: 1,
    },
    {
      authorName: 'Максим',
      authorUsername: 'maxcode',
      content: 'Сегодня написал 100 строк кода. И удалил 200 😂',
      likes: 25,
      retweets: 5,
      replies: 2,
    },
  ];

  return (
    <div style={{ padding: 20 }}>
      <h2>Лента твитов</h2>
      <TweetList tweets={tweets} />
    </div>
  );
}

export default Home;
