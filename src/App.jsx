import { Route, Routes } from "react-router-dom"
import HomePage from "./pages/HomePage"
import Login from "./pages/Login"
import Register from "./pages/Register"
import LandingPage from "./pages/LandingPage"

import {useSelector} from 'react-redux'


function App() {



  return (
   <div className="App">
    <Routes>
    <Route path="/" element={<LandingPage />} />
    <Route path="/home" element={<HomePage />} />
    <Route path="/login" element={<Login/>} />
    <Route path="/register" element={<Register/>} />
  
    </Routes>
  
   </div>
  )
}

export default App
