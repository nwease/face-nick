import React from 'react';
import '../css/SideBarRow.css';
import Avatar from '@material-ui/core/Avatar';

const SideBarRow = ({title, src, Icon}) => {
    return (
        <div className='sidebarRow'>
            {src && <Avatar src={src} />}

            {Icon && <Icon />}

            <h4>
                {title}
            </h4>
        </div>
    );
};

export default SideBarRow;
