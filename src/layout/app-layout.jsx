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


import Sidebar from "@/components/sidebar";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <div className="relative  overflow-hidden">
      {/* Sidebar */}
      <Sidebar />

      {/* Main content */}
      <main className=" min-w-screen flex-1 min-h-screen px-4 lg:ml-[220px] lg:px-8 transition-all duration-300">
        <Outlet />
        <div className="p-10 text-center bg-gray-100 mt-10">
          Made with 💗
        </div>
      </main>
    </div>
  );
};

export default AppLayout;

















