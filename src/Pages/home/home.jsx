import React, { useEffect } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { useNavigate } from "react-router-dom";
import Topbar from '../../components/topbar/topbar.jsx'
export default function Home() {
  const navigate=useNavigate()
    const user=useSelector(state=> state.user)
    // const storedUserString = localStorage.getItem("user");
    // const currentUser = JSON.parse(storedUserString);
    const currentUser=user.user
    console.log(user.user) 
    return (
      <>
         <Topbar />
      </>
    )
}
