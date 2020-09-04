import React from 'react';
import '../css/SideBar.css';
import SideBarRow from './SideBarRow';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags';
import PeopleIcon from '@material-ui/icons/People';
import ChatIcon from '@material-ui/icons/Chat';
import StorefrontIcon from '@material-ui/icons/Storefront';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const SideBar = () => {
    return (
        <div className='sidebar'>
            <SideBarRow src='https://avatars2.githubusercontent.com/u/7059129?s=460&u=1c5eb78b3edcd4f1837a09e8b0e2d83fd1c6a8ec&v=4' title='Nicholas Wease' />
            <SideBarRow Icon={LocalHospitalIcon} title='COVID-19 Information Center' />
            <SideBarRow Icon={EmojiFlagsIcon} title='Pages' />
            <SideBarRow Icon={PeopleIcon} title='Friends' />
            <SideBarRow Icon={ChatIcon} title='Messenger'  />
            <SideBarRow Icon={StorefrontIcon} title='Marketplace'  />
            <SideBarRow Icon={VideoLibraryIcon} title='Videos'  />
            <SideBarRow Icon={ExpandMoreIcon} title='Marketplace'  />
        </div>
    );
};

export default SideBar;
