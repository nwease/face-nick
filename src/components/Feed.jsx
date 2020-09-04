import React from 'react';
import '../css/Feed.css';
import StoryReel from './StoryReel';
import Message from './Message';

const Feed = () => {
    return (
        <div className='feed'>
            <StoryReel />
            <Message />
        </div>
    );
};

export default Feed;
