import React from 'react';
import { useSelector } from 'react-redux';

function NotifyItem({ notify }) {
    const { title, desc, img } = notify;
    const isDarkMode = useSelector(state => state.def.isDarkMode)
    return (
        <li className={`notifyItem notifyItem--${isDarkMode&&'dark'}`}>
            <a href='#' className='notifyItem__link'>
                <img
                    className='notifyItem__img'
                    src={img}
                    alt='img'
                />
                <div className='notifyItem__content'>
                    <h4>{title}</h4>
                    <p>{desc}</p>
                </div>
            </a>
        </li>
    );
}

export default NotifyItem;
