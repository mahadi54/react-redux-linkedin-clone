import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import HeaderOption from '../HeaderOption/HeaderOption';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';
import LoginIcon from '@mui/icons-material/Login';
import FaceIcon from '@mui/icons-material/Face';
import { useDispatch } from 'react-redux'
import { logout } from '../features/userSlice';
import { auth } from '../Firebase/Firebase';
import {selectUser} from '../features/userSlice'
import { useSelector } from 'react-redux'


function Header() {
  const user = useSelector(selectUser)
  
  const dispatch = useDispatch()
  const logoutApp=()=>{
    dispatch(logout())
    auth.signOut()
    
  }
  return (
    <div className='header'>
        <div className='header__left'>
            <img src='https://cdn-icons-png.flaticon.com/512/174/174857.png'/>
            <div className='header__search'>
                <SearchIcon/>
                <input placeholder='Search' type='text'/>

            </div>

        </div>
        <div className='header__right'>
           
                <HeaderOption Icon={HomeIcon} title='Home'/>
                <HeaderOption Icon={SupervisorAccountIcon} title='My Network'/>
                <HeaderOption Icon={HomeIcon} title='Home'/>
                <HeaderOption Icon={BusinessCenterIcon} title='Jobs'/>
                <HeaderOption Icon={ChatIcon} title='Messaging'/>
                <HeaderOption Icon={NotificationsIcon} title='Notifications'/>
                <HeaderOption handleClick={logoutApp} avatar={FaceIcon } title={user? user.displayName: 'Login'}/>
                
            

        </div>
    </div>
  )
}

export default Header