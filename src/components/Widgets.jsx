import React from 'react';
import '../css/Widgets.css';

const Widgets = () => {
    return (
        <div className='widgets'>
            <iframe
                src='https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Ffacebook&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=1274162519347009'
                width='340'
                height='500'
                style={{border:'none', overflow:'hidden'}}
                scrolling='no'
                frameBorder='0'
                allowTransparency='true'
                allow='encrypted-media'
                title='Facebook'
            >
                Facebook
            </iframe>
        </div>
    );
};

export default Widgets;
