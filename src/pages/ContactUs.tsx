// import React from 'react'

// const ContactUs = () => {
//   return (
//     <div className="max-w-3xl mx-auto px-4">
//           <h2 className="text-3xl font-bold text-center mb-12">Contact Us</h2>
//           <div>
//           <p>
//           At the Startup Cell, IIIT Bhagalpur, we strive for excellence by focusing on innovation and
//           collaboration. Whether you have questions, ideas, or simply want to connect, our team is
//           here to support and guide you.
//           </p><br/>
//           <p>
//           Do you have feedback or need assistance? We’d love to hear from you! Reach out to us and
//           be a part of the entrepreneurial journey.
//           </p><br/><br/>
//           </div>
//           <form className="space-y-6">
//             <div>
//               <label className="block text-gray-700 mb-2">Name</label>
//               <input type="text" className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500" />
//             </div>
//             <div>
//               <label className="block text-gray-700 mb-2">Email</label>
//               <input type="email" className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500" />
//             </div>
//             <div>
//               <label className="block text-gray-700 mb-2">Message</label>
//               <textarea rows={4} className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"></textarea>
//             </div>
//             <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition">
//               Send Message
//             </button>
//           </form>
//         </div>
//   )
// }

// export default ContactUs

import    { useState } from 'react';
import emailjs from '@emailjs/browser';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
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
        'service_1isrfgo', // Replace with your EmailJS service ID
        'template_484qe4d', // Replace with your EmailJS template ID
        formData,
        'k44CWSCSExkNjnwTD' // Replace with your EmailJS public key
      )
      .then(
        (result) => {
          setSuccessMessage('Message sent successfully!');
          setErrorMessage('');
          setFormData({ name: '', email: '', message: '' });
        },
        (error) => {
          setErrorMessage('Failed to send the message. Please try again later.');
          setSuccessMessage('');
        }
      );
  };

  return (
    <div className="max-w-3xl mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-12">Contact Us</h2>
      <p>We would love to hear from you. Please fill out the form below.</p>
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
          />
        </div>
        <div>
          <label className="block text-gray-700 mb-2">Message</label>
          <textarea
            rows={4}
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactUs;
