import React from 'react';
import '../css/Feed.css';
import StoryReel from './StoryReel';
import Message from './Message';
import Post from './Post';

const Feed = () => {
    return (
        <div className='feed'>
            <StoryReel />
            <Message />

            <Post
                profilePic='https://z-p3-scontent-ams4-1.xx.fbcdn.net/v/t1.0-9/542289_402106319836119_1844832892_n.jpg?_nc_cat=100&_nc_sid=cdbe9c&_nc_ohc=0lipnNBiYlIAX8bbt9M&_nc_ht=z-p3-scontent-ams4-1.xx&oh=7a99a8dfc15c04b99f7dfa91640b75a9&oe=5F7E4A81'
                message='This I hope works!'
                timestamp='Will be a timestamp'
                username='nwease'
                image='https://cdn.tz.nl/wp-content/uploads/2017/07/Code-1284x856.jpg'
            />

            <Post
                profilePic='https://z-p3-scontent-ams4-1.xx.fbcdn.net/v/t1.0-9/542289_402106319836119_1844832892_n.jpg?_nc_cat=100&_nc_sid=cdbe9c&_nc_ohc=0lipnNBiYlIAX8bbt9M&_nc_ht=z-p3-scontent-ams4-1.xx&oh=7a99a8dfc15c04b99f7dfa91640b75a9&oe=5F7E4A81'
                message='This I hope works!'
                timestamp='Will be a timestamp'
                username='nwease'
                image='https://www.marj3.com/wp-content/uploads/2019/01/Coding-body-image-.jpg'
            />

            <Post
                profilePic='https://z-p3-scontent-ams4-1.xx.fbcdn.net/v/t1.0-9/542289_402106319836119_1844832892_n.jpg?_nc_cat=100&_nc_sid=cdbe9c&_nc_ohc=0lipnNBiYlIAX8bbt9M&_nc_ht=z-p3-scontent-ams4-1.xx&oh=7a99a8dfc15c04b99f7dfa91640b75a9&oe=5F7E4A81'
                message='This I hope works!'
                timestamp='Will be a timestamp'
                username='nwease'
                image='https://www.hostinger.com/tutorials/wp-content/uploads/sites/2/2018/05/learn-coding-online-for-free.jpg'
            />
        </div>
    );
};

export default Feed;
