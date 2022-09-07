import './App.css';
import Navigator from './component/Navigator';
import HomePage from './component/HomePage'
import Header from './component/Header';
import Footer from './component/Footer'
import About from './component/About'
import Work from './component/Work'
import Contact from './component/Contact'
import Privacy from './component/Privacy'
import ProjectCourse from './component/ProjectCourse';
import ProjectDelivery from './component/ProjectDelivery';
import ProjectForecast from './component/ProjectForecast'
import ProjectCrypto from './component/ProjectCrypto'

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import React, { useEffect, useState, useRef } from "react";



function App() {
  const[current_Page, setCurrent_page] = useState('Home');
  

  return (
    <>
    <title>Yutong Studio</title>
    <div>
      <Header/>
      <Navigator/>
      <main id='main'>
        <Router>
        <Routes>
          <Route exact path='/' element={<HomePage/>} />
          <Route exact path='/work' element={<Work/>} />
          <Route exact path='/about' element={<About/>} />
          <Route exact path='/privacy' element={<Privacy/>} />
          <Route exact path='/contact' element={<Contact/>} />
          <Route exact path='/projectCourse' element={<ProjectCourse/>} />
          <Route exact path='/projectDelivery' element={<ProjectDelivery/>} />
          <Route exact path='/projectForecast' element={<ProjectForecast/>} />
          <Route exact path='/projectCrypto' element={<ProjectCrypto/>} />
        </Routes>
        </Router>

      </main>
      <Footer/>
    </div>
    </>
  );
}

export default App;
