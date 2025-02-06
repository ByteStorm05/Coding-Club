
import React from 'react';
import Modal from './Modal';


const features = [
    {
      svg: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" class="size-10">
  <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 0 1 3 3h-15a3 3 0 0 1 3-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 0 1-.982-3.172M9.497 14.25a7.454 7.454 0 0 0 .981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 0 0 7.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 0 0 2.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 0 1 2.916.52 6.003 6.003 0 0 1-5.395 4.972m0 0a6.726 6.726 0 0 1-2.749 1.35m0 0a6.772 6.772 0 0 1-3.044 0" />
</svg>
      ),
      title: 'Proven Success',
      description: `Our students have cracked top packages and secured roles at Microsoft, Google, Walmart, Paytm, and more!`,
      bgColor: 'bg-indigo-50',
      hoverBg: 'group-hover:bg-indigo-600',
      textColor: 'text-indigo-600 group-hover:text-white',
      link: "Check out our results!",
      href: "#results"
    },
    {
      svg: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" class="size-10">
  <path stroke-linecap="round" stroke-linejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
</svg>

      ),
      title: 'Structured Curriculum',
      description: 'Struggling with coding prep? Our online batch covers coding, DSA, full-stack development, and aptitude—everything you need for placements and internships!',
      bgColor: 'bg-pink-50',
      hoverBg: 'group-hover:bg-pink-600',
      textColor: 'text-pink-600 group-hover:text-white',
      link: "Check out our courses!",
      href: "#courses"
    },
    {
      svg: (
        <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-user"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
      ),
      title: 'Personalized Mentorship',
      description: 'Stuck on concepts? Get 1:1 mentorship from experts who’ve been where you want to be!',
      bgColor: 'bg-teal-50',
      hoverBg: 'group-hover:bg-teal-600',
      textColor: 'text-teal-600 group-hover:text-white',
      link: "Check out our team of experts!",
      href: "#team"
    },
    {
      svg: (
        <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-indian-rupee"><path d="M6 3h12"/><path d="M6 8h12"/><path d="m6 13 8.5 8"/><path d="M6 13h3"/><path d="M9 13c6.667 0 6.667-10 0-10"/></svg>
      ),
      title: 'Affordable Pricing',
      description: '🔥 Flat 40% OFF – Limited Seats Only! Unlock high-value learning at a budget-friendly cost! Don\'t miss out—enroll now before seats fill up',
      bgColor: 'bg-orange-50',
      hoverBg: 'group-hover:bg-orange-600',
      textColor: 'text-orange-600 group-hover:text-white',
      showButton: false
    },
    {
      svg: (
        <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-users"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
      ),
      title: 'Community Support',
      description: 'Learning alone is tough—join a strong network of peers, mentors, and coders',
      bgColor: 'bg-blue-50',
      hoverBg: 'group-hover:bg-blue-600',
      textColor: 'text-blue-600 group-hover:text-white'
    },
    {
      svg: (
        <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-shield-check"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="m9 12 2 2 4-4"/></svg>
      ),
      title: 'Trust & Reliability',
      description: 'No fake promises, just real results—trusted by students who’ve made it big!',
      bgColor: 'bg-green-50',
      hoverBg: 'group-hover:bg-green-600',
      textColor: 'text-green-600 group-hover:text-white'
    }
];

const FeaturesSection = () => {




  return (
    <section id="features" className="py-6">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-14 text-center">
          <span className="py-1 px-4 bg-indigo-100 rounded-full text-xs font-medium text-indigo-600 text-center">
            Features
          </span>
          <h2 className="text-4xl text-center font-bold text-gray-900 py-5">
            Why Coding Club is the <span className='text-green-500 underline'>Ultimate Choice!</span>
          </h2>
          <p className="text-lg font-normal text-gray-500 max-w-md md:max-w-2xl mx-auto">
            Provides advanced features to support your learning journey.
          </p>
        </div>
      
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-10">
  {features.map((feature, index) => (
    <div 
      key={index} 
      className="relative text-center max-md:max-w-sm max-md:mx-auto group"
    >
      <div 
        className={`${feature.bgColor} rounded-lg flex justify-center items-center mb-5 w-20 h-20 mx-auto cursor-pointer transition-all duration-500 ${feature.hoverBg}`}
      >
        <div 
          className={`${feature.textColor} transition-all duration-500`}
        >
          {feature.svg}
        </div>
      </div>
      <h4 className="text-lg font-medium text-gray-900 mb-3 capitalize">
        {feature.title}
      </h4>
      <p className="text-md text-gray-500">
        {feature.description}
      </p>
      
      {/* <a href={`${feature.href}`||'/'} class="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent text-blue-600 hover:text-blue-800 focus:outline-none focus:text-blue-800 active:text-blue-800 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-400 dark:focus:text-blue-400 dark:active:text-blue-400">
        { feature.link||"Link"}
      </a> */}
         {feature.showButton ? (
                <div className="inline-block pt-4">
                  <Modal />
                </div>
              ) : feature.link && feature.href ? (
                <a 
                  href={feature.href} 
                  className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent text-blue-600 hover:text-blue-800 focus:outline-none focus:text-blue-800 active:text-blue-800 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-400 dark:focus:text-blue-400 dark:active:text-blue-400"
                >
                  {feature.link}
                </a>
              ) : null}
    </div>
  ))}
</div>

      </div>
    </section>
  );
};

export default FeaturesSection;








