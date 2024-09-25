import React, { useRef } from 'react';

function AddProduct() {
  const nameRef = useRef();
  const priceRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const product = {
      name: nameRef.current.value,
      price: priceRef.current.value,
    };
    console.log(product);
    // Add product to the database logic here
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" ref={nameRef} placeholder="Product Name" required />
      <input type="number" ref={priceRef} placeholder="Product Price" required />
      <button type="submit">Add Product</button>
    </form>
  );
}

export default AddProduct;
