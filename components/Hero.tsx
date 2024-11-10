import React from 'react';

const Hero: React.FC = () => {
  return (
    <main className="flex flex-col flex-1 w-full ">
      <div className="pt-12 md:pt-32">
        <div className="container w-full max-w-6xl px-5 md:px-10 mx-auto">
          <div className="text-center">
            <h1 className="text-5xl sm:text-6xl md:text-8xl font-black !leading-[1.1]">
              <span
                className="text-transparent bg-clip-text saturate-150"
                style={{
                  WebkitBoxDecorationBreak: 'clone',
                  backgroundImage: "url('/src/images/aurora-blur.jpg')",
                  backgroundSize: '200% auto',
                  backgroundPosition: '50% 40%',
                  backgroundColor: '#000',
                              }}
                              
              >
                Shooting for the stars.
              </span>
            </h1>
            <p className="max-w-5xl mx-auto mt-6 text-xl text-white sm:text-2xl md:text-3xl !leading-normal">
              Aurora is a next-generation Ethereum compatible blockchain and ecosystem
              that runs on the NEAR Protocol, and powers the innovations behind Aurora
              Cloud—the fastest path for Web2 businesses to capture the value of Web3.
            </p>
          </div>
        </div>

        <div className="mt-6">
          <ul className="flex justify-center space-x-5 leading-snug text-center md:space-x-10">
            <li className="space-y-1">
              <div className="flex justify-center mt-2 font-bold text-primary">
                <span className="text-lg self-center mt-1 -ml-0.5">~</span>
                <span className="ml-0.5 text-3xl">1 sec</span>
              </div>
              <div className="text-sm  text-white leading-tight">Avg block time</div>
            </li>
            <li className="space-y-1">
              <div className="flex justify-center mt-2 font-bold text-primary">
                <span className="text-lg self-center mt-1 -ml-0.5">~</span>
                <span className="ml-0.5 text-3xl">2 sec</span>
              </div>
              <div className="text-sm text-white leading-tight">Transaction finality</div>
            </li>
            <li className="space-y-1">
              <div className="flex justify-center mt-2 font-bold text-primary">
                <span className="text-lg self-center mt-1 -ml-0.5">~$</span>
                <span className="ml-0.5 text-3xl">0.02</span>
              </div>
              <div className="text-sm text-white leading-tight">Transaction cost</div>
            </li>
          </ul>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4 mt-10 md:mt-20">
          <a
            className="relative items-center justify-center whitespace-nowrap transition-transform hover:scale-103 active:scale-95 focus:outline-none font-medium inline-flex bg-gray-900 text-white dark:bg-white dark:text-gray-900 h-12 rounded-md px-8"
            href="#"
          >
            Get Started
          </a>

          <button
            id="connect-wallet"
            className="relative items-center justify-center whitespace-nowrap transition-transform hover:scale-103 active:scale-95 focus:outline-none font-medium inline-flex bg-black text-white dark:text-black dark:bg-white h-8 text-sm rounded-md px-3"
          >
            Connect Wallet
          </button>

          <a
            className="relative items-center justify-center whitespace-nowrap transition-transform hover:scale-103 active:scale-95 focus:outline-none font-medium inline-flex bg-gray-900 text-white dark:bg-white dark:text-gray-900 h-12 rounded-md px-8"
            target="_blank"
            rel="noreferrer"
            href="#"
          >
            Visit Aurora Cloud
          </a>

          <a
            className="relative items-center justify-center whitespace-nowrap  focus:outline-none font-medium inline-flex bg-translucent text-white hover:backdrop-brightness-200 h-12 rounded-md px-8"
            target="_blank"
            rel="noreferrer"
            href="#"
          >
            Join Discord
          </a>
        </div>
          </div>
          
    </main>
  );
};

export default Hero;
