import React from "react";
import { Link, useLocation } from "react-router-dom";

const Breadcrumb = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  return (
    <div className="sticky top-0 inset-x-0 z-20 bg-white border-y px-4 sm:px-6 lg:px-8 dark:bg-neutral-800 dark:border-neutral-700">
      <div className="flex items-center py-2">
        {/* Home Link */}
        <Link to="/" className="text-sm text-gray-800 dark:text-neutral-400">
          Home
        </Link>

        {/* Dynamic Breadcrumbs */}
        {pathnames.length > 0 && (
          <>
            <svg
              className="shrink-0 mx-3 overflow-visible size-2.5 text-gray-400 dark:text-neutral-500"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5 1L10.6869 7.16086C10.8637 7.35239 10.8637 7.64761 10.6869 7.83914L5 14"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </>
        )}

        {/* Mapping the breadcrumbs */}
        {pathnames.map((value, index) => {
          const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
          const isLast = index === pathnames.length - 1;

          return (
            <span key={routeTo} className="flex items-center">
              {!isLast ? (
                <Link
                  to={routeTo}
                  className="text-sm font-medium text-gray-600 hover:text-blue-600 dark:text-neutral-400 dark:hover:text-white"
                >
                  {value.charAt(0).toUpperCase() + value.slice(1)}
                </Link>
              ) : (
                <span className="text-sm font-semibold text-gray-800 dark:text-neutral-200">
                  {value.charAt(0).toUpperCase() + value.slice(1)}
                </span>
              )}

              {!isLast && (
                <svg
                  className="shrink-0 mx-3 overflow-visible size-2.5 text-gray-400 dark:text-neutral-500"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5 1L10.6869 7.16086C10.8637 7.35239 10.8637 7.64761 10.6869 7.83914L5 14"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              )}
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default Breadcrumb;
