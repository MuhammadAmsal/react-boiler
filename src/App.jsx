import { useState } from 'react'
import { useSelector} from 'react-redux'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
 } from "react-router-dom";
 import Login from './Pages/login/login.jsx'
 import Signup from './Pages/signup/signup.jsx';
 import Home from './Pages/home/home.jsx' 
function App() {
  // const storedUserString = localStorage.getItem("user");
  // const user = JSON.parse(storedUserString);
  // const user=useSelector(state=> state.user)
  // const currentUser=user.user
// console.log(user)
  return (
    <Router>
    <Routes>
    <Route path="/signup" element={<Signup/>} />
    <Route path="/login" element={<Login />} />
    <Route path="/" element={<Home />} />

    {/* <Route path="/" element={user ? <Navigate to="/"/> : <Login />}  /> */}
    </Routes>
  </Router>
  )
}

export default App
