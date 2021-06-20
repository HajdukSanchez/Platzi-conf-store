import React, { useContext } from 'react';
import '../styles/components/Products.scss';

import AppContext from '../context/AppContext';

import Product from './Product';

const Products = () => {
  const { products, addToCart } = useContext(AppContext);
  // const { products } = state;

  // It is necessary to add the double function declaration, because if we don't, when we render the element that contains the function, it will be executed
  const handleAddToCart = (product) => () => {
    addToCart(product);
  };

  return (
    <div className="Products">
      <div className="Products-items">
        {products.map((product) => (
          <Product
            key={product.id}
            product={product}
            handleAddToCart={handleAddToCart}
          />
        ))}
      </div>
    </div>
  );
};

export default Products;
