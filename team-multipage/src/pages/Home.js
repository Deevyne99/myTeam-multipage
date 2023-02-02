import React from 'react'
import HomeHero from '../components/hero/HomeHero'
import Manager from '../components/Managers/Manager'
import Ready from '../components/ready/Ready'
import Testimonial from '../components/testimonial/Testimonial'
const Home = () => {
  return (
    <>
      <HomeHero />
      <Manager />
      <Testimonial />
      <Ready />
    </>
  )
}

export default Home
