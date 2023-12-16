import React, { useState } from 'react'
import "./signup.css"
import { useDispatch } from 'react-redux'
import {addEmail,addId,addUsername} from '../../redux/slice'
import { initializeApp } from "firebase/app";
import {Loader} from '../../components/loader/loader.jsx'
import {
  getAuth,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import {
  getFirestore,
  setDoc,
  doc,
  serverTimestamp
} from "firebase/firestore";
import { useNavigate } from 'react-router-dom';
const firebaseConfig = {
  apiKey: "AIzaSyB7RKcKzqs9p6j7tpAl_0mDw1NGJNOcvO0",
  authDomain: "hackathon-da64c.firebaseapp.com",
  projectId: "hackathon-da64c",
  storageBucket: "hackathon-da64c.appspot.com",
  messagingSenderId: "343575542897",
  appId: "1:343575542897:web:363fef7a179c8bc386efd0"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
 
 

export default function signup() {
  const navigate=useNavigate()
  const [username,setUsername]=useState("")
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  const [againpassword,setAgainPassword]=useState("")
  const [loader,setLoader]=useState(false)
  const dispatch=useDispatch()
 
  console.log(email)
  console.log(password)
  console.log(username)

// login handler
const loginHandler=()=>{
navigate("/login")
}

  // signup handler
  const signupHandler=async(e)=>{
    e.preventDefault()
    try{
      if(password==againpassword){
        setLoader(true)
      const res=await createUserWithEmailAndPassword(
        auth,
        email,
        password
      )
   
      const response= await setDoc(doc(db, "users",res.user.uid), {
        
        userName:username,
              Email: email,
              profilePicture:"",
              uid:res.user.uid,
        timeStamp:serverTimestamp()
      }); 
      dispatch(addUsername(username))
      navigate('/login')
      }else{
        setLoader(false)
        alert("please write same password")
      }
      
      
    }catch(err){
      setLoader(false)
    alert(err.message)
    }
  }

  return (
     
    <div className='login' >
    
        <div className="loginWrapper">
       {loader && <Loader />}  
            <div className="loginLeft">
         
                <h3 className="loginLogo">Social Media</h3>
                <span className="loginDesc">Connect with friends and the world around you on Social Media</span>
            </div>
             
            <div className="loginRight">
         
                <form className="loginBox" onSubmit={signupHandler}  >
                  <input placeholder="Username" required onChange={e=>setUsername(e.target.value)}  className="loginInput" />
                  <input placeholder="Email"  required type='email' onChange={e=>setEmail(e.target.value)}  className="loginInput" />
                  <input placeholder="Password"  required type='password' onChange={e=>setPassword(e.target.value)}  minLength="6" className="loginInput" />
                  <input placeholder="Password Again"  required type='password' onChange={e=>setAgainPassword(e.target.value)}  className="loginInput" />
                  <button className='loginButton' type='submit' >Sign Up</button>
                 
                  <button className="loginRegisterButton" onClick={loginHandler} >Log into Account</button>
                </form>
            </div>
        </div>
      
    </div>
  )
}
