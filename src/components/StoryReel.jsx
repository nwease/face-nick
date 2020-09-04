import React from 'react';
import '../css/StoryReel.css';
import Story from './Story';

const StoryReel = () => {
    return (
        <div className='storyReel'>
            <Story
                image='https://z-p3-scontent-amt2-1.xx.fbcdn.net/v/t31.0-0/c73.0.206.206a/p206x206/1962127_10153162554030744_2053624338467567982_o.jpg?_nc_cat=106&_nc_sid=da31f3&_nc_ohc=W7DtLfpFMzwAX8URPW8&_nc_ht=z-p3-scontent-amt2-1.xx&oh=7317792d91f405b00f512789f93c2c39&oe=5F785090'
                profileSrc='https://avatars2.githubusercontent.com/u/7059129?s=460&u=1c5eb78b3edcd4f1837a09e8b0e2d83fd1c6a8ec&v=4'
                title='Nicholas Wease'
            />

            <Story
                image='https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80'
                profileSrc='https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80'
                title='Hot'
            />

            <Story
                image='https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
                profileSrc='https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
                title='Hot Woman'
            />

            <Story
                image='https://images.unsplash.com/photo-1589571894960-20bbe2828d0a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
                profileSrc='https://images.unsplash.com/photo-1589571894960-20bbe2828d0a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
                title='Another Hottie'
            />

            <Story
                image='https://images.unsplash.com/photo-1545912453-db258ca9b7b7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
                profileSrc='https://images.unsplash.com/photo-1545912453-db258ca9b7b7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
                title='Still Hot'
            />
        </div>
    );
};

export default StoryReel;
