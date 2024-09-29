import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import Haeder from './Componentes/Haeder'
import Hero from './Componentes/Hero'
import Premium from './Componentes/Premium'
import HostingFeatures from './Componentes/HostingFeatures'
import PremierControl from './Componentes/PremierControl'
import Testimonial from './Componentes/Testimonial'
import QNA from './Componentes/QNA'
import Footer from './Componentes/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <Haeder/>
      <Hero/>
      <Premium/>
      <HostingFeatures/>
      <PremierControl/>
      <Testimonial/>
      <QNA/>
      <Footer/>
    </>
  )
}

export default App
