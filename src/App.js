import "./App.css";
import Feed from "./Components/Feed/Feed";
import Header from "./Components/Header/Header";
import Sidebar from "./Components/Sidebar/Sidebar";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./features/userSlice";
import Login from "./Components/Login/Login";
import { useEffect } from "react";
import { auth } from "./Components/firebase";
import Widgets from "./Components/Widgets/Widgets";


function App({store}) {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(()=>{
    auth.onAuthStateChanged((userAuth)=>{
      if(userAuth){
        dispatch(login({
          email: userAuth.email,
          uid: userAuth.uid,
          displayName: userAuth.displayName,
          photoURL: userAuth.photoURL,
        }))

      }else{
        //user is logged out
        dispatch(logout());
      }

    })

  },[dispatch])

  return (
    
    <div className="App">
      <Header />
     
      {!user ? (
        <Login />
      ) : (
        <div className="app_body">
          <Sidebar />
          <Feed />
          <Widgets />
        </div>
      )} 
    </div>
    
  );
}

export default App;
