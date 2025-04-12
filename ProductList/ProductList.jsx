// ProductList.jsx
import React from 'react';
import ProductCard from './ProductCard';

function ProductList({ products, onAddToCart }) {
  return (
    <div style={styles.list}>
      {products.map((product, index) => (
        <ProductCard
          key={index}
          title={product.title}
          price={product.price}
          image={product.image}
          onAddToCart={() => onAddToCart(product)}
        />
      ))}
    </div>
  );
}

const styles = {
  list: {
    display: 'flex',
    flexWrap: 'wrap',
  },
};

export default ProductList;
