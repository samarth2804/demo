import React from 'react';
import { Link } from 'react-router-dom';
import {toast} from 'react-hot-toast';

const MedicineItem = ({ medicineId, image, name, manufacturer, category, price, expiryDate }) => {
  const addToCart=()=>{
    toast.success(`Added to cart successfully!`);
  }

  return (
    <div  className="bg-white shadow-md rounded-lg p-4 max-w-sm hover:shadow-xl transition-shadow">
    <Link to={`/medicine/${medicineId}`}>
      <img src={image} alt={name} className="w-full h-40 object-cover rounded-md" />
      <div className="mt-4">
        <h2 className="text-lg font-bold text-gray-800">{name}</h2>
        <p className="text-gray-600 text-sm">Manufacturer: {manufacturer}</p>
        <p className="text-gray-600 text-sm">Category: {category}</p>
        <p className="text-gray-900 text-lg font-semibold">₹{price}</p>
        <p className="text-gray-500 text-sm">Expiry Date: {expiryDate}</p>
      </div>
    </Link>
    <button
        onClick={() => addToCart(medicineId)}
        className="mt-4 bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
      >
        Add To Cart
      </button>
    </div>
  );
};

export default MedicineItem;