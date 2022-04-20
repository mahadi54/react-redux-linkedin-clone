import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { auth } from '../Firebase/Firebase'
import './Login.css'
import { login } from '../features/userSlice'

function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')
    const [profilePic, setProfilePic] = useState('')
    const dispatch = useDispatch()

    const loginToApp =(e)=>{
        e.preventDefault();
        auth.signInWithEmailAndPassword(email, password)
        .then(userAuth =>{

            dispatch(login({
                email: userAuth.user.email,
                uid: userAuth.user.uid,
                displayName: userAuth.user.displayName,
                profileUrl: userAuth.user.photoURL

            }))
        }).catch(error => alert(error))


    }
    const register =()=>{
        if(!name){
            return alert('please enter full name')
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
                    photoUrL: profilePic

                }))

            })

        }).catch(error => alert(error))


    }
  return (
    <div className='login'>
        <img src='https://cdn-icons-png.flaticon.com/512/174/174857.png'/>
        <form>
            <input value={name} onChange={(e)=> setName(e.target.value)}  type='text' placeholder='Full name' />
            <input value={profilePic} onChange={(e)=> setProfilePic(e.target.value)} type='text' placeholder='Profile pic url (optional)' />
            <input value={email} onChange={(e)=> setEmail(e.target.value)} type='email' placeholder='Email' />
            <input value={password} onChange={(e)=> setPassword(e.target.value)} type='password' placeholder='Password' />
            <button type='submit' onClick={loginToApp}>Sign in</button>
        </form>
        <p>Not a member? <span className='login__register' onClick={register}>Register Now</span></p>

    </div>
  )
}

export default Login