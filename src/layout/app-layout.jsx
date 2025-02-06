// import Navbar from "@/components/Navbar";

// import { Outlet } from "react-router-dom";

// const AppLayout = () => {
//   return (
//     <div className="relative">


//       <Navbar />
//       {/* Main content */}
//       <main className="min-h-screen container mx-auto px-0">
//         <div className="h-[68px]"></div>
//         <Outlet />


//       </main>

//       <div className="p-10 text-center bg-gray-100 mt-10">
//         Made with 💗
//       </div>
//     </div>
//   );
// };

// export default AppLayout;




// import Sidebar from "@/components/sidebar";

// import { Outlet } from "react-router-dom";

// const AppLayout = () => {
//   return (
//     <div className="relative">


//       <Sidebar/>
//       {/* Main content */}
//       <main className=" w-full min-h-screen container mx-auto px-0 lg:ml-[260px]">
//         <div className="p-0"></div>
//         <Outlet />


//       </main>

//       <div className="p-10 text-center bg-gray-100 mt-10">
//         Made with 💗
//       </div>
//     </div>
//   );
// };

// export default AppLayout;

// import Sidebar from "@/components/sidebar";
// import { Outlet } from "react-router-dom";

// const AppLayout = () => {
//   return (
//     <div className="relative overflow-hidden">
//       {/* Sidebar */}
//       <Sidebar />

//       {/* Main content */}
//       <main className="flex-1 min-h-screen w-full px-4 lg:ml-[230px] lg:px-8 transition-all duration-300">
//         <Outlet />
//         <div className="p-10 text-center bg-gray-100 mt-10">
//           Made with 💗
//         </div>
//       </main>
//     </div>
//   );
// };

// export default AppLayout;


// import Sidebar from "@/components/sidebar";
// import { Outlet } from "react-router-dom";

// const AppLayout = () => {
//   return (
//     <div className="relative overflow-hidden">
//       {/* Sidebar */}
//       <div className="fixed">
//       <Sidebar />
//       </div>

//       {/* Main content */}
//       <main className=" min-w-screen flex-1 min-h-screen px-4 lg:ml-[220px] lg:px-8 transition-all duration-300">
//         <Outlet />
//         <div className="p-10 text-center bg-gray-100 mt-10">
//           Made with 💗
//         </div>
//       </main>
//     </div>
//   );
// };

// export default AppLayout;



import DemoModal from "@/components/Modal2";
import Modal from "@/components/Modal";
import Sidebar from "@/components/sidebar";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <div className="relative flex">
      {/* Sidebar (Shows on Large Screens) */}
      <div className="fixed top-0 left-0 h-screen w-[220px] bg-gray-900 text-white transition-all duration-300 z-50 
                      hidden lg:flex flex-col">
        <Sidebar />
      </div>

      {/* Navbar (Shows on Small Screens) */}
      <div className="lg:hidden fixed top-0 left-0 w-full h-[60px] bg-white shadow-md border-b border-gray-300 flex items-center justify-between px-4 z-50">
  {/* Left Side - Sidebar */}
  <div className="flex items-center">
    <Sidebar />
  </div>

  {/* Right Side - Buttons */}
  <div className="flex gap-2">
    <button 
      className=" px-3 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 
                 transition-all duration-800 hover:scale-105 hover:shadow-lg animate-pulse"
    >
      <Modal/>
    </button>
    <button 
      className="py-2 px-3 bg-gray-100 text-gray-800 text-sm font-medium rounded-lg
                 hover:bg-gray-200 transition-all duration-300 outline-dotted"
    >
      <DemoModal/>
    </button>
  </div>
</div>

      {/* Main Content - Scrolls Behind Navbar */}
      <main className="flex-1 min-h-screen px-4 lg:ml-[220px] lg:px-8 transition-all duration-300 overflow-auto pt-[60px] lg:pt-0">
        <Outlet />
        <div className="p-10 text-center bg-gray-100 mt-10">Made with 💗</div>
      </main>
    </div>
  );
};

export default AppLayout;

















