import React from 'react';
import '../css/Header.css';
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import FlagIcon from '@material-ui/icons/Flag';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import StorefrontIcon from '@material-ui/icons/Storefront';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import AddIcon from '@material-ui/icons/Add';
import ForumIcon from '@material-ui/icons/Forum';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Avatar, IconButton } from '@material-ui/core';

const Header = () => {
    return (
        <div className='header'>
            <div className='header__left'>
                <img
                    src='https://facebookbrand.com/wp-content/uploads/2019/10/flogo_RGB_HEX-BRC-Site-250.png?w=250&h=250'
                    alt='Facebook Logo'
                />

                <div className='header__input'>
                    <SearchIcon />

                    <input placeholder='Search Facebook' type='text'/>
                </div>
            </div>

            <div className='header__center'>
                <div className='header__option header__option--active'>
                    <HomeIcon fontSize='large' />
                </div>

                <div className='header__option'>
                    <FlagIcon fontSize='large' />
                </div>

                <div className='header__option'>
                    <SubscriptionsIcon fontSize='large' />
                </div>

                <div className='header__option'>
                    <StorefrontIcon fontSize='large' />
                </div>

                <div className='header__option'>
                    <SupervisedUserCircleIcon fontSize='large' />
                </div>
            </div>

            <div className='header__right'>
                <div className='header__information'>
                    <Avatar />

                    <h4>
                        Nicholas Wease
                    </h4>
                </div>

                <IconButton>
                    <AddIcon />
                </IconButton>

                <IconButton>
                    <ForumIcon />
                </IconButton>

                <IconButton>
                    <NotificationsActiveIcon />
                </IconButton>

                <IconButton>
                    <ExpandMoreIcon />
                </IconButton>
            </div>
        </div>
    );
};

export default Header;
