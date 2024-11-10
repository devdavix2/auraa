import React from 'react'
import styles from "../src/index.css?inline";

const HeroSection = () => {
  return (
      <div>
              <div className="container w-full bg-inherit  max-w-6xl px-5 md:px-10 mx-auto mt-20 text-center md:mt-40">
      <div className="space-y-8">
        <div className="mx-auto text-xl max-w-64 sm:max-w-none">
          Top crypto projects are already building on Aurora
        </div>
        <div className="flex flex-wrap  mt-8 px-8 mx-24 items-center gap-8 md:gap-10">
          <div className="flex items-center justify-center w-20 h-20 text-black bg-white rounded-full">
            <img
              src="/static/images/near.webp"
              alt="image"
              width={50}
              height={50}
            />
          </div>

          <div className="flex items-center justify-center w-20 h-20 text-black bg-white rounded-full">
            <img
              src="/static/images/graph.png"
              alt="image"
              width={50}
              height={50}
            />
          </div>

          <div className="flex items-center justify-center w-20 h-20 text-black bg-white rounded-full">
            <img
              src="/static/images/curve.png"
              alt="image"
              width={50}
              height={50}
            />
          </div>

          <div className="flex items-center justify-center w-20 h-20 text-black bg-white rounded-full">
            <img
              src="/static/images/safe.png"
              alt="image"
              width={50}
              height={50}
            />
          </div>

          <div className="flex items-center justify-center w-20 h-20 text-black bg-white rounded-full">
            <img
              src="/static/images/syn.png"
              alt="image"
              width={50}
              height={50}
            />
          </div>

          <div className="flex items-center justify-center w-20 h-20 text-black bg-white rounded-full">
            <img
              src="/static/images/cov.png"
              alt="image"
              width={50}
              height={50}
            />
          </div>

          <div className="flex items-center justify-center w-20 h-20 text-black bg-white rounded-full">
            <img
              src="/static/images/py.png"
              alt="image"
              width={0}
              height={0}
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center max-w-5xl mx-auto mt-10 divide-y divide-white md:mt-20 md:flex-row md:divide-y-0 md:divide-x divide-opacity-5">
        <div className="flex-1 py-10 space-y-4 md:py-0 md:px-10">
          <div className= "text-white text-xl">Total value locked</div>
          <div className="text-white text-4xl"> $17M</div>
          <div>
            <a
              className="inline-flex items-center space-x-1 text-secondary hover:text-white"
              href="#"
            >
              <span>Defi Llama</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
                className="w-3 h-3"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </a>
          </div>
        </div>
        <div className="flex-1 py-10 space-y-4 md:py-0 md:px-10">
          <div className='text-white text-xl'>Projects on Aurora</div>
          <div className="text-white text-4xl">0+</div>
          <div>
            <a
              className="inline-flex items-center space-x-1 text-secondary hover:text-white"
              href="#"
            >
              <span className="text-white">Ecosystem</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
                className="w-3 h-3"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </a>
          </div>
        </div>
        <div className="flex-1 py-10 space-y-4 md:py-0 md:px-10">
          <div className="text-white text-xl">AURORA token price</div>
          <div className="text-white text-4xl">$0.00</div>
          <div>
            <a
              className="inline-flex items-center space-x-1 text-secondary hover:text-white"
              href="#"
            >
              <span className="text-white">CoinGecko</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
                className="w-3 h-3"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
      
    </div>
  )
}

export default HeroSection
