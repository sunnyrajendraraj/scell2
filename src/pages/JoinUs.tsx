import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

const JoinUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    batch: '',
    rollNumber: '',
    phoneNumber: '',
    email: '',
    event: '',
    interestReason: '',
  });

  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e:any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e:any) => {
    e.preventDefault();

    emailjs
      .send(
        'service_1isrfgo', // Replace with your EmailJS Service ID
        'template_ld5we1a', // Replace with your EmailJS Template ID
        formData,
        'k44CWSCSExkNjnwTD' // Replace with your EmailJS Public Key
      )
      .then(
        (result) => {
          setSuccessMessage('Application submitted successfully!');
          setErrorMessage('');
          setFormData({
            name: '',
            batch: '',
            rollNumber: '',
            phoneNumber: '',
            email: '',
            event: '',
            interestReason: '',
          });
        },
        (error) => {
          setErrorMessage('Failed to submit the application. Please try again later.');
          setSuccessMessage('');
        }
      );
  };

  return (
    <div className="bg-white rounded-lg shadow-lg py-16 p-20">
      <h2 className="text-2xl font-bold mb-6">Join Us</h2>
      {successMessage && <p className="text-green-500">{successMessage}</p>}
      {errorMessage && <p className="text-red-500">{errorMessage}</p>}
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-gray-700 mb-2">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your full name"
          />
        </div>
        <div>
          <label className="block text-gray-700 mb-2">Batch</label>
          <input
            type="text"
            name="batch"
            value={formData.batch}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your Batch"
          />
        </div>
        <div>
          <label className="block text-gray-700 mb-2">Roll Number</label>
          <input
            type="text"
            name="rollNumber"
            value={formData.rollNumber}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your Roll Number"
          />
        </div>
        <div>
          <label className="block text-gray-700 mb-2">Phone Number</label>
          <input
            type="text"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your Phone Number"
          />
        </div>
        <div>
          <label className="block text-gray-700 mb-2">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your email address"
          />
        </div>
        <div>
          <label className="block text-gray-700 mb-2">Event</label>
          <input
            type="text"
            name="event"
            value={formData.event}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
            placeholder="Enter the event you are interested in"
          />
        </div>
        <div>
          <label className="block text-gray-700 mb-2">Why are you interested in this startup?</label>
          <textarea
            rows={4}
            name="interestReason"
            value={formData.interestReason}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
            placeholder="Tell us why you're interested and how you'd like to contribute..."
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition duration-300 transform hover:scale-[1.02]"
        >
          Submit Application
        </button>
      </form>
    </div>
  );
};

export default JoinUs;
