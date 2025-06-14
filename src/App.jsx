import { Route, Routes } from "react-router-dom"
import HomePage from "./pages/HomePage"
import Login from "./pages/Login"
import Register from "./pages/Register"
import ProfilePage from "./pages/ProfilePage"
import DashBoard from "./pages/DashBoard"
import Navbar from "./components/Navbar"
import { useEffect } from "react"
import { useSelector } from "react-redux"





function App() {


  

  return (
   <div className="App">
      {/* Navbar */}
          <Navbar />
    <Routes>
  
      <Route path="/" element={<HomePage />} />
  

     
      <Route path="/login" element={<Login/>} />
      <Route path="/register" element={<Register/>} />
      <Route path="/dashboard" element={<DashBoard />} />


  
    </Routes>
  
   </div>
  )
}

export default App
