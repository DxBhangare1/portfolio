// App.js
import React from 'react';
import './App.css';
import Header from './Componants/Header/Header';
import AboutMe from './Componants/About/AboutMe';
import Projects from './Componants/Projects/Projects.js';
import Contact from './Componants/Contact/Contact';
import Intro from './Componants/Intro/Intro';
import Footer from './Componants/Footer/Footer';
import Home from './Componants/Home/Home';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
const App =()=>
{
  return(
    <>
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path='/Intro' element={<Intro/>}/>
      <Route path='/Contact' element={<Contact/>}/>
      <Route path='/Aboutme' element={<AboutMe/>}/>
      <Route path='/Projects' element={<Projects/>}/>
      <Route path='/Footer' element={<Footer/>}/>
      <Route path='/' element={<Home/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}
export default App;