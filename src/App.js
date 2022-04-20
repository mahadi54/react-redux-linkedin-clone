import React, { useEffect } from 'react';
import {useSelector} from 'react-redux'
import { useDispatch } from 'react-redux'
import { login, logout, selectUser } from './features/userSlice';
import Header from './Header/Header';
import './App.css';
import Sidebar from './Sidebar/Sidebar';
import Feed from './Feed/Feed';
import Login from './Login/Login';
import { auth } from './Firebase/Firebase';

function App() {

  const user = useSelector(selectUser)
  const dispatch = useDispatch()


  useEffect(()=>{
    auth.onAuthStateChanged(userAuth =>{

      if(userAuth){
        dispatch(login({
          email: userAuth.email,
          uid: userAuth.uid,
          displayName: userAuth.displayName,
          photoUrL: userAuth.photoURL,
        }))

      } else{
        dispatch(logout())

      }
    })
  }, [])
  return (
    <div className="app">
      <Header/>
      {!user ? <Login/> : (
        <div className='app_body'>
          <Sidebar />  
          <Feed />
      </div>

      )}
      
      
    </div>
  );
}

export default App;
