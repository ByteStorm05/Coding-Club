import DemoModal from "@/Modal2";
import Modal from "@/components/Modal";
import React, { useEffect } from "react";

const BuyCourse = () => {
  useEffect(() => {
    setTimeout(() => {
      document.querySelectorAll(".hs-overlay").forEach((el) => {
        if (window.HSOverlay) {
          window.HSOverlay.open(el);
        }
      });
    });
  }, []);

  return (
    <div>
      <div className="bottom-0 end-0 z-[60] sm:max-w-xl w-full mx-auto p-6">
        {/* Card with animated border */}
        <div className="relative group">
          {/* Animated border overlay */}
          <div className="absolute -inset-[1px] bg-gradient-to-r from-black via-gray-500 to-black rounded-xl blur-[0.5px] opacity-100 animate-border-flow"></div>
          
          {/* Main card content */}
          <div className="relative p-4 bg-white border border-gray-200 rounded-xl shadow-sm dark:bg-neutral-900 dark:border-neutral-800">
            <div className="flex gap-x-5">
              <div className="grow">
                <h2 className="text-lg font-semibold text-gray-800 dark:text-white">
                  Buy Our Premium Course
                </h2>
                <div className="mt-2">
                  <p className="text-gray-500 dark:text-gray-400 line-through">
                    Normally: Rs.5833 Per Month
                  </p>
                  <p className="text-green-600 dark:text-green-400 font-semibold animate-pulse">
                    Discount Expiring: 40% DISCOUNT!
                  </p>
                </div>
                <div className="mt-5 inline-flex gap-x-2">
                  <button
                    type="button"
                    className=" px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none transform hover:scale-105 transition-all duration-200"
                  >
                     <Modal/>
                  </button>
                  <button
                    type="button"
                    className=" px-1 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 transform hover:scale-105 transition-all duration-200"
                  >
                    <DemoModal/>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
       @keyframes borderFlow {
        0%, 100% {
          clip-path: inset(0 0 97% 0);
        }
        25% {
          clip-path: inset(0 97% 0 0);
        }
        50% {
          clip-path: inset(97% 0 0 0);
        }
        75% {
          clip-path: inset(0 0 0 97%);
        }
      }
        .animate-border-flow {
          animation: borderFlow 4s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default BuyCourse;