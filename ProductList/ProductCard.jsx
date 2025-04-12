// ProductCard.jsx
import React from 'react';
import PropTypes from 'prop-types';

function ProductCard({ title, price, image, onAddToCart }) {
  return (
    <div style={styles.card}>
      <img src={image} alt={title} style={styles.image} />
      <h3>{title}</h3>
      <p>Цена: {price}₽</p>
      <button onClick={onAddToCart}>Добавить в корзину</button>
    </div>
  );
}

ProductCard.propTypes = {
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  onAddToCart: PropTypes.func.isRequired,
};

const styles = {
  card: {
    border: '1px solid #ccc',
    padding: 12,
    borderRadius: 6,
    textAlign: 'center',
    width: 180,
    margin: 10,
  },
  image: {
    width: '100%',
    height: 120,
    objectFit: 'cover',
    marginBottom: 10,
  },
};

export default ProductCard;
