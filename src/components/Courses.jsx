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

    "Module 3: Advanced DSA": [
      { "title": "Tries", "desc": "Efficient string storage and search" },
      { "title": "Graphs", "desc": "Graph representation and algorithms" },
      { "title": "BFS & DFS", "desc": "Graph traversal techniques" },
      { "title": "Recursion", "desc": "Advanced recursion techniques" },
      { "title": "Backtracking", "desc": "Solving problems with backtracking" },
      { "title": "Divide & Conquer", "desc": "Applying D&C techniques" },
      { "title": "Dynamic Programming", "desc": "Memoization and bottom-up approaches" },
      { "title": "Segment Trees", "desc": "Efficient range queries using segment trees" }
    ],

    "CHECKPOINT 1: DSA & Online Assessments": [
      { "title": "Checkpoint: 150+ Basic Problems", "desc": "Solve at least 150 problems covering basic DSA concepts" },
      { "title": "Checkpoint: 300+ Intermediate Problems", "desc": "Solve at least 300 problems on platforms like LeetCode, Codeforces, or CodeChef" },
      { "title": "Checkpoint: 800+ Advanced Problems", "desc": "Master problem-solving with 800+ problems across different topics" }
    ],    
  
    "Module 4: Python Basics": [
      { "title": "Introduction to Python", "desc": "Setting up Python and basic syntax" },
      { "title": "Variables & Data Types", "desc": "Understanding Python objects, numbers, booleans, and containers" },
      { "title": "Operators", "desc": "Arithmetic, bitwise, comparison, and assignment operators" },
      { "title": "Control Flow", "desc": "If-else statements, if-elif-else, loops (for, while), break and continue statements" },
      { "title": "Functions", "desc": "Creating and using functions" },
      { "title": "Practicing Problems", "desc": "Solving Python problems on Hackerrank" },
      { "title": "Mini Project: Send Email using Python", "desc": "Sending automated emails using Python" },
      { "title": "Python Data Structures", "desc": "Lists, tuples, strings, dictionaries, sets, view objects, and their methods" },
      { "title": "List Comprehension", "desc": "Creating and working with list comprehensions" },
      { "title": "Tuples and Immutability", "desc": "Understanding tuples and their properties" },
      { "title": "String Manipulation", "desc": "String methods, splitting, joining, and format function" },
      { "title": "Object-Oriented Programming", "desc": "OOP principles in Python" },
      { "title": "File Handling", "desc": "Reading and writing files" },
      { "title": "Practicing Problems", "desc": "Becoming a 4-star coder on Hackerrank" },
      { "title": "Mini Project: Automate Tinder", "desc": "Automate actions using Python" },
      { "title": "Version Control System: Git", "desc": "Using Git for version control" },
      { "title": "Python Libraries in Depth", "desc": "Exploring popular libraries: Numpy, Pandas, Matplotlib" },
      { "title": "Solving Assignments", "desc": "Hands-on coding challenges" },
      { "title": "Mini Project: Web Crawler", "desc": "Scraping web data using BeautifulSoup" }
    ],    
  
    "Module 5: Machine Learning": [
      { "title": "Getting Started with Machine Learning", "desc": "Introduction to ML concepts and applications" },
      { "title": "Supervised Learning", "desc": "Understanding regression techniques" },
      { "title": "Mini Project: Air Quality Prediction", "desc": "Applying regression for air quality forecasting" },
      { "title": "Gradient Descent", "desc": "Optimization in machine learning" },
      { "title": "Logistic Regression", "desc": "Binary classification techniques" },
      { "title": "Mini Project: Diabetes Classification", "desc": "Predicting diabetes using logistic regression" },
      { "title": "Unsupervised Learning", "desc": "Clustering and pattern discovery" },
      { "title": "K-Nearest Neighbors", "desc": "Classification using KNN" },
      { "title": "Major Project: Handwritten Digit Recognition", "desc": "Building an ML model using KNN and deep learning" },
      { "title": "OpenCV", "desc": "Computer vision applications and image processing" },
      { "title": "Mini Project: Face Recognition", "desc": "Building a face recognition system using OpenCV" },
      { "title": "Mini Project: Build Snapchat Filter using OpenCV", "desc": "Applying filters on faces using OpenCV" },
      { "title": "K-Means Clustering", "desc": "Unsupervised learning for clustering" },
      { "title": "Mini Project: Dominant Color Extraction", "desc": "Using K-Means clustering for color analysis" },
      { "title": "Language Models", "desc": "Understanding language models in machine learning" },
      { "title": "Natural Language Processing (NLP)", "desc": "Processing text data for sentiment analysis and chatbots" },
      { "title": "Major Project: Amazon Recommendation System", "desc": "Building a recommendation engine using NLP and ML" },
      { "title": "Word Embeddings & Neural Networks", "desc": "Understanding deep learning in NLP applications" }
    ],   
    
    "CHECKPOINT 2: Project Milestone": [
      { "title": "Mini Project: Send Email using Python", "desc": "Sending automated emails using Python" },
      { "title": "Mini Project: Automate Tinder", "desc": "Automate actions using Python" },
      { "title": "Mini Project: Web Crawler", "desc": "Scraping web data using BeautifulSoup" },
      { "title": "Mini Project: Air Quality Prediction", "desc": "Applying regression for air quality forecasting" },
      { "title": "Mini Project: Diabetes Classification", "desc": "Predicting diabetes using logistic regression" },
      { "title": "Mini Project: Face Recognition", "desc": "Building a face recognition system using OpenCV" },
      { "title": "Mini Project: Build Snapchat Filter using OpenCV", "desc": "Applying filters on faces using OpenCV" },
      { "title": "Mini Project: Dominant Color Extraction", "desc": "Using K-Means clustering for color analysis" },
      { "title": "Major Project: Handwritten Digit Recognition", "desc": "Building an ML model using KNN and deep learning" },
      { "title": "Major Project: Amazon Recommendation System", "desc": "Building a recommendation engine using NLP and ML" }
    ],    
  
    "Module 6: Java Core + Advanced": [
      { "title": "Installations", "desc": "Setting up Java development environment" },
      { "title": "Introduction to Java - Variables & Arrays", "desc": "Understanding variables, arrays, and basic syntax" },
      { "title": "Practicing on Hackerrank", "desc": "Solving Java problems for hands-on learning" },
      { "title": "Operators, Control Statements, Loops", "desc": "Exploring operators, control flow, and loops in Java" },
      { "title": "Practicing on Hackerrank", "desc": "Applying control flow concepts through coding problems" },
      { "title": "Maths, Strings & Date", "desc": "Working with Java Math, Strings, and Date libraries" },
      { "title": "Practicing on Hackerrank", "desc": "Enhancing skills with string and date manipulation problems" },
      { "title": "Starting With Data Structures", "desc": "Introduction to data structures in Java" },
      { "title": "Data Structures - I", "desc": "Understanding lists, stacks, and queues" },
      { "title": "Practicing on Hackerrank", "desc": "Solving problems related to basic data structures" },
      { "title": "Data Structures - II", "desc": "Working with trees, graphs, and hashmaps" },
      { "title": "Practicing on Hackerrank", "desc": "Applying advanced data structures to real-world problems" },
      { "title": "OOPs and Exception Handling - I", "desc": "Understanding Object-Oriented Programming (OOP) concepts" },
      { "title": "OOPs and Exception Handling - II", "desc": "Advanced OOP principles and handling exceptions in Java" },
      { "title": "Practicing on Hackerrank", "desc": "Improving OOP skills through coding exercises" },
      { "title": "Starting With First Project", "desc": "Setting up a project and understanding IDE features" },
      { "title": "Creating Project - Knowing about IDE", "desc": "Working with Java IDEs like IntelliJ, Eclipse, and NetBeans" },
      { "title": "File, Thread & Networking", "desc": "Understanding file handling, multithreading, and networking in Java" },
      { "title": "Mini Project: Word Top Frequency Analyser", "desc": "Building a program to analyze word frequency from text" },
      { "title": "Dependencies using Gson & Json", "desc": "Handling JSON data using Gson and parsing structured data" },
      { "title": "Parsing HTML", "desc": "Extracting data from web pages using Java" },
      { "title": "Learning about Jsoup", "desc": "Using Jsoup for web scraping and HTML parsing" },
      { "title": "Daily Practice Exercise", "desc": "Regular coding exercises to reinforce Java concepts" },
      { "title": "Starting With Advanced Java", "desc": "Moving beyond core Java into advanced features" },
      { "title": "Database: Setting up Database", "desc": "Installing and configuring databases for Java applications" },
      { "title": "Database: Using JOOQ - Connecting Database", "desc": "Using JOOQ for database queries and ORM" },
      { "title": "Running Queries", "desc": "Executing SQL queries through Java" },
      { "title": "Mini Project: Multithreaded Crawling using Advanced Java", "desc": "Building a multi-threaded web crawler" },
      { "title": "Major Project: Fastest Bollywood Movies Data Collector", "desc": "Developing a system to collect and analyze Bollywood movie data" },
      { "title": "REST APIs", "desc": "Understanding and implementing RESTful APIs in Java" },
      { "title": "Major Project: Wikipedia Fetcher API", "desc": "Creating an API to fetch and serve Wikipedia data" }
    ],
  
    "Module 7: Full Stack Development": [
      { "title": "Starting With Frontend", "desc": "Introduction to frontend and full stack development" },
      { "title": "Learning Frontend & Backend", "desc": "Understanding the interaction between frontend and backend" },
      { "title": "Learning Basics of HTML", "desc": "Structuring web pages using HTML" },
      { "title": "Learning Basics of CSS", "desc": "Styling web pages with CSS" },
      { "title": "Learning Basics of JavaScript + jQuery", "desc": "Making web pages dynamic with JavaScript and jQuery" },
      { "title": "Starting With Backend", "desc": "Introduction to backend development" },
      { "title": "Backend Using Spring MVC - Getting Started", "desc": "Setting up backend with Spring MVC" },
      { "title": "Explaining Configurations", "desc": "Understanding essential Spring configurations" },
      { "title": "Building First REST API", "desc": "Creating RESTful APIs with Spring MVC" },
      { "title": "Running First REST API", "desc": "Executing and testing REST APIs" },
      { "title": "Starting With Twitter Project", "desc": "Developing a Twitter clone from scratch" },
      { "title": "Major Project: Twitter Clone", "desc": "Full-stack implementation of Twitter functionalities" },
      { "title": "Building Twitter - Sign Up Page", "desc": "Implementing user registration" },
      { "title": "Building Twitter - Login Page", "desc": "Creating user authentication and login flow" },
      { "title": "Building Twitter - Profile Page", "desc": "Developing a user profile system" },
      { "title": "Building Twitter - Create First Tweet", "desc": "Implementing tweet creation functionality" },
      { "title": "Adding More Features", "desc": "Enhancing the Twitter clone with additional features" },
      { "title": "Building Twitter - Home Feed", "desc": "Creating a real-time home feed" },
      { "title": "Building Twitter - Adding Followers", "desc": "Implementing the follower system" },
      { "title": "Building Twitter - Using CDN & Redis", "desc": "Optimizing performance using Content Delivery Networks and Redis caching" }
    ],  
    
    "CHECKPOINT 3: Full Stack Project": [
      { "title": "Mini Project: Word Top Frequency Analyser", "desc": "Building a program to analyze word frequency from text" },
      { "title": "Mini Project: Multithreaded Crawling using Advanced Java", "desc": "Building a multi-threaded web crawler" },
      { "title": "Major Project: Fastest Bollywood Movies Data Collector", "desc": "Developing a system to collect and analyze Bollywood movie data" },
      { "title": "Major Project: Wikipedia Fetcher API", "desc": "Creating an API to fetch and serve Wikipedia data" },
      { "title": "Major Project: Twitter Clone", "desc": "Full-stack implementation of Twitter functionalities" },
    ],
  
    "Module 8: Aptitude + Communication": [
      { "title": "Number Analogy", "desc": "Identifying patterns in number-based analogies" },
      { "title": "Missing Puzzles", "desc": "Finding missing values in sequences and grids" },
      { "title": "Geometry", "desc": "Solving geometry-based problems" },
      { "title": "Probability", "desc": "Understanding probability concepts and applications" },
      { "title": "Permutation & Combination", "desc": "Solving combinatorial problems" },
      { "title": "Blood Relation", "desc": "Solving family tree and relationship problems" },
      { "title": "Time and Work", "desc": "Calculating efficiency and work done over time" },
      { "title": "Time, Speed, and Distance", "desc": "Mastering motion-related calculations" },
      { "title": "Percentage, Profit, and Loss", "desc": "Solving financial and percentage-based problems" },
      { "title": "Average, Allegation, and Mixtures", "desc": "Solving weighted average and mixture problems" },
      { "title": "Ratio, Proportion, and Partnership", "desc": "Understanding ratios and profit-sharing concepts" },
      { "title": "Problems on Ages", "desc": "Solving age-related mathematical problems" },
      { "title": "Simple Equations", "desc": "Solving algebraic expressions" },
      { "title": "Number Series", "desc": "Recognizing patterns in number sequences" },
      { "title": "Logarithms", "desc": "Understanding logarithmic functions and properties" },
      { "title": "Functions", "desc": "Solving function-based mathematical problems" },
      { "title": "Clocks and Calendars", "desc": "Understanding time and date-based problems" },
      { "title": "Crypt Arithmetic", "desc": "Solving alphanumeric mathematical puzzles" },
      { "title": "Coding and Decoding", "desc": "Interpreting coded messages and patterns" },
      { "title": "Number Puzzles", "desc": "Solving numerical and logical puzzles" }
    ],
    
    "Module 9: Computer Science Fundamentals": [
      { "title": "Object-Oriented Programming", "desc": "Understanding OOP principles and best practices" },
      { "title": "Classes and Objects", "desc": "Defining and working with classes and objects in OOP" },
      { "title": "Polymorphism, Overriding, Overloading", "desc": "Exploring different types of polymorphism in OOP" },
      { "title": "Encapsulation", "desc": "Ensuring data security and abstraction" },
      { "title": "Abstraction", "desc": "Hiding implementation details and exposing essential functionality" },
      { "title": "Access Modifiers", "desc": "Controlling access levels for class members" },
      { "title": "Inheritance", "desc": "Understanding parent-child class relationships" },
      { "title": "Friend and Virtual Functions in C++", "desc": "Advanced OOP concepts in C++" },
      { "title": "STL (Standard Template Library) in Depth", "desc": "Exploring C++ STL for efficient programming" },
      { "title": "Practicing Problems on Hackerrank", "desc": "Solving coding problems to reinforce learning" },
    
      { "title": "Operating System", "desc": "Fundamentals of OS and system management" },
      { "title": "Operating System and its Types", "desc": "Understanding various types of operating systems" },
      { "title": "Multiprogramming, Multiprocessing, and Multithreading", "desc": "Understanding parallel processing and concurrency" },
      { "title": "Process Management and Scheduling", "desc": "Handling CPU scheduling and process control" },
      { "title": "Process Synchronization", "desc": "Understanding synchronization and inter-process communication" },
      { "title": "Deadlock", "desc": "Preventing and managing deadlocks" },
      { "title": "Memory Management and Virtual Memory", "desc": "Managing RAM, paging, and memory allocation" },
      { "title": "File Systems", "desc": "Understanding file organization and storage management" },
      { "title": "I/O Systems", "desc": "Handling input/output operations and buffers" },
      { "title": "Protection and Security", "desc": "Ensuring system security and access control" },
    
      { "title": "Database Management System", "desc": "Introduction to databases and management systems" },
      { "title": "Introduction to DBMS", "desc": "Understanding database fundamentals" },
      { "title": "Architectures", "desc": "Exploring different DBMS architectures" },
      { "title": "ER Model", "desc": "Entity-Relationship modeling for databases" },
      { "title": "Relational Model", "desc": "Understanding tables and relations" },
      { "title": "Keys in Relational Model", "desc": "Understanding primary, foreign, and composite keys" },
      { "title": "Database Normalization and Normal Forms", "desc": "Ensuring efficient database design" },
      { "title": "Concurrency Control", "desc": "Managing multiple database transactions" },
      { "title": "Indexing in Database", "desc": "Optimizing search and retrieval performance" },
      { "title": "B and B+ Trees", "desc": "Indexing using balanced tree structures" },
      { "title": "ACID and BASE Properties", "desc": "Ensuring data consistency and availability" },
      { "title": "SQL Queries in Depth: Hands-On", "desc": "Practicing SQL queries for real-world applications" },
    
      { "title": "Computer Networks", "desc": "Understanding network principles and protocols" },
      { "title": "Introduction to Computer Networks", "desc": "Basics of networking and its importance" },
      { "title": "TCP/IP vs OSI Model", "desc": "Comparing networking models and protocols" },
      { "title": "Circuit Switching vs Packet Switching", "desc": "Understanding network communication techniques" },
      { "title": "Flow Control Protocols", "desc": "Managing data transmission speed and efficiency" },
      { "title": "IP and Classful Addressing", "desc": "Understanding IPv4 addressing schemes" },
      { "title": "Classless Addressing", "desc": "Exploring CIDR and subnetting" },
      { "title": "Routing Protocols", "desc": "Understanding routing techniques and algorithms" },
      { "title": "ARP & DHCP", "desc": "Managing IP addresses dynamically" },
      { "title": "Transport Layer", "desc": "Understanding how data is transmitted between systems" },
      { "title": "TCP & UDP", "desc": "Exploring reliable and connectionless transport protocols" },
      { "title": "Application Layer", "desc": "Understanding application-layer protocols" },
      { "title": "HTTP & GRPC Protocol", "desc": "Exploring web communication and remote procedure calls" }
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
      description: "We will keep learning and practicing problems till end of the course to reach target of 800+ problems practice on top platforms like Codechef, Leetcode, InterviewBit, Spoj Continued in Module 3."
    },
   
    {
      icon: <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/></svg>,
      color: "blue",
      heading: "Module 3: Advanced DSA",
      duration: "8 weeks",
      description: "Advanced concepts and practice on Leetcode, SPOJ, CSES Platforms"
    },
    {
      icon: <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"/></svg>,
      color: "green",
      heading: "CHECKPOINT 1: DSA & Online Assessments",
      badge: "Milestone",
      duration: "Assessment",
      description: "After completing 800+ problems practice on top platforms like Codechef, Leetcode, InterviewBit, and Spoj, you'll be able to crack any online assessment 🔥"
    },
    {
      icon: <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"/></svg>,
      color: "blue",
      heading: "Module 4: Python Basics",
      duration: "4 weeks",
      description: "Python fundamentals and practice on Hackerrank with mini-projects"
    },
    
    {
      icon: <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"/></svg>,
      color: "blue",
      heading: "Module 5: Machine Learning",
      duration: "6 weeks",
      description: "ML fundamentals with mini and major projects"
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
      icon: <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/></svg>,
      color: "blue",
      heading: "Module 6: Java Core + Advanced",
      duration: "6 weeks",
      description: "Core Java, Advanced Java and Full Stack Development"
    },
    
    {
      icon: <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/></svg>,
      color: "blue",
      heading: "Module 7: Full Stack Development",
      duration: "8 weeks",
      description: "HTML, CSS, Javascript, Spring MVC and major project"
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
    <div className="px-8 sm:px-16 mt-[-50px]">
       <div id="courses"className="mb-14 text-center">
          <span className="py-1 px-4 bg-red-100 rounded-full text-xs font-medium text-red-600 text-center">
            Courses
          </span>
          <h2 className="text-4xl text-center font-bold text-gray-900 py-5">
          Step-by-Step Guidance to <span className='text-green-500 '>Guaranteed Success!!</span>
          </h2>
          <p className="text-lg font-normal text-gray-700 max-w-md md:max-w-2xl mx-auto">
          From foundational coding to advanced DSA, full-stack development, and interview prep—we mentor you at every stage to secure top placements in leading tech companies!
          </p>
        </div>

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
            {/* <button
              onClick={() => setSelectedItem(item)}
              className="mt-5 inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:ring-4 focus:outline-none focus:ring-gray-100"
            >
              <svg className="w-3.5 h-3.5 me-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="M14.707 7.793a1 1 0 0 0-1.414 0L11 10.086V1.5a1 1 0 0 0-2 0v8.586L6.707 7.793a1 1 0 1 0-1.414 1.414l4 4a1 1 0 0 0 1.416 0l4-4a1 1 0 0 0-.002-1.414Z"/>
                <path d="M18 12h-2.55l-2.975 2.975a3.5 3.5 0 0 1-4.95 0L4.55 12H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2Zm-3 5a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"/>
              </svg>
              View Curriculum 
            </button> */}
            <button
  onClick={() => {
    if (item.heading === "FINAL MILESTONE: Dream Placement") {
      window.open("https://codingclub.tech/static/images/cm/Your-Resume-After-Program.png", "_blank");
    } else {
      setSelectedItem(item);
    }
  }}
  className="mt-5 inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:ring-4 focus:outline-none focus:ring-gray-100"
>
  {item.heading === "FINAL MILESTONE: Dream Placement" ? (
    <>
     <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" className='mr-2' viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-party-popper"><path d="M5.8 11.3 2 22l10.7-3.79"/><path d="M4 3h.01"/><path d="M22 8h.01"/><path d="M15 2h.01"/><path d="M22 20h.01"/><path d="m22 2-2.24.75a2.9 2.9 0 0 0-1.96 3.12c.1.86-.57 1.63-1.45 1.63h-.38c-.86 0-1.6.6-1.76 1.44L14 10"/><path d="m22 13-.82-.33c-.86-.34-1.82.2-1.98 1.11c-.11.7-.72 1.22-1.43 1.22H17"/><path d="m11 2 .33.82c.34.86-.2 1.82-1.11 1.98C9.52 4.9 9 5.52 9 6.23V7"/><path d="M11 13c1.93 1.93 2.83 4.17 2 5-.83.83-3.07-.07-5-2-1.93-1.93-2.83-4.17-2-5 .83-.83 3.07.07 5 2Z"/></svg>
      <span className='text-green-500'> Your Resume After Course</span>
    </>
  ) : (
    <>
      <svg className="w-3.5 h-3.5 me-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
        <path d="M14.707 7.793a1 1 0 0 0-1.414 0L11 10.086V1.5a1 1 0 0 0-2 0v8.586L6.707 7.793a1 1 0 1 0-1.414 1.414l4 4a1 1 0 0 0 1.416 0l4-4a1 1 0 0 0-.002-1.414Z"/>
        <path d="M18 12h-2.55l-2.975 2.975a3.5 3.5 0 0 1-4.95 0L4.55 12H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2Zm-3 5a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"/>
      </svg>
      View Curriculum
    </>
  )}
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

