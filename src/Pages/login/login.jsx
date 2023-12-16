// import React, { useState } from 'react'
// import { useDispatch } from 'react-redux'
// import {addTodo} from '../redux/slice'
// import BasicButtons from './btn.jsx'
 

// export default function Addtodo() {
//   const [input,setInput]=useState('')
//   // console.log(input)
//   const dispatch=useDispatch()
//   const addTodoHandler=(e)=>{
//  e.preventDefault()
//  dispatch(addTodo(input))
//  setInput('')
//   }
//   return (
//     // <div>hello world</div>
//     <form className="loginBox" onSubmit={addTodoHandler} >
//       <div style={{display:"flex",flexDirection:"row",justifyContent:"space-around", width:300 }} > 
//                  <div><input placeholder="add todo" type="text" required className="loginInput" value={input} onChange={(e)=>setInput(e.target.value)}   /></div>  
//                  <div> <BasicButtons/></div>
//                  </div>
//           </form>
//   )
// }


////////    LOGIN    SECTION   STARTSS



import './login.css'
import { useState } from "react"
import { useNavigate } from "react-router-dom";
import {signInWithEmailAndPassword,signInWithPopup} from "firebase/auth";
import {auth,app} from '../../../firebase'
import {provider} from '../../../firebase'
import { useDispatch } from 'react-redux'
import {Loader} from '../../components/loader/loader.jsx'
import {addEmail,addId,addUsername} from '../../redux/slice'
// Initialize Firebase
 

export default function Login() {
  const [error,setError]=useState(false)
  const [email,setEmail]=useState("")
  const [user,setUser]=useState('')
  const [loader,setLoader]=useState(false)
  console.log(user)
  const navigate=useNavigate()
  
  const [password,setPassword]=useState("")
 
  const dispatch=useDispatch()
 
//login ith email
  const handleClick = (e) =>{
     e.preventDefault()
     setLoader(true)
     signInWithEmailAndPassword (auth, email, password)
     .then((userCredential) => {
       // Signed up 
       const user = userCredential.user;
       console.log(user)
       setUser(user)
       const userString = JSON.stringify(user.uid);
       localStorage.setItem("user", userString)
       dispatch(addId(user.uid))
       dispatch(addEmail(user.email))
       setError(false)
       navigate("/")
     })
     .catch((error) => {
      setLoader(false)
        setError(true)
        alert("Invalid Email")
     });
 };

const handleGoogleSignIn=()=>{
  signInWithPopup(auth,provider).then((result)=>{
const user=result.user
dispatch(addId(user.uid))
dispatch(addEmail(user.email))
dispatch(addUsername(""))
setUser(user)
navigate("/")
  }).catch((err)=>{
    setLoader(false)
    console.log(err)
  })
}


  return (
    <div className='login' >
        <div className="loginWrapper">
        {loader && <Loader />}  
            <div className="loginLeft">
                <h3 className="loginLogo">Social Media</h3>
                <span className="loginDesc">Connect with friends and the world around you on Social Media </span>
            </div>
            <div className="loginRight">
                <form className="loginBox" onSubmit={handleClick}>
                  <input placeholder="Email" type="email" onChange={e=>setEmail(e.target.value)}   required className="loginInput"    />
                  <input placeholder="Password" type="password" onChange={e=>setPassword(e.target.value)}   minLength={6} required className="loginInput"   />
                  <button className='loginButton' type='submit'  >Log In</button>
                  <span className="loginForgot">Forgot Password</span>
                  <button className="loginRegisterButton" onClick={handleGoogleSignIn} >Sign in with Google</button>
                </form>
            </div>
        </div>
      
    </div>
  )
}
