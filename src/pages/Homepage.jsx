import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'

function Homepage() {
  return (
    <>
    <div className="flex flex-col bg-[#022d28] min-h-screen px-8 sm:px-24 pt-8">
        <Navbar/>
        <Hero/>
    </div>
    </>
  )
}

export default Homepage