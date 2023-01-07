import React from 'react';
import { useSelector } from 'react-redux';
import NotifyItem from './NotifyItem';
import { Link } from 'react-router-dom';

function Notify({title, status = false, data = [], link}) {
    // const isNotifyOpen = useSelector(state => state.def.isNotifyOpen)
    const isDarkMode = useSelector(state => state.def.isDarkMode)

    return (
        <div className={`notify ${status&&'active'} notify--${isDarkMode&&'dark'}`}>
            <h3 className='notify__title'>{title}</h3>
            <ul className='notify__list'>
                {
                    data.map(notify => (
                        <NotifyItem key={notify.id} notify={notify} /> 
                    ))
                } 
            </ul>
            <a href='#' className='notify__footer'>
                <p><Link to={link}>More...</Link></p>
            </a>
        </div>
    );
}

export default Notify;
