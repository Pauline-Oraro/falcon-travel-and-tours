import './App.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';
import Tours from './pages/tours';
import Blogs from './pages/blogs';
import Contact from './pages/contact';




function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>}/>
          <Route path="/tours" element={<Tours/>}/>
          <Route path="/blogs" element={<Blogs/>}/>
          <Route path="/contact" element={<Contact/>}/>
        </Routes>
      </Router>
      
      
    </>
  )
}

export default App
