import { Avatar } from '@mui/material'
import React from 'react'
import InputOption from '../InputOption/InputOption'
import './Post.css'
import ThumbUpOffAltOutlinedIcon from '@mui/icons-material/ThumbUpOffAltOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
function Post({name, description, message, photoUrl}) {
  return (
    <div className='post'>
        <div className='post__header'>
            <Avatar src={photoUrl}>{name[0]}</Avatar>
            <div className='post__info'>
                <h2>{name}</h2>
                <p>{description}</p>

            </div>
        </div>
        <div className='post__body'>
            <p>{message}</p>

        </div>
        <div className='post__button'>
            <InputOption Icon={ThumbUpOffAltOutlinedIcon} title='Like' color='gray' />
            <InputOption Icon={ChatBubbleOutlineOutlinedIcon} title='Comment' color='gray' />
            <InputOption Icon={ShareOutlinedIcon} title='Share' color='gray' />
            <InputOption Icon={SendOutlinedIcon} title='Send' color='gray' />

        </div>

    </div>
  )
}

export default Post