// SearchPage.jsx
import React, { useState } from 'react';
import MedicineCard from '../components/MedicineItem';
import MedicineImg from '/pharmaimg2.jpg'
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
  {
    medicineId: 3,
    name: 'Ibuprofen',
    manufacturer: 'DEF Pharmaceuticals',
    category: 'Anti-Inflammatory',
    price: 120,
    expiryDate: '2025-06-15',
    manufacturingDate: '2023-06-01',
    quantity: 200,
  },
  {
    medicineId: 3,
    name: 'Ibuprofen',
    manufacturer: 'DEF Pharmaceuticals',
    category: 'Anti-Inflammatory',
    price: 120,
    expiryDate: '2025-06-15',
    manufacturingDate: '2023-06-01',
    quantity: 200,
  },
  {
    medicineId: 3,
    name: 'Ibuprofen',
    manufacturer: 'DEF Pharmaceuticals',
    category: 'Anti-Inflammatory',
    price: 120,
    expiryDate: '2025-06-15',
    manufacturingDate: '2023-06-01',
    quantity: 200,
  },
  {
    medicineId: 3,
    name: 'Ibuprofen',
    manufacturer: 'DEF Pharmaceuticals',
    category: 'Anti-Inflammatory',
    price: 120,
    expiryDate: '2025-06-15',
    manufacturingDate: '2023-06-01',
    quantity: 200,
  },
  {
    medicineId: 3,
    name: 'Ibuprofen',
    manufacturer: 'DEF Pharmaceuticals',
    category: 'Anti-Inflammatory',
    price: 120,
    expiryDate: '2025-06-15',
    manufacturingDate: '2023-06-01',
    quantity: 200,
  },
  {
    medicineId: 3,
    name: 'Ibuprofen',
    manufacturer: 'DEF Pharmaceuticals',
    category: 'Anti-Inflammatory',
    price: 120,
    expiryDate: '2025-06-15',
    manufacturingDate: '2023-06-01',
    quantity: 200,
  },
  {
    medicineId: 3,
    name: 'Ibuprofen',
    manufacturer: 'DEF Pharmaceuticals',
    category: 'Anti-Inflammatory',
    price: 120,
    expiryDate: '2025-06-15',
    manufacturingDate: '2023-06-01',
    quantity: 200,
  },
  // Add more medicines here
];

const categories = [...new Set(medicines.map((medicine) => medicine.category))];

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Filter medicines based on the search term and selected category
  const filteredMedicines = medicines.filter((medicine) => {
    const matchesSearchTerm = medicine.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || medicine.category === selectedCategory;
    return matchesSearchTerm && matchesCategory;
  });

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-600">Search for Medicines</h1>
      
      {/* Search and category filter */}
      <div className="flex justify-center items-center gap-4 mb-8">
        {/* Search input */}
        <input
          type="text"
          className="w-full max-w-md p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Search by medicine name..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        {/* Category dropdown */}
        <select
          className="w-full max-w-xs p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="All">All Categories</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      {/* Display filtered medicines */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {filteredMedicines.length > 0 ? (
          filteredMedicines.map((medicine) => (
            <MedicineCard
              key={medicine.medicineId}
              medicineId={medicine.medicineId}
              image={MedicineImg}
              name={medicine.name}
              manufacturer={medicine.manufacturer}
              category={medicine.category}
              price={medicine.price}
              expiryDate={medicine.expiryDate}
            />
          ))
        ) : (
          <p className="text-center text-gray-500 col-span-full">
            No medicines found matching your search.
          </p>
        )}
      </div>
    </div>
  );
};

export default Search;
