import { Avatar } from '@mui/material'
import React from 'react'
import './HeaderOption.css'
import {selectUser} from '../features/userSlice'
import { useSelector } from 'react-redux'

function HeaderOption(props) {
   const user = useSelector(selectUser)
  return (
    <div onClick={props.handleClick} className='headerOption'>
        {props.Icon && <props.Icon className='headerOption__icon'/>}
        {props.avatar && (
          <Avatar className='headerOption__icon' src={props.avatar} ></Avatar>
        )}
        <h3 className='headerOption__title'>{props.title}</h3>

    </div>
  )
}

export default HeaderOption