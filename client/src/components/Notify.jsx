import React from 'react';
import { Link } from 'react-router-dom';
import NotifyItem from './NotifyItem';

function Notify({title, status = false, data = [], link}) {

    return (
        <div className={`notify ${status&&'active'} `}>
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
