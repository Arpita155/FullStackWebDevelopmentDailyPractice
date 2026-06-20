import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Footer from './components/Footer'
import Searchbar from './components/Searchbar'
import Details from './components/Details'

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
        <Footer/><br />

        {/* Details */}

        <Details name="arpita" age={21} address="kolkata"/>
        <Details name="dip" age={28} address="barrackpore"/>
        <Details name="krishna" age={21} address="delhi"/>
      
    </div>
    
  )
}
