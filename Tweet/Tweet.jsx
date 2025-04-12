import React, { useState } from 'react';

const Tweet = ({ author, content }) => {
  const [likes, setLikes] = useState(0);

  return (
    <div style={styles.card}>
      <h4>{author}</h4>
      <p>{content}</p>
      <button onClick={() => setLikes(likes + 1)}>❤️ {likes}</button>
    </div>
  );
};

const styles = {
  card: {
    border: '1px solid #ccc',
    padding: '10px',
    marginBottom: '10px',
    borderRadius: '5px',
    maxWidth: '300px'
  },
};

export default Tweet;
