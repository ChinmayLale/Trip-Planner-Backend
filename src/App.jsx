import { Route, Routes } from "react-router-dom"
import HomePage from "./pages/HomePage"
import Login from "./pages/Login"
import Register from "./pages/Register"
import ProfilePage from "./pages/ProfilePage"
import DashBoard from "./pages/DashBoard"
import Navbar from "./components/Navbar"
import { useEffect } from "react"





function App() {


   const user = JSON.parse(localStorage.getItem('user')); // Assuming user data is stored in localStorage
  const token = localStorage.getItem('userToken'); // Assuming token is stored in localStorage

  

  return (
   <div className="App">
      {/* Navbar */}
          <Navbar user={user} token={token} />
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
