import React from "react"

const team = () => {

  const team = [
      {
          avatar: "/team/team1.png",
          name: "Rishabh Jain",
          title: "CEO, Instructor",
          desc: "I'm Rishabh Jain, Founder & CEO of Coding Club India, mentoring a community of 5L+ students. With 10+ years of experience, I take pride in guiding students to secure top job and internship offers. Join us to accelerate your career!",
          linkedin: "https://in.linkedin.com/in/rishabh-jain-76aa5ba5",
          twitter: "javascript:void(0)",
          github: "javascript:void(0)"
      },
      {
          avatar: "/team/team2.jpg",
          name: "Srishti Jain",
          title: "President, Instructora",
          desc: "MBA graduate from Biyani College, Jaipur, specializing in aptitude, HR interviews, resume formatting, and communication skills. Passionate about helping individuals excel in their careers, whether you're a beginner or a professional looking to upskill.",
          linkedin: "https://www.linkedin.com/in/srishti-jain-2502ab242",
          twitter: "javascript:void(0)",
          github: "javascript:void(0)"
      },
      {
          avatar: "/team/team3.jpg",
          name: "Abhishek Gupta",
          title: "Instructor",
          desc: "Software developer with experience at Zomato and currently working at OkCredit. Specializes in backend systems and infrastructure, passionate about mentoring and sharing tech insights with the community.",
          linkedin: "https://www.linkedin.com/in/abhi18632",
          twitter: "javascript:void(0)",
          github: "javascript:void(0)"
      },
      {
          avatar: "/team/team4.jpg",
          name: "Rajat Bansal",
          title: "Instructor",
          desc: "Backend developer at Media.net with a passion for problem-solving and mentoring students. Actively participated in coding contests on Codeforces, CodeChef, and LeetCode. Dedicated to building impactful software solutions.",
          linkedin: "javascript:void(0)",
          twitter: "javascript:void(0)",
          github: "javascript:void(0)"
      },
      {
          avatar: "/team/team5.jpg",
          name: "Siddharth Singh",
          title: "Teaching Assistant",
          desc: "Teaching assistant for Data Structures & Algorithms, providing interactive lessons and hands-on problem-solving sessions to prepare students for top tech interviews.",
          linkedin: "javascript:void(0)",
          twitter: "javascript:void(0)",
          github: "javascript:void(0)"
      },
      {
          avatar: "/team/team6.jpg",
          name: "Ashutosh Negi",
          title: "Mock Interview Coach",
          desc: "Mock interview coach with experience solving 1000+ problems on LeetCode & InterviewBit. Focused on simulating real interview scenarios, refining coding skills, and helping students secure offers from top tech companies.",
          linkedin: "https://www.linkedin.com/in/ashutosh-negi-b08a32193",
          twitter: "javascript:void(0)",
          github: "javascript:void(0)"
      },
  ]

  return (
      <section className="py-14 mt-[-100px]">
          <div className="max-w-screen-xl mx-auto px-4 md:px-8">
          <div className="mb-14 text-center">
          <span id="team" className="py-1 px-4 bg-gray-200 rounded-full text-xs font-medium text-black text-center">
            Team
          </span>
          <h2 className="text-4xl text-center font-bold text-gray-900 py-5">
            Meet the Mentors <span className='text-green-500 '>Behind Your Success</span>
          </h2>
          <p className="text-lg font-normal text-gray-500 max-w-md md:max-w-2xl mx-auto">
          Our expert instructors—from industry leaders to coding champions—are here to mentor, guide, and prepare you for top placements with hands-on learning, interview coaching, and career support!
          </p>
        </div>
              <div className="mt-12">
                  <ul className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
                      {
                          team.map((item, idx) => (
                              <li key={idx}>
                                  <div className="w-full h-60 sm:h-52 md:h-56">
                                      <img
                                          src={item.avatar}
                                          className="w-full h-full object-cover object-center shadow-md rounded-xl"
                                          alt=""
                                      />
                                  </div>
                                  <div className="mt-4">
                                      <h4 className="text-lg text-gray-700 font-semibold">{item.name}</h4>
                                      <p className="text-indigo-600">{item.title}</p>
                                      <p className="text-gray-600 mt-2">{item.desc}</p>
                                      <div className="mt-3 flex gap-4 text-gray-400">
                                         
                                         
                                          <a href={item.linkedin} target="_blank">
                                              <svg className="w-5 h-5 duration-150 hover:text-gray-500" fill="none" viewBox="0 0 48 48"><g clip-path="url(#clip0_17_68)"><path fill="currentColor" d="M44.447 0H3.544C1.584 0 0 1.547 0 3.46V44.53C0 46.444 1.584 48 3.544 48h40.903C46.407 48 48 46.444 48 44.54V3.46C48 1.546 46.406 0 44.447 0zM14.24 40.903H7.116V17.991h7.125v22.912zM10.678 14.87a4.127 4.127 0 01-4.134-4.125 4.127 4.127 0 014.134-4.125 4.125 4.125 0 010 8.25zm30.225 26.034h-7.115V29.766c0-2.653-.047-6.075-3.704-6.075-3.703 0-4.265 2.896-4.265 5.887v11.325h-7.107V17.991h6.826v3.13h.093c.947-1.8 3.272-3.702 6.731-3.702 7.21 0 8.541 4.744 8.541 10.912v12.572z" /></g><defs><clipPath id="clip0_17_68"><path fill="currentColor" d="M0 0h48v48H0z" /></clipPath></defs></svg>
                                          </a>
                                      </div>
                                  </div>
                              </li>
                          ))
                      }
                  </ul>
              </div>
          </div>
      </section>
  )
}

export default team;