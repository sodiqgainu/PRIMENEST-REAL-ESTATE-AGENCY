

import React from 'react'
import { SmoothScrollProvider } from './context/SmoothScrollContext'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Properties from './components/Properties'
import Reasons from './components/Reasons'
import About from './components/About'
import BrowseProprties from './components/BrowseProprties'
import Contact from './components/Contact'
import WhatsAppButton from './components/WhatsAppButton'

const App = () => {
  return (
    <SmoothScrollProvider>
      <div className='min-h-screen'>
        <Nav/>
        <WhatsAppButton />

        <main>
          <Hero/>
          <Properties/>
          <Reasons/>
          <About/>
          <BrowseProprties/>
          <Contact/>
        </main>
      </div>
    </SmoothScrollProvider>
  )
}

export default App