import React from 'react'
import { FaTwitter, FaTwitch, FaYoutube } from "react-icons/fa";


const HeroBlog = () => {
  return (

    <div>
      <div className="flex flex-wrap gap-2  justify-center items-center mt-10 mb-20 ">
        {/* Blog Items */}
        {[
          {
            src: "blog1",
            date: "April 24 2024",
            title:
              "Bridge Abstraction: The Next Frontier in Crypto Accessibility",
          },
          {
            src: "blog2",
            date: "April 23 2024",
            title:
              "Introducing Aurora Chaser: Elevating Your Forwarder Experience",
          },
          {
            src: "blog3",
            date: "April 16 2024",
            title: "Forwarder: The Aurora Solution to Blockchain Fragmentation",
          },
          {
            src: "blog4",
            date: "Feb 15 2024",
            title: "How are Aurora Chains Scalable?",
          },
        ].map((blog, index) => (
          <div
            key={index}
            className="flex flex-wrap sm:mt-2 md:mt-2 mt-10 items-center"
          >
            <div className="block overflow-hidden bg-[#1a373d] w-[280px] h-[350px] rounded-[5px] opacity-100 border-0 m-0 p-5">








              
              <img
                src={`/static/images/${blog.src}.png`}
                alt={blog.src}
                width={300}
                height={60}
              />
              <p className="text-[hsla(0,_0%,_100%,_0.66)] mt-5 p-1 pb-2">{blog.date}</p>
              <p className="text-white p-1 pb-2 text-[1.125rem] leading-[1.75rem]">{blog.title}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex flex-wrap  justify-center items-center  space-x-2   ">
        <div className=" flex flex-wrap bg-[#1a373d] p-10 rounded-md ">
          <div className="flex flex-wrap flex-col lg:flex-row items-center gap-4">
            <div className="flex items-center justify-center w-12 h-12 text-white rounded-full bg-gradient-to-r from-[#a42bc9] via-[#b338b1] to-[#f36bb8]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                width="28"
                height="28"
              >
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
              </svg>
            </div>
            <div>
              <span className="flex text-white flex-wrap text-lg md:text-2xl font-bold">
                Subscribe to our newsletter
              </span>
              <div className="text-[hsla(0,_0%,_100%,_0.66)]">
                The latest news and resources, sent to your inbox.
              </div>
            </div>
            <form className="flex items-center w-full lg:w-auto h-12 bg-gray-100 rounded-lg dark:bg-white dark:bg-opacity-10">
              <input
                type="email"
                name="email"
                placeholder="Your email"
                className="flex-1 px-4 bg-transparent border-none placeholder-opacity-50 focus:outline-none"
              />
              <button
                type="submit"
                name="subscribe"
                className="m-1.5 px-2 py-2 font-medium text-sm rounded text-black bg-white"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className="w-3/10  bg-[#1a373d]  mt-2 px-10 pb-2 justify-center items-center  rounded-md  ">
          <div className="flex flex-wrap gap-5 pb-10 Smd:p-8 mt-10  ">
            <div>
              <FaTwitch className="text-white justify-center items-center bg-slate-300 bg-opacity-40 w-10 h-10 p-2 rounded-full" />
            </div>
            <div>
              <FaTwitter className="text-white justify-center items-center bg-slate-300 bg-opacity-40 w-10 h-10 p-2 rounded-full" />
            </div>
            <div>
              <FaYoutube className="text-white justify-center items-center bg-slate-300 bg-opacity-40 w-10 h-10 p-2 rounded-full" />
            </div>
          </div>
        </div>
      </div>
    </div>


      

  )
}

export default HeroBlog
