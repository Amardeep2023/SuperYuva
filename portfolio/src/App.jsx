
import './App.css'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Inspiration from './components/Inspiration'
import Hero from './components/Hero'
import Achieve from './components/Achieve'
import Navbar from './components/Navbar'
import Work from './components/Work'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'


function App() {
 

  return (
    <>
    <Router>
    <Navbar/>
      <Routes>

        <Route path='/' element={<Hero/>} />
        <Route path='/inspiration' element={<Inspiration/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/work' element={<Work/>}/>
        <Route path='/achieve'element={<Achieve/>}/>

      
    
      </Routes>
      <Footer/>
    </Router>
    </>
  )
}

export default App
