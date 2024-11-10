import React from 'react'

const Footer = () => {
  return (
    <div>
       <div className="px-5 md:px-10 mx-auto ">
      <header className="max px-20 mt-80 z-40 -w-xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-black !leading-[1.2]">
                      <div   className="text-transparent bg-clip-text saturate-150"  style={{
                  WebkitBoxDecorationBreak: 'clone',
                  backgroundImage: "url('/src/images/aurora-blur.jpg')",
                  backgroundSize: '200% auto',
                  backgroundPosition: '50% 40%',
                  backgroundColor: '#000',
                              }}>Jump right in</div>

        </h2>
        <p className="text-xl text-white lg:px-80 leading-normal mt-5">
          Whether you&rsquo;re an individual looking to use one of the projects
          or a developer wanting to build on Aurora, now is the time to get
          started.
        </p>
      </header>

      <div className="flex  flex-wrap   mt-10  justify-center items-center  gap-4  ">
        {/* Blog Items */}
        {[
          {
            src: "discover",
            title: "Discover Aurora+",
            description:
              " Earn staking rewards and discover our ecosystem dApps",
            button: "Get Started",
          },
          {
            src: "rainbow",
            title: "Rainbow Bridge",
            description: " Transfer tokens between Ethereum, NEAR & Aurora",
            button: " Transfer tokens",
          },
          {
            src: "eco",
            title: "Aurora Ecosystem",
            description: " Browse dapps that have already launched on Aurora. ",
            button: "Browse dapps",
          },
          {
            src: "discord",
            title: " Join Discord",
            description: "Chat with the Aurora team and get support. ",
            button: "Join Discord",
          },
        ].map((project, index) => (
          <div
            key={index}
            className="flex flex-wrap text-center   justify-center items-center"
          >
            <div  className=" justify-items-center overflow-hidden bg-[#1a373d] w-[250px] h-[350px] rounded-[5px] opacity-100 border-0 m-0 p-5">
              <img
                src={`/src/images/${project.src}.png`}
                alt={project.src}
                width={100}
                height={100}
              />
              <p className="text-white mt-10 mb-5 font-bold ">{project.title}</p>
              <p className=" text-sm text-[hsla(0,_0%,_100%,_0.66)] font-small">{project.description}</p>
              <p className="relative text-sm font-bold items-center justify-center white-space-nowrap whitespace-nowrap transition-transform hover:scale-103 active:scale-95 active:transform focus:outline-none  flex-shrink-0 inline-flex bg-opacity-40 bg-[#3a6973] text-white hover:backdrop-brightness-200 p-2 mt-8 rounded-md px-8">
                {project.button}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  )
}

export default Footer
