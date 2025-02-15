// import React from "react";

// const CompanyMarquee = () => {
//   const companyLogos = [
//     "uber.svg",
//     "netflix.png",
//     "microsoft.webp",
//     "meta.svg",
//     "ibm.svg",
//     "google.webp",
//     "atlassian.svg",
//     "amazon.svg",
//   ];

//   return (
//     <div className="relative flex overflow-hidden py-4">
//       {/* First Marquee */}
//       <div className="animate-marquee whitespace-nowrap flex">
//         {companyLogos.map((logo, index) => (
//           <img
//             key={index}
//             src={`/companies/${logo}`}
//             alt={logo.split(".")[0]}
//             className="h-12 mx-6"
//           />
//         ))}
//       </div>

//       {/* Duplicate for Seamless Scrolling */}
//       <div className="absolute top-0 animate-marquee2 whitespace-nowrap flex">
//         {companyLogos.map((logo, index) => (
//           <img
//             key={`duplicate-${index}`}
//             src={`/companies/${logo}`}
//             alt={logo.split(".")[0]}
//             className="h-12 mx-6"
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default CompanyMarquee;



import React from "react";

const CompanyMarquee = () => {
  const companyLogos = [
    "uber.png",
    "microsoft.webp",
    "meta.svg",
    "ibm.png",
    "google.webp",
    "atlassian.svg",
    "amazon.webp",
  ];

  return (
    <>
      <style>
        {`
          .marquee-container {
            width: 100%;
            overflow: hidden;
            position: relative;
          }
          
          .marquee-content {
            display: flex;
            animation: marquee 20s linear infinite;
            white-space: nowrap;
          }
          
          @keyframes marquee {
            0% {
              transform: translateX(0%);
            }
            100% {
              transform: translateX(-50%);
            }
          }
          
          .logo-item {
            flex-shrink: 0;
            padding: 0 2rem;
          }
        `}
      </style>
      
      <div className="marquee-container mt-[-50px]">
        <div className="marquee-content">
          {/* First set of logos */}
          {companyLogos.map((logo, index) => (
            <div key={index} className="logo-item">
              <img
                src={`/companies/${logo}`}
                alt={logo.split(".")[0]}
                style={{ height: '48px', width: 'auto' }}
              />
            </div>
          ))}
          {/* Duplicate set for seamless loop */}
          {companyLogos.map((logo, index) => (
            <div key={`dup-${index}`} className="logo-item">
              <img
                src={`/companies/${logo}`}
                alt={logo.split(".")[0]}
                style={{ height: '48px', width: 'auto' }}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default CompanyMarquee;