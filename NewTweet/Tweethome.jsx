import React, { useState } from 'react';
import TweetList from './TweetList';
import NewTweet from './NewTweet';

const Tweethome = () => {
  const [tweets, setTweets] = useState([
    { authorName: 'Анна', authorUsername: 'anna_dev', content: 'Привет, мир!' }
  ]);
  const [content, setContent] = useState('');

  const handleTweetSubmit = () => {
    if (content.trim()) {
      const newTweet = {
        authorName: 'Новый Автор',
        authorUsername: 'new_user',
        content,
      };
      setTweets([newTweet, ...tweets]);
      setContent('');
    }
  };

  return (
    <div>
      <h2>Лента твитов</h2>
      <NewTweet content={content} setContent={setContent} onTweetSubmit={handleTweetSubmit} />
      <TweetList tweets={tweets} />
    </div>
  );
};

export default Tweethome;
