import React from 'react';
import '../css/Header.css';
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';

const Header = () => {
    return (
        <div className='header'>
            <div className="header__left">
                <img
                    src='https://www.kloeckner.nl/wp-content/uploads/sites/15/2019/03/facebook-round-logo-png-transparent-background-12-891.png'
                    alt='Facebook Logo'
                />

                <div className='header__input'>
                    <SearchIcon />

                    <input type='text'/>
                </div>
            </div>

            <div className='header__center'>
                <div className='header__option'>
                    <HomeIcon />
                </div>
            </div>

            <div className='header__right'>

            </div>
        </div>
    );
};

export default Header;
