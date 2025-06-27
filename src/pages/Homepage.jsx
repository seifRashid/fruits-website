import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import PopularPicks from '../components/PopularPicks'

function Homepage() {
  return (
    <>
    <div className="flex flex-col bg-[#022d28] min-h-screen px-4 sm:px-24 pt-4">
        <Navbar/>
        <Hero/>
        <PopularPicks/>
    </div>
    </>
  )
}

export default Homepage