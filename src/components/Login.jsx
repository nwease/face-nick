import React from 'react';
import '../css/Login.css';
import Button from '@material-ui/core/Button';
import {auth, provider} from '../firebase';
import {useStateValue} from '../Provider';
import {actionTypes} from '../reducer';

const Login = () => {

    const [state, dispatch] = useStateValue();

    const signIn = () => {
        auth.signInWithPopup(provider)
            .then(result => {
                dispatch({
                    type: actionTypes.SET_USER,
                    user: result.user,
                })
                console.log(result.user)
            })
            .catch((error) => alert(error.message));
    }

    return (
        <div className='login'>
            <div className='login__logo'>
                <img
                    src='https://facebookbrand.com/wp-content/uploads/2019/04/f_logo_RGB-Hex-Blue_512.png?w=512&h=512'
                    alt='Facebook Logo'
                />

                <img
                    src='https://www.logo.wine/a/logo/Facebook/Facebook-Logo.wine.svg'
                    alt=''
                />
            </div>

            <Button type='submit' onClick={signIn}>
                Sign In
            </Button>
        </div>
    );
};

export default Login;
