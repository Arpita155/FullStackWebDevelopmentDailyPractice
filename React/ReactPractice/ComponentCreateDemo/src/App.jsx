import React from 'react'
import Navbar from './components/Navbar'
import Login from './components/Login'
import SearchBar from './components/SearchBar'
import Footer from './components/Footer'

export default function App() {
  return (
    <div>
      {/* Navbar section */}
      <Navbar/>
      
      {/* Login */}
      <Login/>

      {/* Search Section */}
      <SearchBar/>

      {/* Footer Section */}
      <Footer/>
    </div>
  )
}
