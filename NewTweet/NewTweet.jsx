import React from 'react';

const NewTweet = ({ content, setContent, onTweetSubmit }) => {
  return (
    <div style={{ marginBottom: 20 }}>
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Что у вас на уме?"
        rows="3"
        style={{ width: '100%', padding: 10 }}
      />
      <button onClick={onTweetSubmit}>Твитнуть</button>
    </div>
  );
};

export default NewTweet;
