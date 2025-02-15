// // import React from "react";

// // const HeroSection = () => {
// //   return (
// //     <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 pt-5">
// //       <div>
// //         <div className="relative">
// //           <div className="mb-6">
// //             <h1 className="block text-2xl font-bold text-gray-800 sm:text-3xl lg:text-4xl lg:leading-tight dark:text-white">
// //             Crack High-Paying Jobs & Internships with{" "}
// //               <span className="text-blue-600">Coding Mafia</span> (Online)!
// //             </h1>
// //             <div className="mt-4 space-y-2">
// //               <p className="text-xl font-semibold ">The ONE Program Everyone Needs, Even If You Are <span className="text-red-500">Horrible</span> In Coding!</p>
// //               <div className="flex flex-wrap gap-3 text-lg font-medium">
// //                 <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full">✨ 6 Months Duration</span>
// //                 <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full">🔥 LIVE! Starting Monday</span>
// //                 <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full">⚡ Registration Closes Soon!</span>
// //               </div>
// //             </div>
// //           </div>
          
// //           <p className="mt-3 text-lg text-gray-800 dark:text-neutral-400">
// //             Join the Coding Mafia Batch, a 6-month intensive program designed to take you from zero to job-ready with LIVE expert-led sessions, <span className="underline">800+ DSA problems, full-stack projects, machine learning, and personalized mentorship</span>. No prior experience needed – just 2 hours a day to transform your career!
// //           </p>

// //           <div className="mt-7 grid gap-3 w-full sm:inline-flex">
// //             <a
// //               href="/courses"
// //               className="py-4 px-6 inline-flex justify-center items-center gap-x-2 text-base font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
// //             >
// //               Explore Courses!
// //               <svg
// //                 className="shrink-0 size-5"
// //                 xmlns="http://www.w3.org/2000/svg"
// //                 width="24"
// //                 height="24"
// //                 viewBox="0 0 24 24"
// //                 fill="none"
// //                 stroke="currentColor"
// //                 strokeWidth="2"
// //                 strokeLinecap="round"
// //                 strokeLinejoin="round"
// //               >
// //                 <path d="m9 18 6-6-6-6" />
// //               </svg>
// //             </a>
// //             <a
// //               className="py-4 px-6 inline-flex justify-center items-center gap-x-2 text-base font-semibold rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
// //               href="#"
// //             >
// //               Contact Us
// //             </a>
// //           </div>

// //           <div className="mt-6 lg:mt-8  grid grid-cols-5 gap-x-4">
// //             {[
// //               { rating: 4.6, reviews: "12k", text: "Got multiple interview calls after completing this program!" },
// //               { rating: 4.8, reviews: "5k", text: "The structured roadmap and mock interviews truly set it apart." },
// //               { rating: 4.9, reviews: "8k", text: "Live sessions were incredibly engaging and practical." },
// //               { rating: 4.7, reviews: "10k", text: "Landed my dream job within a month of completion!" },
// //               { rating: 4.8, reviews: "7k", text: "Best investment in my career development." }
// //             ].map((review, idx) => (
// //               <div key={idx} className="py-5">
// //                 <div className="flex gap-x-1">
// //                   {Array.from({ length: 5 }).map((_, index) => (
// //                     <svg
// //                       key={index}
// //                       className="size-4 text-gray-800 dark:text-neutral-200"
// //                       width="51"
// //                       height="51"
// //                       viewBox="0 0 51 51"
// //                       fill="none"
// //                       xmlns="http://www.w3.org/2000/svg"
// //                     >
// //                       <path
// //                         d="M27.0352 1.6307L33.9181 16.3633C34.2173 16.6768 34.5166 16.9903 34.8158 16.9903L50.0779 19.1845C50.9757 19.1845 51.275 20.4383 50.6764 21.0652L39.604 32.3498C39.3047 32.6632 39.3047 32.9767 39.3047 33.2901L41.998 49.2766C42.2973 50.217 41.1002 50.8439 40.5017 50.5304L26.4367 43.3208C26.1375 43.3208 25.8382 43.3208 25.539 43.3208L11.7732 50.8439C10.8754 51.1573 9.97763 50.5304 10.2769 49.59L12.9702 33.6036C12.9702 33.2901 12.9702 32.9767 12.671 32.6632L1.29923 21.0652C0.700724 20.4383 0.999979 19.4979 1.89775 19.4979L17.1598 17.3037C17.459 17.3037 17.7583 16.9903 18.0575 16.6768L24.9404 1.6307C25.539 0.69032 26.736 0.69032 27.0352 1.6307Z"
// //                         fill="currentColor"
// //                       />
// //                     </svg>
// //                   ))}
// //                 </div>
// //                 <p className="mt-3 text-sm text-gray-800 dark:text-neutral-200">
// //                   <span className="font-bold">{review.rating}</span> /5 - from {review.reviews} reviews
// //                 </p>
// //                 <div className="mt-5 text-gray-800 dark:text-white italic">
// //                   "{review.text}"
// //                 </div>
// //               </div>
// //             ))}
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default HeroSection;

// import DemoModal from "@/components/Modal2";
// import React from "react";

// const HeroSection = () => {
//   const reviews = [
//     { rating: 4.6, reviews: "12k", text: "Got multiple interview calls after completing this program!" },
//     { rating: 4.8, reviews: "5k", text: "The structured roadmap and mock interviews truly set it apart." },
//     { rating: 4.9, reviews: "8k", text: "Live sessions were incredibly engaging and practical." },
//     { rating: 4.7, reviews: "10k", text: "Landed my dream job within a month of completion!" },
//     { rating: 4.8, reviews: "7k", text: "Best investment in my career development." }
//   ];

//   return (
//     <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 pt-5">
//       <div className="flex flex-col items-center text-center">
//         <div className="max-w-full">
//           <h1 className="block text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 dark:text-white">
//             Crack High-Paying Jobs & Internships with{" "}
//             <span className="text-blue-600">Coding Mafia</span> (Online)!
//           </h1>
//           <div className="mt-6 space-y-2">
//             <p className="text-lg sm:text-xl font-semibold">
//               The ONE Program Everyone Needs, Even If You Are <span className="text-red-500">Horrible</span> In Coding!
//             </p>
//             <div className="flex flex-wrap justify-center gap-2 text-sm sm:text-base font-medium mt-3">
//               <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full">✨ 6 Months Duration</span>
//               <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full">🔥 LIVE! Starting Monday</span>
//               <span className="bg-red-100 text-red-800 px-2 py-1 rounded-full">⚡ Registration Closes Soon!</span>
//             </div>
//           </div>
          
//           <p className="mt-8 px-10 text-base sm:text-lg text-gray-800 dark:text-neutral-400">
//             Join the Coding Mafia Batch, a 6-month intensive program designed to take you from zero to job-ready with LIVE expert-led sessions, <span className="underline">800+ DSA problems, full-stack projects, machine learning, and personalized mentorship</span>. No prior experience needed – just 2 hours a day to transform your career!
//           </p>

//           <div className="mt-7 flex flex-col sm:flex-row justify-center gap-3 w-full">
//             <a
//               href="#courses"
//               className="py-3 px-5 inline-flex justify-center items-center gap-x-2 text-base font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700"
//             >
//               Explore Courses!
//               <svg
//                 className="shrink-0 size-4 sm:size-5"
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="24"
//                 height="24"
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 stroke="currentColor"
//                 strokeWidth="2"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//               >
//                 <path d="m9 18 6-6-6-6" />
//               </svg>
//             </a>
//             <a
//               className="py-3 px-5 inline-flex justify-center items-center gap-x-2 text-base font-semibold rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50"
//               href="#"
//             >
//               <DemoModal/>
//             </a>
//           </div>

//           <div className="mt-6 lg:mt-8">
//             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
//               {reviews.slice(0, 1).map((review, idx) => (
//                 <div key={idx} className="sm:hidden text-center">
//                   <div className="flex justify-center gap-x-1 mb-2">
//                     {Array.from({ length: 5 }).map((_, index) => (
//                       <svg
//                         key={index}
//                         className="size-4 text-gray-800 dark:text-neutral-200"
//                         width="51"
//                         height="51"
//                         viewBox="0 0 51 51"
//                         fill="none"
//                         xmlns="http://www.w3.org/2000/svg"
//                       >
//                         <path
//                           d="M27.0352 1.6307L33.9181 16.3633C34.2173 16.6768 34.5166 16.9903 34.8158 16.9903L50.0779 19.1845C50.9757 19.1845 51.275 20.4383 50.6764 21.0652L39.604 32.3498C39.3047 32.6632 39.3047 32.9767 39.3047 33.2901L41.998 49.2766C42.2973 50.217 41.1002 50.8439 40.5017 50.5304L26.4367 43.3208C26.1375 43.3208 25.8382 43.3208 25.539 43.3208L11.7732 50.8439C10.8754 51.1573 9.97763 50.5304 10.2769 49.59L12.9702 33.6036C12.9702 33.2901 12.9702 32.9767 12.671 32.6632L1.29923 21.0652C0.700724 20.4383 0.999979 19.4979 1.89775 19.4979L17.1598 17.3037C17.459 17.3037 17.7583 16.9903 18.0575 16.6768L24.9404 1.6307C25.539 0.69032 26.736 0.69032 27.0352 1.6307Z"
//                           fill="currentColor"
//                         />
//                       </svg>
//                     ))}
//                   </div>
//                   <p className="text-sm text-gray-800 dark:text-neutral-200">
//                     <span className="font-bold">{review.rating}</span> /5 - from {review.reviews} reviews
//                   </p>
//                   <div className="mt-2 text-sm text-gray-800 dark:text-white italic">
//                     "{review.text}"
//                   </div>
//                 </div>
//               ))}
              
//               {reviews.slice(0, 4).map((review, idx) => (
//                 <div key={idx} className="hidden sm:block lg:hidden text-center">
//                   <div className="flex justify-center gap-x-1 mb-2">
//                     {Array.from({ length: 5 }).map((_, index) => (
//                       <svg
//                         key={index}
//                         className="size-4 text-gray-800 dark:text-neutral-200"
//                         width="51"
//                         height="51"
//                         viewBox="0 0 51 51"
//                         fill="none"
//                         xmlns="http://www.w3.org/2000/svg"
//                       >
//                         <path
//                           d="M27.0352 1.6307L33.9181 16.3633C34.2173 16.6768 34.5166 16.9903 34.8158 16.9903L50.0779 19.1845C50.9757 19.1845 51.275 20.4383 50.6764 21.0652L39.604 32.3498C39.3047 32.6632 39.3047 32.9767 39.3047 33.2901L41.998 49.2766C42.2973 50.217 41.1002 50.8439 40.5017 50.5304L26.4367 43.3208C26.1375 43.3208 25.8382 43.3208 25.539 43.3208L11.7732 50.8439C10.8754 51.1573 9.97763 50.5304 10.2769 49.59L12.9702 33.6036C12.9702 33.2901 12.9702 32.9767 12.671 32.6632L1.29923 21.0652C0.700724 20.4383 0.999979 19.4979 1.89775 19.4979L17.1598 17.3037C17.459 17.3037 17.7583 16.9903 18.0575 16.6768L24.9404 1.6307C25.539 0.69032 26.736 0.69032 27.0352 1.6307Z"
//                           fill="currentColor"
//                         />
//                       </svg>
//                     ))}
//                   </div>
//                   <p className="text-sm text-gray-800 dark:text-neutral-200">
//                     <span className="font-bold">{review.rating}</span> /5 - from {review.reviews} reviews
//                   </p>
//                   <div className="mt-2 text-sm text-gray-800 dark:text-white italic">
//                     "{review.text}"
//                   </div>
//                 </div>
//               ))}
              
//               {reviews.map((review, idx) => (
//                 <div key={idx} className="hidden lg:block text-center">
//                   <div className="flex justify-center gap-x-1 mb-2">
//                     {Array.from({ length: 5 }).map((_, index) => (
//                       <svg
//                         key={index}
//                         className="size-4 text-gray-800 dark:text-neutral-200"
//                         width="51"
//                         height="51"
//                         viewBox="0 0 51 51"
//                         fill="none"
//                         xmlns="http://www.w3.org/2000/svg"
//                       >
//                         <path
//                           d="M27.0352 1.6307L33.9181 16.3633C34.2173 16.6768 34.5166 16.9903 34.8158 16.9903L50.0779 19.1845C50.9757 19.1845 51.275 20.4383 50.6764 21.0652L39.604 32.3498C39.3047 32.6632 39.3047 32.9767 39.3047 33.2901L41.998 49.2766C42.2973 50.217 41.1002 50.8439 40.5017 50.5304L26.4367 43.3208C26.1375 43.3208 25.8382 43.3208 25.539 43.3208L11.7732 50.8439C10.8754 51.1573 9.97763 50.5304 10.2769 49.59L12.9702 33.6036C12.9702 33.2901 12.9702 32.9767 12.671 32.6632L1.29923 21.0652C0.700724 20.4383 0.999979 19.4979 1.89775 19.4979L17.1598 17.3037C17.459 17.3037 17.7583 16.9903 18.0575 16.6768L24.9404 1.6307C25.539 0.69032 26.736 0.69032 27.0352 1.6307Z"
//                           fill="currentColor"
//                         />
//                       </svg>
//                     ))}
//                   </div>
//                   <p className="text-sm text-gray-800 dark:text-neutral-200">
//                     <span className="font-bold">{review.rating}</span> /5 - from {review.reviews} reviews
//                   </p>
//                   <div className="mt-2 text-sm text-gray-800 dark:text-white italic">
//                     "{review.text}"
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HeroSection;















// import React from "react";
// import DemoModal from "@/components/Modal2";

// const HeroSection = () => {
//   const reviews = [
//     { rating: 4.8, reviews: "5k", text: "The structured roadmap and mock interviews truly set it apart." },
//     { rating: 4.9, reviews: "8k", text: "Live sessions were incredibly engaging and practical." }
//   ];

//   return (
//     <div className="max-w-[85rem] mx-auto px-4 sm:px-6 min-[1396px]:px-8 pt-5">
//       <div className="grid grid-cols-1 min-[1396px]:grid-cols-2 items-center gap-8">
//         {/* Left Column - Text Content */}
//         <div className="text-center min-[1396px]:text-left">
//           <h1 className="block text-2xl sm:text-3xl min-[1396px]:text-4xl font-bold text-gray-800 dark:text-white">
//             Crack High-Paying Jobs & Internships with{" "}
//             <span className="text-blue-600">Coding Mafia</span> (Online)!
//           </h1>
//           <div className="mt-6 space-y-2">
//             <p className="text-lg sm:text-xl font-semibold">
//               The ONE Program Everyone Needs, Even If You Are <span className="text-red-500">Horrible</span> In Coding!
//             </p>
//             <div className="flex flex-wrap justify-center min-[1396px]:justify-start gap-2 text-sm sm:text-base font-medium mt-3">
//               <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full">✨ 6 Months Duration</span>
//               <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full">🔥 LIVE! Starting Monday</span>
//               <span className="bg-red-100 text-red-800 px-2 py-1 rounded-full">⚡ Registration Closes Soon!</span>
//             </div>
//           </div>
          
//           <p className="mt-8 text-base sm:text-lg text-gray-800 dark:text-neutral-400">
//             Join the Coding Mafia Batch, a 6-month intensive program designed to take you from zero to job-ready with LIVE expert-led sessions, <span className="underline">800+ DSA problems, full-stack projects, machine learning, and personalized mentorship</span>. No prior experience needed – just 2 hours a day to transform your career!
//           </p>

//           <div className="mt-7 flex flex-col sm:flex-row justify-center min-[1396px]:justify-start gap-3 w-full">
//             <a
//               href="#courses"
//               className="py-3 px-5 inline-flex justify-center items-center gap-x-2 text-base font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700"
//             >
//               Explore Courses!
//               <svg
//                 className="shrink-0 size-4 sm:size-5"
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="24"
//                 height="24"
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 stroke="currentColor"
//                 strokeWidth="2"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//               >
//                 <path d="m9 18 6-6-6-6" />
//               </svg>
//             </a>
//             <a
//               className="py-3 px-5 inline-flex justify-center items-center gap-x-2 text-base font-semibold rounded-lg border border-gray-800 outline-dashed bg-gray-200 text-gray-800 shadow-sm hover:bg-gray-50"
//               href="#"
//             >
//               <DemoModal/>
//             </a>
//           </div>

//           <div className="mt-6 lg:mt-8">
//             <div className="grid grid-cols-2 gap-4">
//               {reviews.map((review, idx) => (
//                 <div key={idx} className="text-center">
//                   <div className="flex justify-center gap-x-1 mb-2">
//                     {Array.from({ length: 5 }).map((_, index) => (
//                       <svg
//                         key={index}
//                         className="size-4 text-gray-800 dark:text-neutral-200"
//                         width="51"
//                         height="51"
//                         viewBox="0 0 51 51"
//                         fill="none"
//                         xmlns="http://www.w3.org/2000/svg"
//                       >
//                         <path
//                           d="M27.0352 1.6307L33.9181 16.3633C34.2173 16.6768 34.5166 16.9903 34.8158 16.9903L50.0779 19.1845C50.9757 19.1845 51.275 20.4383 50.6764 21.0652L39.604 32.3498C39.3047 32.6632 39.3047 32.9767 39.3047 33.2901L41.998 49.2766C42.2973 50.217 41.1002 50.8439 40.5017 50.5304L26.4367 43.3208C26.1375 43.3208 25.8382 43.3208 25.539 43.3208L11.7732 50.8439C10.8754 51.1573 9.97763 50.5304 10.2769 49.59L12.9702 33.6036C12.9702 33.2901 12.9702 32.9767 12.671 32.6632L1.29923 21.0652C0.700724 20.4383 0.999979 19.4979 1.89775 19.4979L17.1598 17.3037C17.459 17.3037 17.7583 16.9903 18.0575 16.6768L24.9404 1.6307C25.539 0.69032 26.736 0.69032 27.0352 1.6307Z"
//                           fill="currentColor"
//                         />
//                       </svg>
//                     ))}
//                   </div>
//                   <p className="text-sm text-gray-800 dark:text-neutral-200">
//                     <span className="font-bold">{review.rating}</span> /5 - from {review.reviews} reviews
//                   </p>
//                   <div className="mt-2 text-sm text-gray-800 dark:text-white italic">
//                     "{review.text}"
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* Right Column - Image */}
//         <div className="hidden min-[1396px]:block">
//         <img 
//         src="/team/rishabh_sir.jpg" 
//         alt="Coding Mafia Program" 
//         className="w-full max-w-[600px] mx-auto h-auto object-cover  justify-start items-start"
//       />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HeroSection;








import React from "react";
import DemoModal from "@/components/Modal2";

const HeroSection = () => {
  const reviews = [
    { rating: 4.8, reviews: "5k", text: "The structured roadmap and mock interviews truly set it apart." },
    { rating: 4.9, reviews: "8k", text: "Live sessions were incredibly engaging and practical." }
  ];
  const StarRating = ({ rating }) => {
    return (
      <div className="flex justify-center gap-x-1 mb-2">
        {[1, 2, 3, 4, 5].map((star) => {
          const difference = rating - star;
          
          if (difference >= 0) {
            // Full star
            return (
              <svg
                key={star}
                className="size-4 text-yellow-400"
                viewBox="0 0 51 51"
                fill="currentColor"
              >
                <path d="M27.0352 1.6307L33.9181 16.3633C34.2173 16.6768 34.5166 16.9903 34.8158 16.9903L50.0779 19.1845C50.9757 19.1845 51.275 20.4383 50.6764 21.0652L39.604 32.3498C39.3047 32.6632 39.3047 32.9767 39.3047 33.2901L41.998 49.2766C42.2973 50.217 41.1002 50.8439 40.5017 50.5304L26.4367 43.3208C26.1375 43.3208 25.8382 43.3208 25.539 43.3208L11.7732 50.8439C10.8754 51.1573 9.97763 50.5304 10.2769 49.59L12.9702 33.6036C12.9702 33.2901 12.9702 32.9767 12.671 32.6632L1.29923 21.0652C0.700724 20.4383 0.999979 19.4979 1.89775 19.4979L17.1598 17.3037C17.459 17.3037 17.7583 16.9903 18.0575 16.6768L24.9404 1.6307C25.539 0.69032 26.736 0.69032 27.0352 1.6307Z" />
              </svg>
            );
          } else if (difference > -1) {
            // Partial star
            const percentage = (rating % 1) * 100;
            return (
              <svg
                key={star}
                className="size-4 text-yellow-400"
                viewBox="0 0 51 51"
              >
                <defs>
                  <linearGradient id={`star-gradient-${star}`}>
                    <stop offset={`${percentage}%`} stopColor="currentColor" />
                    <stop offset={`${percentage}%`} stopColor="#E5E7EB" />
                  </linearGradient>
                </defs>
                <path
                  d="M27.0352 1.6307L33.9181 16.3633C34.2173 16.6768 34.5166 16.9903 34.8158 16.9903L50.0779 19.1845C50.9757 19.1845 51.275 20.4383 50.6764 21.0652L39.604 32.3498C39.3047 32.6632 39.3047 32.9767 39.3047 33.2901L41.998 49.2766C42.2973 50.217 41.1002 50.8439 40.5017 50.5304L26.4367 43.3208C26.1375 43.3208 25.8382 43.3208 25.539 43.3208L11.7732 50.8439C10.8754 51.1573 9.97763 50.5304 10.2769 49.59L12.9702 33.6036C12.9702 33.2901 12.9702 32.9767 12.671 32.6632L1.29923 21.0652C0.700724 20.4383 0.999979 19.4979 1.89775 19.4979L17.1598 17.3037C17.459 17.3037 17.7583 16.9903 18.0575 16.6768L24.9404 1.6307C25.539 0.69032 26.736 0.69032 27.0352 1.6307Z"
                  fill={`url(#star-gradient-${star})`}
                />
              </svg>
            );
          } else {
            // Empty star
            return (
              <svg
                key={star}
                className="size-4 text-gray-300"
                viewBox="0 0 51 51"
                fill="currentColor"
              >
                <path d="M27.0352 1.6307L33.9181 16.3633C34.2173 16.6768 34.5166 16.9903 34.8158 16.9903L50.0779 19.1845C50.9757 19.1845 51.275 20.4383 50.6764 21.0652L39.604 32.3498C39.3047 32.6632 39.3047 32.9767 39.3047 33.2901L41.998 49.2766C42.2973 50.217 41.1002 50.8439 40.5017 50.5304L26.4367 43.3208C26.1375 43.3208 25.8382 43.3208 25.539 43.3208L11.7732 50.8439C10.8754 51.1573 9.97763 50.5304 10.2769 49.59L12.9702 33.6036C12.9702 33.2901 12.9702 32.9767 12.671 32.6632L1.29923 21.0652C0.700724 20.4383 0.999979 19.4979 1.89775 19.4979L17.1598 17.3037C17.459 17.3037 17.7583 16.9903 18.0575 16.6768L24.9404 1.6307C25.539 0.69032 26.736 0.69032 27.0352 1.6307Z" />
              </svg>
            );
          }
        })}
      </div>
    );
  };

  return (
    <div className="relative">
      {/* Background gradient and pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-100 via-white to-blue-200 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 rounded-lg" />
      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]" 
           style={{ 
             backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")"
           }} />

      {/* Main content */}
      <div className="relative max-w-[85rem] mx-auto px-4 sm:px-6 min-[1396px]:px-8 pt-5">
        <div className="grid grid-cols-1 min-[1396px]:grid-cols-2 items-center gap-8">
          {/* Left Column - Text Content */}
          <div className="text-center min-[1396px]:text-left">
            <h1 className="block text-2xl sm:text-3xl min-[1396px]:text-4xl font-bold text-gray-800 dark:text-white">
              Crack High-Paying Jobs & Internships with{" "}
              <span className="text-blue-600">Coding Mafia</span> (Online)!
            </h1>
            <div className="mt-6 space-y-2">
              <p className="text-lg sm:text-xl font-semibold">
                The ONE Program Everyone Needs, Even If You Are <span className="text-red-500">Horrible</span> In Coding!
              </p>
              <div className="flex flex-wrap justify-center min-[1396px]:justify-start gap-2 text-sm sm:text-base font-medium mt-3">
                <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full shadow-sm">✨ 6 Months Duration</span>
                <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full shadow-sm">🔥 LIVE! Starting Monday</span>
                <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full shadow-sm">💼 Placement support till first job!</span>
                <span className="bg-red-100 text-red-800 px-2 py-1 rounded-full shadow-sm">⚡ Registration Closes Soon!</span>

              </div>
            </div>
            
            <p className="mt-8 text-base sm:text-lg text-gray-800 dark:text-neutral-400">
              Join the Coding Mafia Batch, a 6-month intensive program designed to take you from zero to job-ready with LIVE expert-led sessions, <span className="underline decoration-blue-500 decoration-2"><a href="#courses">800+ DSA problems, full-stack projects, machine learning, and personalized mentorship</a></span>. No prior experience needed – just 2 hours a day to transform your career!
            </p>

            <div className="mt-7 flex flex-col sm:flex-row justify-center min-[1396px]:justify-start gap-3 w-full">
              <a
                href="#courses"
                className="py-3 px-5 inline-flex justify-center items-center gap-x-2 text-base font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 shadow-lg hover:shadow-xl transition-all"
              >
                Explore Courses!
                <svg
                  className="shrink-0 size-4 sm:size-5"
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
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </a>
              <a
                className="py-3 px-5 inline-flex justify-center items-center gap-x-2 text-base font-semibold rounded-lg border-2 border-gray-800 bg-white/80 text-gray-800 shadow-md hover:bg-gray-50 hover:shadow-lg transition-all backdrop-blur-sm"
                href="#"
              >
                <DemoModal/>
              </a>
            </div>

            <div className="mt-8 lg:mt-10">
              <div className="grid grid-cols-2 gap-4 justify-items-center min-[1396px]:justify-items-start">
                {reviews.map((review, idx) => (
                  <div key={idx} className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-4 rounded-lg shadow-md w-full max-w-sm">
                    <div className="flex flex-col items-center min-[1396px]:items-start">
                      <StarRating rating={review.rating} />
                      <p className="text-sm text-gray-800 dark:text-neutral-200 text-center min-[1396px]:text-left">
                        <span className="font-bold">{review.rating}</span> /5 - from {review.reviews} reviews
                      </p>
                      <div className="mt-2 text-sm text-gray-800 dark:text-white italic text-center min-[1396px]:text-left">
                        "{review.text}"
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="hidden min-[1396px]:block">
            <div className="relative">
              <div className="absolute inset-0 bg-blue-500/10 rounded-2xl -rotate-6 transform" />
              <img 
                src="/team/rishabh_sir_pic.jpg" 
                alt="Coding Mafia Program" 
                className="relative w-full max-w-[600px] mx-auto h-auto object-cover rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;