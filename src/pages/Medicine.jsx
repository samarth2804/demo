import React from 'react'
import MedicineItem from '../components/MedicineItem';
import MedicineImg from '/pharmaimg2.jpg'

const Medicine = () => {
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

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Reliable Medicines, Right at Your Fingertips</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {medicines.map((medicine, index) => (
          <MedicineItem
            key={index}
            medicineId={medicine.medicineId}
            image={MedicineImg}
            name={medicine.name}
            manufacturer={medicine.manufacturer}
            category={medicine.category}
            price={medicine.price}
            expiryDate={medicine.expiryDate}
          />
        ))}
      </div>
    </div>
  );
};

export default Medicine;


// import React from 'react'

// const Medicine = () => {
//   return (
//     <div>Medicine</div>
//   )
// }

// export default Medicine