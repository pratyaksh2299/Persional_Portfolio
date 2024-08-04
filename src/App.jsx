import React from 'react'
import { Navbar } from './components/navbar/Navbar'
import Hero from './components/Hero/Hero'
import About from './components/about/About'
import Service from './components/services/Service'
import MyWork from './components/mywork/MyWork'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
export const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <Service/>
      <MyWork/> 
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App