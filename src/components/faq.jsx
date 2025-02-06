import React, { useState } from "react";

const FAQComponent = () => {
  const faqs = [
    { question: "Is this course beginner-friendly?", answer: "Yes, we will teach you all from very basic to advanced." },
    { question: "Can I do this course with my college classes or along with a job?", answer: "Yes, it can be done along. Also, you will have the first sync-up session with Rishabh Jain regarding time management." },
    { question: "How long is the course access?", answer: "We will give you access till you crack the company of your dream." },
    { question: "Will there be a Certificate of completion?", answer: "Yes, you will get a certificate after finishing this course." },
    { question: "Will there be LIVE classes?", answer: "Yes, there will be live classes 3-4 times a week. Timings will be 9:30 to 10:30 pm." },
    { question: "Any daily live doubt support?", answer: "There will be daily live doubt support over GMeet from 8 pm to 11 pm. The rest of the day, you can discuss your doubts in batch WhatsApp Groups." },
    { question: "What is the duration of the batch?", answer: "It will take around 6 months. If you are in a hurry, consult with the team to join the 'Priority batch' and cover all in 3-4 months." },
    { question: "Can I connect with the team before I join?", answer: "Call on 9987774837 or WhatsApp." }
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto mt-[-100px]">
      <div className="grid md:grid-cols-5 gap-10">
        <div className="md:col-span-2">
          <div className="max-w-xs">
            <h2 id="faq"className="text-2xl font-bold md:text-4xl md:leading-tight dark:text-white">Frequently<br />asked questions</h2>
            <p className="mt-1 hidden md:block text-gray-600 dark:text-neutral-400">Answers to the most frequently asked questions.</p>
          </div>
        </div>
        <div className="md:col-span-3">
          <div className="hs-accordion-group divide-y divide-gray-200 dark:divide-neutral-700">
            {faqs.map((faq, index) => (
              <div key={index} className="hs-accordion pt-6 pb-3">
                <button
                  className="hs-accordion-toggle group py-4 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-start text-gray-800 rounded-lg hover:text-gray-500 focus:outline-none focus:text-gray-500 dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:text-neutral-400"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={openIndex === index}
                >
                  {faq.question}
                  <svg 
                    className={`shrink-0 size-5 text-gray-600 transform transition-transform duration-500 ease-in-out group-hover:text-gray-500 dark:text-neutral-400 ${openIndex === index ? "rotate-180" : ""}`} 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="24" 
                    height="24" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  >
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </button>
                <div 
                  className={`transition-all duration-500 ease-in-out ${
                    openIndex === index 
                      ? "max-h-96 opacity-100" 
                      : "max-h-0 opacity-0"
                  }`}
                  style={{ 
                    transform: openIndex === index ? 'translateY(0)' : 'translateY(-10px)',
                    visibility: openIndex === index ? 'visible' : 'hidden'
                  }}
                >
                  <p className="text-gray-600 dark:text-neutral-400 pt-2">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQComponent;