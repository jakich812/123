import React from 'react';
import PropTypes from 'prop-types';

const Tweet = ({ authorName, authorUsername, content, likes = 0, retweets = 0, replies = 0 }) => (
  <div style={styles.card}>
    <div style={styles.header}>
      <strong>{authorName}</strong> <span>@{authorUsername}</span>
    </div>
    <p style={styles.content}>{content}</p>
    <div style={styles.actions}>
      <span>💬 {replies}</span>
      <span>🔁 {retweets}</span>
      <span>❤️ {likes}</span>
    </div>
  </div>
);

Tweet.propTypes = {
  authorName: PropTypes.string.isRequired,
  authorUsername: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  likes: PropTypes.number,
  retweets: PropTypes.number,
  replies: PropTypes.number,
};

const styles = {
  card: {
    border: '1px solid #ccc',
    padding: 12,
    borderRadius: 6,
    marginBottom: 15,
    background: '#f9f9f9',
  },
  header: { marginBottom: 6 },
  content: { marginBottom: 10 },
  actions: {
    display: 'flex',
    justifyContent: 'space-around',
    fontSize: 14,
    color: '#555',
  },
};

export default Tweet;
