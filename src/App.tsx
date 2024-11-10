import React from 'react'
import Header from "../components/Header"
import Hero from "../components/Hero"
import HeroSection from "../components/HeroSection"
import HeroBlog from "../components/HeroBlog"
import HeroBuild from "../components/HeroBuild"
import Projects from "../components/Projects"
import ViewProject from "../components/ViewProject"
import Footer from "../components/Footer"
import FooterLinks from "../components/FooterLinks"



const App = () => {
  return (
	  <div>
		  <Header />
		  <Hero />
		  <HeroSection />
		  <HeroBlog />
		  <HeroBuild />
		  <Projects />
		  <ViewProject />
		  <Footer />
		  <FooterLinks />

	  
	</div>
  )
}

export default App
