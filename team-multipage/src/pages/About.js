import React from 'react'
import Client from '../components/clients/Clients'
import Director from '../components/directors/Director'
import AboutHero from '../components/hero/AboutHero'
import Ready from '../components/ready/Ready'

const About = () => {
  return (
    <div>
      <AboutHero />
      <Director />
      <Client />
      <Ready />
    </div>
  )
}

export default About
