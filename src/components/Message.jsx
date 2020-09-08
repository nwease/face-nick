import React, {useState} from 'react';
import '../css/Message.css';
import Avatar from '@material-ui/core/Avatar';
import VideocamIcon from '@material-ui/icons/Videocam';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';

const Message = () => {

    const [input, setInput] = useState('');
    const [imageUrl, setImageUrl] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        setInput('');
        setImageUrl('');
    }

    return (
        <div className='message'>
            <div className='message__top'>
                <Avatar />

                <form>
                    <input
                        value={input}
                        onChange={e => setInput(e.target.value)}
                        className='messageSender__input'
                        placeholder={`Whats on your mind?`}
                    />
                    <input
                        value={imageUrl}
                        onChange={e => setImageUrl(e.target.value)}
                        placeholder='image URL (optional'
                    />

                    <button onClick={handleSubmit} type='submit'>
                        Hidden Submit
                    </button>
                </form>
            </div>

            <div className='message__bottom'>
                <div className='messageSender__option'>
                    <VideocamIcon style={{color: 'red'}} />

                    <h3>
                        Live Video
                    </h3>
                </div>

                <div className='messageSender__option'>
                    <PhotoLibraryIcon style={{color: 'green'}} />

                    <h3>
                        Photo/Video
                    </h3>
                </div>

                <div className='messageSender__option'>
                    <InsertEmoticonIcon style={{color: 'red'}} />

                    <h3>
                        Feeling/Activity
                    </h3>
                </div>
            </div>
        </div>
    );
};

export default Message;