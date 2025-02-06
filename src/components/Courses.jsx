// import React from 'react'

// const Courses = () => {
//   const timelineItems = [
//     {
//       icon: <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/></svg>,
//       color: "blue",
//       heading: "Module 1: C++ Basics",
//       badge: "Active",
//       duration: "2 weeks",
//       description: "Starting from scratch with C++ fundamentals and practice on Hackerrank"
//     },
//     {
//       icon: <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"/></svg>,
//       color: "indigo",
//       heading: "Module 2: Data Structures and Algorithms",
//       duration: "6 weeks",
//       description: "Practice on Codechef, Leetcode, Interviewbit with fundamental DSA concepts"
//     },
//     {
//       icon: <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"/></svg>,
//       color: "green",
//       heading: "CHECKPOINT 1: DSA Foundation",
//       badge: "Milestone",
//       duration: "Assessment",
//       description: "Complete 300+ DSA problems and pass assessment"
//     },
//     {
//       icon: <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/></svg>,
//       color: "blue",
//       heading: "Module 3: Advanced DSA",
//       duration: "8 weeks",
//       description: "Advanced concepts and practice on Leetcode, SPOJ, CSES Platforms"
//     },
//     {
//       icon: <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"/></svg>,
//       color: "blue",
//       heading: "Module 4: Python Basics",
//       duration: "4 weeks",
//       description: "Python fundamentals and practice on Hackerrank with mini-projects"
//     },
//     {
//       icon: <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"/></svg>,
//       color: "green",
//       heading: "CHECKPOINT 2: Project Milestone",
//       badge: "Milestone",
//       duration: "Assessment",
//       description: "Complete all mini-projects and present portfolio"
//     },
//     {
//       icon: <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"/></svg>,
//       color: "blue",
//       heading: "Module 5: Machine Learning",
//       duration: "6 weeks",
//       description: "ML fundamentals with mini and major projects"
//     },
//     {
//       icon: <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/></svg>,
//       color: "blue",
//       heading: "Module 6: Java Core + Advanced",
//       duration: "6 weeks",
//       description: "Core Java, Advanced Java and Full Stack Development"
//     },
//     {
//       icon: <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"/></svg>,
//       color: "green",
//       heading: "CHECKPOINT 3: Full Stack Project",
//       badge: "Milestone",
//       duration: "Assessment",
//       description: "Complete Twitter Clone project"
//     },
//     {
//       icon: <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/></svg>,
//       color: "blue",
//       heading: "Module 7: Full Stack Development",
//       duration: "8 weeks",
//       description: "HTML, CSS, Javascript, Spring MVC and major project"
//     },
//     {
//       icon: <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z"/></svg>,
//       color: "blue",
//       heading: "Module 8: Aptitude + Communication",
//       duration: "4 weeks",
//       description: "Preparation for aptitude rounds and personal development"
//     },
//     {
//       icon: <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"/></svg>,
//       color: "blue",
//       heading: "Module 9: CS Fundamentals",
//       duration: "4 weeks",
//       description: "Core concepts for theory and MCQ rounds"
//     },
//     {
//       icon: <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>,
//       color: "green",
//       heading: "FINAL MILESTONE: Dream Placement",
//       badge: "Final Goal",
//       duration: "Placement Period",
//       description: "Get placed in your dream company with a high-paying package!"
//     }
//   ];

//   return (
//     <div className="px-8 sm:px-16 py-12">
//       <h2 className="mb-16 text-center font-bold text-gray-900 py-8 text-4xl sm:text-2xl md:text-3xl lg:text-5xl">
//         We'll help you at every step to <br />
//         <span className="text-green-500 underline">Guarantee Success!</span>
//       </h2>

//       <ol className="relative border-s-4 border-gray-200 dark:border-gray-700">                  
//         {timelineItems.map((item, index) => (
//           <li key={index} className="mb-16 ms-10">            
//             <span className={`absolute flex items-center justify-center w-10 h-10 bg-${item.color}-100 rounded-full -start-5 ring-8 ring-white dark:ring-gray-900 dark:bg-${item.color}-900`}>
//               {item.icon}
//             </span>
//             <h3 className="flex items-center mb-3 text-2xl font-semibold text-gray-900 dark:text-white">
//               {item.heading}
//               {item.badge && (
//                 <span className={`bg-${item.color}-100 text-${item.color}-800 text-lg font-medium me-3 px-4 py-1.5 rounded-sm dark:bg-${item.color}-900 dark:text-${item.color}-300 ms-4`}>
//                   {item.badge}
//                 </span>
//               )}
//             </h3>
//             <time className="block mb-4 text-lg font-normal leading-none text-gray-400 dark:text-gray-500">
//               {item.duration}
//             </time>
//             <p className="text-xl font-normal text-gray-500 dark:text-gray-400">
//               {item.description}
//             </p>
//             <a href="#" class=" mt-5 inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-100 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700"><svg class="w-3.5 h-3.5 me-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
//               <path d="M14.707 7.793a1 1 0 0 0-1.414 0L11 10.086V1.5a1 1 0 0 0-2 0v8.586L6.707 7.793a1 1 0 1 0-1.414 1.414l4 4a1 1 0 0 0 1.416 0l4-4a1 1 0 0 0-.002-1.414Z"/>
//               <path d="M18 12h-2.55l-2.975 2.975a3.5 3.5 0 0 1-4.95 0L4.55 12H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2Zm-3 5a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"/>
//             </svg> Download ZIP</a>
//           </li>
//         ))}
//       </ol>
//     </div>
//   )
// }

// export default Courses;




import React, { useState } from 'react';
import { X } from 'lucide-react';

const Modal = ({ isOpen, onClose, item }) => {
  if (!isOpen) return null;
  
  const steps = {
    "Module 1: C++ Basics": [
      { "title": "Hello World", "desc": "Introduction to C++ and writing your first program" },
      { "title": "Data Types", "desc": "Understanding different data types in C++" },
      { "title": "Variables", "desc": "Declaring and using variables in C++" },
      { "title": "Variable Scope", "desc": "Local and global variable scope in C++" },
      { "title": "Operators", "desc": "Arithmetic, logical, and relational operators" },
      { "title": "Loop Types", "desc": "Master loops: for, while, do-while" },
      { "title": "Functions", "desc": "Creating reusable code blocks" },
      { "title": "Arrays", "desc": "Understanding and using arrays" },
      { "title": "Strings", "desc": "Working with string manipulation" },
      { "title": "Searching and Sorting", "desc": "Implementing basic sorting and searching algorithms" },
      { "title": "Recursion", "desc": "Understanding recursive functions" }
    ],
    
    "Module 2: Data Structures and Algorithms": [
      { "title": "Time & Space Complexity", "desc": "Analyzing efficiency of algorithms" },
      { "title": "Array", "desc": "Operations and problem-solving using arrays" },
      { "title": "Adhoc Problems", "desc": "Problem-solving with special cases" },
      { "title": "Game Theory", "desc": "Mathematical models of strategic interactions" },
      { "title": "Number Theory", "desc": "Working with prime numbers and divisibility" },
      { "title": "Linked List", "desc": "Singly and doubly linked lists" },
      { "title": "Stacks", "desc": "Implementing stack operations" },
      { "title": "Queues", "desc": "Implementing queue operations" },
      { "title": "Strings", "desc": "Advanced string problems and pattern matching" },
      { "title": "Hashing", "desc": "Understanding hash tables and hash functions" },
      { "title": "Heaps & Priority Queues", "desc": "Min-heaps and max-heaps" },
      { "title": "Bit Manipulation", "desc": "Optimized solutions using bitwise operators" },
      { "title": "Greedy Algorithms", "desc": "Greedy approach to problem-solving" },
      { "title": "Binary Trees", "desc": "Tree traversal and operations" },
      { "title": "Binary Search Trees", "desc": "BST operations and properties" }
    ],
  
    "Module 3: Advanced Data Structures and Algorithms": [
      { "title": "Tries", "desc": "Efficient string storage and search" },
      { "title": "Graphs", "desc": "Graph representation and algorithms" },
      { "title": "BFS & DFS", "desc": "Graph traversal techniques" },
      { "title": "Recursion", "desc": "Advanced recursion techniques" },
      { "title": "Backtracking", "desc": "Solving problems with backtracking" },
      { "title": "Divide & Conquer", "desc": "Applying D&C techniques" },
      { "title": "Dynamic Programming", "desc": "Memoization and bottom-up approaches" },
      { "title": "Segment Trees", "desc": "Efficient range queries using segment trees" }
    ],
  
    "Module 4: Python Basics": [
      { "title": "Introduction to Python", "desc": "Setting up Python and basic syntax" },
      { "title": "Variables & Data Types", "desc": "Understanding Python objects" },
      { "title": "Operators", "desc": "Arithmetic, comparison, and assignment operators" },
      { "title": "Control Flow", "desc": "If-else statements and loops" },
      { "title": "Functions", "desc": "Creating and using functions" },
      { "title": "Python Data Structures", "desc": "Lists, tuples, dictionaries, and sets" },
      { "title": "Object-Oriented Programming", "desc": "OOP principles in Python" },
      { "title": "File Handling", "desc": "Reading and writing files" },
      { "title": "Mini Project: Automate Tinder", "desc": "Automate actions using Python" }
    ],
  
    "Module 5: Machine Learning": [
      { "title": "Supervised Learning", "desc": "Understanding regression techniques" },
      { "title": "Gradient Descent", "desc": "Optimization in machine learning" },
      { "title": "Logistic Regression", "desc": "Binary classification techniques" },
      { "title": "K-Nearest Neighbors", "desc": "Classification using KNN" },
      { "title": "Major Project: Handwritten Digit Recognition", "desc": "Building an ML model" },
      { "title": "OpenCV", "desc": "Computer vision applications" },
      { "title": "K-Means Clustering", "desc": "Unsupervised learning" },
      { "title": "NLP & Language Models", "desc": "Processing text data" }
    ],
  
    "Module 6: Java (Core + Advanced)": [
      { "title": "Introduction to Java", "desc": "Setting up Java environment" },
      { "title": "Operators & Loops", "desc": "Understanding loops and conditions" },
      { "title": "Data Structures", "desc": "Lists, arrays, and linked lists" },
      { "title": "OOP & Exception Handling", "desc": "Working with classes and objects" },
      { "title": "Database & SQL", "desc": "Connecting Java with databases" },
      { "title": "Mini Project: Word Frequency Analyzer", "desc": "Analyzing text data" }
    ],
  
    "Module 7: Full Stack Development": [
      { "title": "Frontend Basics", "desc": "HTML, CSS, and JavaScript fundamentals" },
      { "title": "Backend with Spring MVC", "desc": "Building REST APIs" },
      { "title": "Twitter Clone Project", "desc": "Building a social media platform" },
      { "title": "Caching with Redis", "desc": "Optimizing performance" }
    ],
  
    "Module 8: Aptitude + Communication": [
      { "title": "Number Puzzles", "desc": "Solving numerical puzzles efficiently" },
      { "title": "Geometry & Probability", "desc": "Logical and mathematical problem solving" },
      { "title": "Blood Relation & Coding Decoding", "desc": "Solving logical reasoning problems" },
      { "title": "Time, Speed, and Distance", "desc": "Mastering quantitative skills" },
      { "title": "Permutation & Combination", "desc": "Understanding combinatorics" }
    ],
  
    "Module 9: Computer Science Fundamentals": [
      { "title": "Object-Oriented Programming", "desc": "Classes, objects, and polymorphism" },
      { "title": "Operating System", "desc": "Process scheduling and memory management" },
      { "title": "Database Management", "desc": "SQL and normalization techniques" },
      { "title": "Computer Networks", "desc": "Understanding TCP/IP, HTTP, and routing" }
    ]
  }
  

  const currentSteps = steps[item.heading] || [
    { title: 'Step 1', desc: 'Coming soon' },
    { title: 'Step 2', desc: 'Coming soon' },
    { title: 'Step 3', desc: 'Coming soon' }
  ];
  
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-8 max-w-2xl w-full max-h-[80vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-xl font-semibold">{item.heading}</h3>
          <button onClick={onClose} className="p-1 hover:bg-gray-100 rounded-full">
            <X className="w-6 h-6" />
          </button>
        </div>
        
        <div className="space-y-6">
          <ol className="relative border-l border-gray-200">
            {currentSteps.map((step, index) => (
              <li key={index} className="mb-10 ml-6">
                <span className="absolute flex items-center justify-center w-8 h-8 bg-blue-100 rounded-full -left-4 ring-4 ring-white">
                  {index + 1}
                </span>
                <h3 className="mb-1 text-lg font-semibold">{step.title}</h3>
                <p className="text-base font-normal text-gray-500">{step.desc}</p>
              </li>
            ))}
          </ol>
          
          <button className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 font-semibold">
            Buy Course for Rs.3500 per month only!
          </button>
        </div>
      </div>
    </div>
  );
};

const Courses = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  
  const timelineItems = [
    {
      icon: <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/></svg>,
      color: "blue",
      heading: "Module 1: C++ Basics",
      badge: "Active",
      duration: "2 weeks",
      description: "Starting from scratch with C++ fundamentals and practice on Hackerrank"
    },
    {
      icon: <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"/></svg>,
      color: "indigo",
      heading: "Module 2: Data Structures and Algorithms",
      duration: "6 weeks",
      description: "Practice on Codechef, Leetcode, Interviewbit with fundamental DSA concepts"
    },
    {
      icon: <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"/></svg>,
      color: "green",
      heading: "CHECKPOINT 1: DSA Foundation",
      badge: "Milestone",
      duration: "Assessment",
      description: "Complete 300+ DSA problems and pass assessment"
    },
    {
      icon: <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/></svg>,
      color: "blue",
      heading: "Module 3: Advanced DSA",
      duration: "8 weeks",
      description: "Advanced concepts and practice on Leetcode, SPOJ, CSES Platforms"
    },
    {
      icon: <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"/></svg>,
      color: "blue",
      heading: "Module 4: Python Basics",
      duration: "4 weeks",
      description: "Python fundamentals and practice on Hackerrank with mini-projects"
    },
    {
      icon: <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"/></svg>,
      color: "green",
      heading: "CHECKPOINT 2: Project Milestone",
      badge: "Milestone",
      duration: "Assessment",
      description: "Complete all mini-projects and present portfolio"
    },
    {
      icon: <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"/></svg>,
      color: "blue",
      heading: "Module 5: Machine Learning",
      duration: "6 weeks",
      description: "ML fundamentals with mini and major projects"
    },
    {
      icon: <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/></svg>,
      color: "blue",
      heading: "Module 6: Java Core + Advanced",
      duration: "6 weeks",
      description: "Core Java, Advanced Java and Full Stack Development"
    },
    {
      icon: <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"/></svg>,
      color: "green",
      heading: "CHECKPOINT 3: Full Stack Project",
      badge: "Milestone",
      duration: "Assessment",
      description: "Complete Twitter Clone project"
    },
    {
      icon: <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/></svg>,
      color: "blue",
      heading: "Module 7: Full Stack Development",
      duration: "8 weeks",
      description: "HTML, CSS, Javascript, Spring MVC and major project"
    },
    {
      icon: <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z"/></svg>,
      color: "blue",
      heading: "Module 8: Aptitude + Communication",
      duration: "4 weeks",
      description: "Preparation for aptitude rounds and personal development"
    },
    {
      icon: <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"/></svg>,
      color: "blue",
      heading: "Module 9: Computer Science Fundamentals",
      duration: "4 weeks",
      description: "Core concepts for theory and MCQ rounds"
    },
    {
      icon: <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>,
      color: "green",
      heading: "FINAL MILESTONE: Dream Placement",
      badge: "Final Goal",
      duration: "Placement Period",
      description: "Get placed in your dream company with a high-paying package!"
    }
  ];

  return (
    <div className="px-8 sm:px-16 py-12">
      <h2 className="mb-16 text-center font-bold text-gray-900 py-8 text-4xl sm:text-2xl md:text-3xl lg:text-5xl">
        We'll help you at every step to <br />
        <span className="text-green-500 underline">Guarantee Success!</span>
      </h2>

      <ol className="relative border-s-4 border-gray-200">                  
        {timelineItems.map((item, index) => (
          <li key={index} className="mb-16 ms-10">            
            <span className={`absolute flex items-center justify-center w-10 h-10 bg-${item.color}-100 rounded-full -start-5 ring-8 ring-white`}>
              {item.icon}
            </span>
            <h3 className="flex items-center mb-3 text-2xl font-semibold text-gray-900">
              {item.heading}
              {item.badge && (
                <span className={`bg-${item.color}-100 text-${item.color}-800 text-lg font-medium me-3 px-4 py-1.5 rounded-sm ms-4`}>
                  {item.badge}
                </span>
              )}
            </h3>
            <time className="block mb-4 text-lg font-normal leading-none text-gray-400">
              {item.duration}
            </time>
            <p className="text-xl font-normal text-gray-500">
              {item.description}
            </p>
            <button
              onClick={() => setSelectedItem(item)}
              className="mt-5 inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:ring-4 focus:outline-none focus:ring-gray-100"
            >
              <svg className="w-3.5 h-3.5 me-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="M14.707 7.793a1 1 0 0 0-1.414 0L11 10.086V1.5a1 1 0 0 0-2 0v8.586L6.707 7.793a1 1 0 1 0-1.414 1.414l4 4a1 1 0 0 0 1.416 0l4-4a1 1 0 0 0-.002-1.414Z"/>
                <path d="M18 12h-2.55l-2.975 2.975a3.5 3.5 0 0 1-4.95 0L4.55 12H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2Zm-3 5a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"/>
              </svg>
              View Details
            </button>
          </li>
        ))}
      </ol>
      
      {selectedItem && (
        <Modal 
          isOpen={!!selectedItem} 
          onClose={() => setSelectedItem(null)} 
          item={selectedItem}
        />
      )}
    </div>
  );
};

export default Courses;