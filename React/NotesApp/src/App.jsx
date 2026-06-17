import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Footer from './components/Footer'
import Searchbar from './components/Searchbar'

export default function App() {
  return (
    <div >

        {/* Navber scetion */}
        <Navbar/>

        {/* Hero Section */}
        <Hero/>

        {/* Search Section */}
        <Searchbar/>

        {/* footer section */}
        <Footer/>
      
    </div>
    
  )
}
