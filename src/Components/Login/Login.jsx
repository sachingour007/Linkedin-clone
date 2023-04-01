import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { auth } from "../firebase";
import login from "./Login.module.css";

const Login = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [profilePic, setProfilePic] = useState("");
  const dispatch = useDispatch()

  const register = () => {
    if(!name){
      return alert('Please enter a Full name !')
    }

    auth.createUserWithEmailAndPassword(email, password)
    .then((userAuth)=>{
      userAuth.user.updateProfile({
        displayName: name,
        photoURL: profilePic,
      })
      .then(()=>{
        dispatch(login({
          email: userAuth.user.email,
          uid: userAuth.user.uid,
          displayName: name,
          photoURL: profilePic
        }))
      })
    }).catch((error) => alert(error.massege))
  };

  const loginToApp = (e) => {
    e.preventDefault();
    auth.signInWithEmailAndPassword(email, password)
    .then(userAuth => {
      dispatch(login({
        email: userAuth.user.email,
        uid: userAuth.user.uid,
        displayName: userAuth.user.displayName,
        profileUrl: userAuth.user.photoURL,
      }))
    }).catch((error)=> alert(error))
  };
  // console.log(name,email, password);
  return (
    <div className={login.login}>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/LinkedIn_Logo.svg/1200px-LinkedIn_Logo.svg.png"
        alt=""
      />
      <form>
        <input type="text" placeholder="Full name (required if registering)" 
        value={name} onChange={(e)=> setName(e.target.value)}/>
        <input type="text" placeholder="Profile pic url (optional)"
        value={profilePic} onChange={(e)=> setProfilePic(e.target.value)} />
        <input type="email" placeholder="Email" 
        value={email} onChange={(e)=> setEmail(e.target.value)} />
        <input type="password" placeholder="password" 
        value={password} onChange={(e)=> setPassword(e.target.value)} />
        <button type="submit" onClick={loginToApp}>
          Sign In
        </button>
      </form>
      <p>
        Not a member?
        <span className={login.login_register} onClick={register}>
          Register Now
        </span>
      </p>
    </div>
  );
};

export default Login;
