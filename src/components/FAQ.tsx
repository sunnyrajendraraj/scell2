import React from 'react';

const FAQ = () => {
  const faqs = [
    {
      question: " 1. What is the Startup Cell, and What does it do?",
      answer: "The Startup Cell at IIIT Bhagalpur is a dedicated platform that promotes innovation and entrepreneurship among students by providing mentorship, resources, and guidance to transform ideas into successful ventures."
    },
    {
      question: "2. How can I join the Startup Cell?",
      answer: "Students can join the Startup Cell by registering themselves on our website, participating in our events, workshops, and open recruitment drives held periodically."
    },
    {
      question: "3. Do I need to have a startup idea to join the Startup Cell?",
      answer: "No, having a startup idea is not mandatory. The cell welcomes all students with an interest in entrepreneurship and innovation."
    },
    {
      question: "4. What type of events does the Startup Cell organize?",
      answer: "The Startup Cell organizes workshops, hackathons, idea-pitching competitions, expert talks, and networking sessions to inspire and support entrepreneurial skills."
    },
    {
      question: " 5. How can the Startup Cell help me if I already have a startup idea?",
      answer: "The Startup Cell provides mentorship, networking opportunities, and resources to help refine your idea and take it to the next level."
    },
    {
      question: "6. Does the Startup Cell provide funding or support for student startups?",
      answer: " While the cell doesn’t directly provide funding, it connects student startups to funding opportunities, investors, and incubation programs."
    },
    {
      question: " 7. Are there any prerequisites to attend Startup Cell events?",
      answer: "No, our events are open to all students interested in innovation and entrepreneurship"
    },
    {
      question: " 8. How can I submit my startup idea to the Startup Cell for feedback?",
      answer: " You can submit your startup idea on our website or by reaching out to us via email or participating in our idea submission drives organized throughout the year."
    }
  ];

  return (
    <section id="faq" className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{faq.question}</h3>
              <p className="text-gray-600">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;