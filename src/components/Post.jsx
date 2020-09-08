import React from 'react';
import '../css/Post.css';
import Avatar from '@material-ui/core/Avatar';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import NearMeIcon from '@material-ui/icons/NearMe';
import ExpandMoreOutlinedIcon from '@material-ui/icons/ExpandMoreOutlined';

const Post = ({profilePic, image, username, timestamp, message}) => {
    return (
        <div className='post'>
            <div className='post__top'>
                <Avatar src={profilePic} className='post__avatar'/>

                <div className='post__topInfo'>
                    <h3>
                        {username}
                    </h3>

                    <p>
                        Timestamp
                        {/*{new Date(timestamp?.toDate()).toUTCString()}*/}
                    </p>
                </div>
            </div>

            <div className='post__bottom'>
                <p>
                    {message}
                </p>
            </div>

            <div className='post__image'>
                <img src={image} alt=''/>
            </div>

            <div className='post__options'>
                <div className='post__option'>
                    <ThumbUpIcon />

                    <p>
                        Like
                    </p>
                </div>

                <div className='post__option'>
                    <ChatBubbleOutlineIcon />

                    <p>
                        Comment
                    </p>
                </div>

                <div className='post__option'>
                    <NearMeIcon />

                    <p>
                        Share
                    </p>
                </div>

                <div className='post__option'>
                    <AccountCircleOutlinedIcon />
                    <ExpandMoreOutlinedIcon />
                </div>
            </div>
        </div>
    );
};

export default Post;
