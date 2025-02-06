import React, { useState } from 'react';

const Benefits = () => {
  const [activeTab, setActiveTab] = useState(1);
  
  const tabs = [
    {
      id: 1,
      title: "6+ Unique Projects",
      description: "Boost your resume with industry-level projects in Python, Java, HTML, CSS, JS & Machine Learning.",
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-presentation"><path d="M2 3h20"/><path d="M21 3v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V3"/><path d="m7 21 5-5 5 5"/></svg>,
      image: "images/project1.jpg"
    },
    {
      id: 2,
      title: "800+ Interview Problems",
      description: "Master coding rounds with 800+ problems from top companies like Google, Amazon, Microsoft, and more!",
      icon: <svg className="shrink-0 mt-2 size-6 md:size-7 text-gray-800" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m12 14 4-4"/><path d="M3.34 19a10 10 0 1 1 17.32 0"/></svg>,
      image: "images/project2.png"
    },
    {
      id: 3,
      title: "Interview Preparation",
      description: "Get hiring assistance, mock interviews, HR interview practice, theory & aptitude practice, live sessions, and doubt support.",
      icon: <svg className="shrink-0 mt-2 size-6 md:size-7 text-gray-800" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/><path d="M5 3v4"/><path d="M19 17v4"/><path d="M3 5h4"/><path d="M17 19h4"/></svg>,
      image: "images/project3.png"
    }
  ];


  return (
    <div className="w-full">
      
      <div className="px-4 py-0 md:py-0 lg:py-0">
      <div className="mb-5 text-center">
          <span className="py-1 px-4 bg-yellow-100 rounded-full text-xs font-medium text-yellow-700 text-center">
            Benefits
          </span>
          <h2 className="text-4xl text-center font-bold text-gray-900 pt-5">
            The Benefits You Get! 
          </h2>
          
        </div>
        <div className="max-w-7xl mx-auto">
          
          <div className="relative p-4 md:p-4 lg:p-4">
            
            <div className="relative z-10 flex flex-col lg:grid lg:grid-cols-12 lg:gap-8 lg:items-center">
              
              {/* Tabs Section */}
              <div className="order-2 lg:order-2 lg:col-span-6 lg:col-start-7">
                <nav className="grid gap-3" aria-label="Tabs">
                  {tabs.map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`text-start transition-all duration-200 p-4 rounded-xl ${
                        activeTab === tab.id ? 'bg-white shadow-md' : 'hover:bg-gray-100'
                      }`}
                    >
                      <span className="flex gap-x-4">
                        <span className={`${activeTab === tab.id ? 'text-blue-600' : ''}`}>
                          {tab.icon}
                        </span>
                        <span className="grow">
                          <span className={`block text-lg font-semibold ${
                            activeTab === tab.id ? 'text-blue-600' : 'text-gray-800'
                          }`}>
                            {tab.title}
                          </span>
                          <span className="block mt-1 text-gray-600">
                            {tab.description}
                          </span>
                        </span>
                      </span>
                    </button>
                  ))}
                </nav>
              </div>

              {/* Image Section */}
              <div className="hidden lg:block order-1 mb-8 lg:mb-0 lg:order-1 lg:col-span-6">
                <div className="relative">
                  {tabs.map((tab) => (
                    <div
                      key={tab.id}
                      className={`transition-opacity duration-300 ${
                        activeTab === tab.id ? 'opacity-100' : 'opacity-0 hidden'
                      }`}
                    >
                      <img
                        className="w-full max-w-[400px] max-h-[500px] object-cover mx-auto rounded-xl shadow-xl shadow-gray-200"
                        src={tab.image}
                        alt={tab.title}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Background Shape */}
            <div className="absolute inset-0 grid grid-cols-12 w-full h-full pointer-events-none">
              <div className="col-span-full lg:col-span-7 lg:col-start-6 bg-white w-full h-5/6 rounded-xl sm:h-3/4 lg:h-full"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benefits;


