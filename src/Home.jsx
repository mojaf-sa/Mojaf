import React from 'react'
import Info from './Info'
import Hero from './Hero'
import Header from './Header';
import Services from './Services';

function Home() {
  return (
    <>
    <Header />
      <Hero />
      <Info />
      <Services />
    </>
  )
}

export default Home