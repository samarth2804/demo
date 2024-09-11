import React from 'react'

export default function About() {
  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-8">
        <h1 className="text-4xl font-bold text-center text-blue-600 mb-6">About Us</h1>
        <p className="text-lg text-gray-700 text-center mb-4">
          Welcome to <span className="font-semibold">E-Pharmacy</span> – your one-stop solution for finding reliable medicines at your fingertips. We are dedicated to offering quality healthcare products that are accessible, affordable, and trustworthy.
        </p>
        <p className="text-md text-gray-600 leading-relaxed">
          At <span className="font-semibold">E-Pharmacy</span>, we believe in the power of technology to improve healthcare experiences. Our mission is to make medicines available to everyone, wherever they are, with the click of a button. Whether you're looking for over-the-counter solutions, prescription medicines, or specialized healthcare products, we have you covered.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Why Choose Us?</h2>
        <ul className="list-disc list-inside text-gray-700">
          <li className="mb-2">A wide range of trusted medicines from top manufacturers.</li>
          <li className="mb-2">Detailed product descriptions to help you make informed decisions.</li>
          <li className="mb-2">Fast and reliable delivery services to ensure your health is never compromised.</li>
          <li className="mb-2">A user-friendly platform that makes ordering simple and efficient.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Our Mission</h2>
        <p className="text-md text-gray-600 leading-relaxed">
          Our mission is to provide easy access to quality medicines, empowering individuals to take control of their health. We are committed to delivering excellence in every aspect of healthcare, offering solutions that are convenient, affordable, and reliable.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Our Values</h2>
        <ul className="list-disc list-inside text-gray-700">
          <li className="mb-2">Customer First: Your health is our top priority.</li>
          <li className="mb-2">Transparency: We provide detailed, accurate information about every product.</li>
          <li className="mb-2">Quality: We ensure the highest standards of safety and reliability in all products.</li>
          <li className="mb-2">Innovation: We leverage the latest technology to make healthcare accessible to everyone.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Contact Us</h2>
        <p className="text-md text-gray-600 leading-relaxed">
          Have questions or need assistance? We're here to help! Reach out to our customer support team at <a href="mailto:support@e-pharmacy.com" className="text-blue-500 underline">support@epharmacy</a>, and we'll get back to you as soon as possible.
        </p>
      </div>
    </div>
  );
}
