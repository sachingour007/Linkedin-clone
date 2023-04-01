import { Avatar } from '@mui/material';
import React,{forwardRef} from 'react'
import InputOptions from './InputOptions';
import post from './Post.module.css';

//Icons
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import RepeatOnOutlinedIcon from '@mui/icons-material/RepeatOnOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';


const Post = forwardRef(({name, description, message, photoUrl}, ref) => {
  return (
    <div ref={ref} className={post.post}>
        <div className={post.post_header}>
            <Avatar src={photoUrl}>{name[0]}</Avatar>
            <div className={post.post_info}>
                <h2>{name}</h2>
                <p>{description}</p>
            </div>
        </div>
        <div className={post.post_body}>
            <p>{message}</p>
        </div>
        <div className={post.post_buttons}>
            <InputOptions Icon ={ThumbUpOutlinedIcon} title="Like"
             color='gray'/>
            <InputOptions Icon ={ChatOutlinedIcon} title="Comment"
             color='gray'/>
            <InputOptions Icon ={RepeatOnOutlinedIcon} title="Repost"
             color='gray'/>
            <InputOptions Icon ={SendOutlinedIcon} title="Send"
             color='gray'/>
        </div>
    </div>
  )
})

export default Post