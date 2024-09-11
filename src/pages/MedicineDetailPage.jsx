import React from 'react';
import { useParams } from 'react-router-dom';
import MedicineImg from '/pharmaimg2.jpg';
import {toast} from 'react-hot-toast';

const medicines = [
  {
    medicineId: 1,
    name: 'Paracetamol',
    manufacturer: 'ABC Pharmaceuticals',
    category: 'Painkiller',
    price: 50,
    expiryDate: '2025-01-01',
    manufacturingDate: '2023-01-01',
    quantity: 100,
  },
  {
    medicineId: 2,
    name: 'Aspirin',
    manufacturer: 'XYZ Pharmaceuticals',
    category: 'Blood Thinner',
    price: 80,
    expiryDate: '2024-12-31',
    manufacturingDate: '2023-06-01',
    quantity: 200,
  },
  // Add more medicines here
];

const MedicineDetailPage = () => {
  const { id } = useParams();
  const medicine = medicines.find((med) => med.medicineId === parseInt(id));

  if (!medicine) {
    return <div>Medicine not found</div>;
  }

  const addToCart=()=>{
    toast.success(`Added to cart successfully!`);
  }

  return (
    <div className="container mx-auto py-8">
    <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6">
      <img src={MedicineImg} alt="Medicine-img" className="w-full h-60 object-cover rounded-md" />
      <h1 className="text-3xl font-bold mt-4">{medicine.name}</h1>
      <p className="text-gray-600 text-sm">Manufacturer: {medicine.manufacturer}</p>
      <p className="text-gray-600 text-sm">Category: {medicine.category}</p>
      <p className="text-gray-900 text-lg font-semibold">₹{medicine.price}</p>
      <p className="text-gray-500 text-sm">Manufacturing Date: {medicine.manufacturingDate}</p>
      <p className="text-gray-500 text-sm">Expiry Date: {medicine.expiryDate}</p>
      <p className="text-gray-500 text-sm">Quantity: {medicine.quantity}</p>
      <button
        onClick={() => addToCart(medicine.medicineId)}
        className="mt-6 bg-gray-500 text-white px-8 py-2 rounded hover:bg-gray-600 w-full"
      >
        Add To Cart
      </button>
    </div>
  </div>
  );
};

export default MedicineDetailPage;