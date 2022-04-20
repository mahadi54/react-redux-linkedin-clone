import React, { useEffect, useState } from 'react'
import './Feed.css'
import CreateIcon from '@mui/icons-material/Create';
import InputOption from '../InputOption/InputOption';
import ImageIcon from '@mui/icons-material/Image';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import EventNoteIcon from '@mui/icons-material/EventNote';
import CalendarViewDayIcon from '@mui/icons-material/CalendarViewDay';
import Post from '../Post/Post';
import { db } from '../Firebase/Firebase';
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'
import {selectUser} from '../features/userSlice'
import { useSelector } from 'react-redux'

function Feed() {
    const user = useSelector(selectUser)
    const [posts, setPosts] = useState([])
    const [input, setInput] = useState('')

    useEffect(()=>{
        db.collection('posts').orderBy('timestamp', 'desc').onSnapshot(snapshot => (
            setPosts(snapshot.docs.map(doc =>(
                {
                    id: doc.id,
                    data: doc.data()
                }
            )))
        ))
    }, [])

    const sendPost =(e)=>{
        e.preventDefault();
        db.collection('posts').add({
            name: user.displayName,
            description: 'test',
            message: input,
            photoUrl: user.photoUrl || '',
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        })

        setInput('')
        

    }
  return (
    <div className='feed'>
        <div className='feed__inputContainer'>
            <div className='feed__input'>
                <CreateIcon/>
                <form>
                    <input value={input} onChange={(e) => setInput(e.target.value)} type='text' />
                    <button onClick={sendPost} type='submit'>Send</button>
                </form>

            </div>
            <div className='feed__inputOptions'>
                <InputOption Icon={ImageIcon} title='Photo' color='#70B5F9'/>
                <InputOption Icon={SubscriptionsIcon} title='Video' color='#E7A33E'/>
                <InputOption Icon={EventNoteIcon} title='Event' color='#C0CBCD'/>
                <InputOption Icon={CalendarViewDayIcon} title='Write article' color='#7FC15E'/>

            </div>

        </div>
        {posts.map((post)=>{
            return (
                <Post 
                key={post.id}
                 name={post.data.name}
                 description={post.data.description} 
                message={post.data.message}
                 photoUrl={post.data.photoUrl}
                 />
            )
        })}
        

    </div>
  )
}

export default Feed