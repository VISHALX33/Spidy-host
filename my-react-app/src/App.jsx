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
import Contect from './Componentes/Contect'
import Sponser from './Componentes/Sponser'
import ServerLocation from './Componentes/ServerLocation'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <Haeder/>
      <Hero/>
      <Sponser/>
      <Premium/>
      <Contect/>
      <HostingFeatures/>
      <ServerLocation/>
      <PremierControl/>
      <Testimonial/>
      <QNA/>
      <Footer/>
    </>
  )
}

export default App
