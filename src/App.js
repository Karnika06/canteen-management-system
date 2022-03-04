
import './App.css';
import Landing from './pages/landingPage/Landing';
import ViewportProvider from "./viewport";
import AwesomeSlider from 'react-awesome-slider';
import {BrowserRouter as Router} from "react-router-dom"
import {Route, Routes} from "react-router-dom"

import AboutUs from './pages/landingPage/AboutUs/AboutUs'
import ContactUs from './pages/landingPage/ContactUs/ContactUs'
import Register from './pages/landingPage/LogInRegister/Register';
import Login from './pages/landingPage/LogInRegister/Login';

function App() {
  return (
    <>
    <ViewportProvider>
      <Router>
        <Routes>
          <Route path='/about' element={<AboutUs/>}/>
          <Route path='/contact' element={<ContactUs/>}/>
          <Route exact path='/' element={<Landing/>}/>
          <Route path = "/register" element={<Register/>}/>
          <Route path ="/login" element={<Login/>}/>
        </Routes>
    </Router>
    </ViewportProvider>
      </>
  );
}

export default App;
