import React from 'react';
import '../css/Message.css';
import Avatar from '@material-ui/core/Avatar';

const Message = () => {
    return (
        <div className='message'>
            <div className='message__top'>
                <Avatar />

                <form action=''>
                    <input className='messageSender__input' placeholder={`Whats on your mind`} />
                    <input placeholder='image URL (optional' />

                    <button onClick={handleSubmit} type='submit'>
                        Hidden Submit
                    </button>
                </form>
            </div>

            <div className='message__bottom'>

            </div>
        </div>
    );
};

export default Message;