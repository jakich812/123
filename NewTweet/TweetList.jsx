import React from 'react';

const TweetList = ({ tweets }) => {
  return (
    <div>
      {tweets.map((tweet, i) => (
        <div key={i} style={{ border: '1px solid #ccc', marginBottom: 10, padding: 10 }}>
          <strong>{tweet.authorName}</strong> @{tweet.authorUsername}
          <p>{tweet.content}</p>
        </div>
      ))}
    </div>
  );
};

export default TweetList;
