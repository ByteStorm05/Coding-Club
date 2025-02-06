import React, { useState } from "react";
import { Menu, ChevronRight, ChevronDown, Home, Users, Calendar, FileText, User } from "lucide-react";
import { CircleHelp } from "lucide-react";
import { BookOpenText } from "lucide-react";
import { CircleCheckBig } from "lucide-react";
import BuyCourse from "@/components/buy-course";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openAccordion, setOpenAccordion] = useState(null);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const toggleAccordion = (id) => {
    setOpenAccordion(openAccordion === id ? null : id);
  };

  return (
    <>
      {/* Breadcrumb Navigation */}
      <div className="sticky top-0 inset-x-0 z-20 bg-white  px-4 sm:px-6 lg:px-8 lg:hidden dark:bg-neutral-800 dark:border-neutral-700">
        <div className="flex items-center py-2">
          <button
            type="button"
            className="size-8 flex justify-center items-center gap-x-2 border border-gray-200 text-gray-800 rounded-lg focus:outline-none"
            onClick={toggleSidebar}
          >
            <Menu className="size-4" />
          </button>
         
        </div>
      </div>

      {/* Sidebar */}
      {/* <div className={`fixed inset-y-0 left-0 w-[260px] h-full bg-white dark:bg-neutral-800 shadow-lg transition-transform  ${isOpen ? "translate-x-0" : "-translate-x-full"} lg:translate-x-0 lg:block z-50`}> */}
      <div>
      {isOpen && (
    <div
      className="fixed inset-0 bg-black opacity-50 z-50 lg:hidden"
      onClick={toggleSidebar} // Clicking outside closes the sidebar
    />
  )}
      <div className={`fixed inset-y-0 left-0 w-[260px] h-full bg-white dark:bg-neutral-800 shadow-lg transition-transform ${isOpen ? "translate-x-0" : "-translate-x-full"} lg:translate-x-0 lg:block z-50 overflow-y-auto`}>

        <div className="px-6 pt-4 flex items-center justify-between ">
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img
              src="/logo.png"
              alt="GenAi Logo"
              className="h-12 w-auto object-contain"
            />
          </a>
          <button className="lg:hidden" onClick={toggleSidebar}>
            <Menu className="size-5 text-gray-600" />
          </button>
        </div>
        <nav className="p-3 flex flex-col space-y-1">
          <a href="#" className="flex items-center gap-x-3.5 py-2 px-2.5 text-gray-800 rounded-lg hover:bg-gray-100">
            <Home className="size-4" />
            Why Us ? 
          </a>
          <div className="">
            <button
              className="flex w-full items-center justify-between py-2 px-2.5 text-gray-800 rounded-lg hover:bg-gray-100"
              onClick={() => toggleAccordion("users")}
            >
              <div className="flex items-center gap-x-3.5">
                <BookOpenText className="size-4" />
                Courses
              </div>
              {openAccordion === "users" ? <ChevronDown className="size-4" /> : <ChevronRight className="size-4" />}
            </button>
            {openAccordion === "users" && (
              <div className="pl-6 space-y-1">
                <a href="#" className="block py-2 px-2.5 text-sm text-gray-800 hover:bg-gray-100">1. C++ Basics</a>
                <a href="#" className="block py-2 px-2.5 text-sm text-gray-800 hover:bg-gray-100">2. Data Structures And Algorithms</a>
                <a href="#" className="block py-2 px-2.5 text-sm text-gray-800 hover:bg-gray-100">3. Advanced Data Structures And Algorithms</a>
                <a href="#" className="block py-2 px-2.5 text-sm text-gray-800 hover:bg-gray-100">4. Python Basics</a>   
                <a href="#" className="block py-2 px-2.5 text-sm text-gray-800 hover:bg-gray-100">5. Machine Learning</a>
                <a href="#" className="block py-2 px-2.5 text-sm text-gray-800 hover:bg-gray-100">6. Java: Core + Advanced</a>
                <a href="#" className="block py-2 px-2.5 text-sm text-gray-800 hover:bg-gray-100">7. Full Stack Development</a>
                <a href="#" className="block py-2 px-2.5 text-sm text-gray-800 hover:bg-gray-100">8. Aptitude + Communication</a>
                <a href="#" className="block py-2 px-2.5 text-sm text-gray-800 hover:bg-gray-100">9. Computer Science Fundamentals</a>
              </div>
            )}
          </div>
         
          <a href="#" className="flex items-center gap-x-3.5 py-2 px-2.5 text-gray-800 rounded-lg hover:bg-gray-100">
            <CircleCheckBig className="size-4" />
            Our Results
          </a>
          <a href="#" className="flex items-center gap-x-3.5 py-2 px-2.5 text-gray-800 rounded-lg hover:bg-gray-100">
            <Users className="size-4" />
            Meet the Team!
          </a>
          <a href="#" className="flex items-center gap-x-3.5 py-2 px-2.5 text-gray-800 rounded-lg hover:bg-gray-100">
            <CircleHelp className="size-4" />
            FAQ's
          </a>
        </nav>
       <BuyCourse/>
      </div>
      </div>
    </>
  );
};

export default Sidebar;