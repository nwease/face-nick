import React from 'react';
import '../css/Story.css';
import Avatar from '@material-ui/core/Avatar';

const Story = ({image, title, profileSrc}) => {
    return (
        <div style={{backgroundImage: `url(${image}`}} className='story'>
            <Avatar className='story__avatar' src={profileSrc} />

            <h4>
                {title}
            </h4>
        </div>
    );
};

export default Story;
