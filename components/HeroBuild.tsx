import React from "react";

const HeroBuild = () => {
  return (
    <div>
      <div>
        <div className="flex flex-wrap space-x-2 w-full  pt-40  mx-5">
          <div className="flex px-5 md:px-2  flex-1 w-full md:w-1/2 flex-col">
            <h2 className="text-white text-xl md:text-6xl space-y-4 font-black">
              <span  className="text-transparent bg-clip-text saturate-150"  style={{
                                WebkitBoxDecorationBreak: 'clone',
                                backgroundImage: "url('/static/aurora-blur.jpg')",
                                backgroundSize: '200% auto',
                                backgroundPosition: '100% 65%',
                                backgroundColor: '#000',
                                            }}> Build on Aurora.</span>
              <div> Simple. Fast. Affordable. </div>
            </h2>
            <p className="text-white mt-5 text-2xl">
              Aurora provides the Ethereum development experience, with
              layer-2-like speed and scalability. If you are an Ethereum
              developer, getting started on Aurora is as easy as changing the
              RPC endpoint.
            </p>
            <div className="flex items-center mt-10 space-x-4">
              <a
                className="relative items-center justify-center transition-transform hover:scale-105 active:scale-95 focus:outline-none font-medium flex-shrink-0 inline-flex bg-gray-900 text-white dark:bg-white dark:text-gray-900 h-12 rounded-md px-8"
                target="_blank"
                rel="noreferrer"
                href="#"
              >
                Read docs
              </a>
              <a
                className="relative items-center justify-center transition-transform hover:scale-105 active:scale-95 focus:outline-none font-medium flex-shrink-0 inline-flex bg-[#1a373d] text-white hover:backdrop-brightness-200 h-12 rounded-md px-8"
                target="_blank"
                rel="noreferrer"
                href="#"
              >
                Join Discord
              </a>
            </div>
          </div>

          <svg width="600" height="500" xmlns="http://www.w3.org/2000/svg">
            <g
              transform="matrix(-1 0 0 1 484 0)"
              fill="#FFF"
              fillRule="evenodd"
            >
              <circle opacity=".02" cx="201.5" cy="201.5" r="201.5"></circle>
              <path
                d="M132 303a37.501 37.501 0 00-33.54 20.722l-62.498 125A37.501 37.501 0 0069.502 503h124.995a37.501 37.501 0 0033.54-54.278l-62.497-125A37.501 37.501 0 00132 303z"
                opacity=".05"
              ></path>
              <g opacity="1">
                {[...Array(6)].map((_, index) => (
                  <path
                    key={`circle-group-${index}`}
                    d={`M${
                      316.5 + index * 32
                    } 347a7.5 7.5 0 110 15 7.5 7.5 0 010-15zm`}
                    opacity=".1"
                  ></path>
                ))}
              </g>
            </g>
          </svg>
        </div>

        <div className="overflow-hidden">
          <svg
            viewBox="0 0 1200 198"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full mt-16 mb-8 pointer-events-none md:mt-24 md:-mb-8 md:opacity-60"
          >
            <defs>
              <linearGradient
                x1="50%"
                y1="0%"
                x2="50%"
                y2="100%"
                id="prefix__a"
              >
                <stop stopColor="#FFF" stopOpacity=".019" offset="0%"></stop>
                <stop stopColor="#FFF" stopOpacity="0" offset="100%"></stop>
              </linearGradient>
              <linearGradient
                x1="50%"
                y1="0%"
                x2="50%"
                y2="100%"
                id="prefix__b"
              >
                <stop stopColor="#FFF" stopOpacity=".051" offset="0%"></stop>
                <stop stopColor="#FFF" stopOpacity="0" offset="100%"></stop>
              </linearGradient>
            </defs>
            <g fillRule="nonzero" fill="none">
              <path
                d="M0 90.566l28.667-21.7c28.666-21.6 86-65 143.066-68.6 57.2-3.7 114 32.3 171.2 43.6 57.067 11.4 114.4-2 171.467-14.8 57.2-12.8 114-25.2 171.2-15.3 57.067 9.8 114.4 41.8 171.467 49.1 57.2 7.4 114-10 171.2-15 57.066-5 114.4 2.4 143.066 6l28.667 3.7v140H0v-107z"
                fill="url(#prefix__a)"
                transform="matrix(-1 0 0 1 1200 0)"
              ></path>
              <path
                d="M0 101.345l28.667-17.574c28.666-17.493 86-52.64 143.066-55.556 57.2-2.996 114 26.158 171.2 35.31 57.067 9.232 114.4-1.62 171.467-11.986 57.2-10.366 114-20.408 171.2-12.39C742.667 47.084 800 73 857.067 78.911c57.2 5.993 114-8.098 171.2-12.148 57.066-4.049 114.4 1.944 143.066 4.86L1200 74.62V188H0v-86.655z"
                fill="url(#prefix__b)"
              ></path>
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default HeroBuild;
