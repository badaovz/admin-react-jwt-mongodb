import React from 'react';
import imageDefault from '../assets/defaultUser.png'
import { useSelector } from 'react-redux';

const UserInfo = ({data}) => {
    const {_id, username, phone, img, country, email, address, age} = data;
    const user = useSelector(state => state.auth.login?.currentUser);

    return (
        <div className='compInfo'>
            {user.isAdmin&&<p className="compInfo__edit">Edit</p>}
            <h5 className="compInfo__title">
                Information
            </h5>
            <div className="compInfo__container">
                <img src={img||imageDefault} alt="img" className="compInfo__img" />
                <div className="compInfo__content">
                    <h3 className="compInfo__text">
                        {username}
                    </h3>
                    <p className="compInfo__text">
                        <span>Age: </span> {age}
                    </p>
                    <p className="compInfo__text">
                        <span>Email: </span> {email}
                    </p>
                    <p className="compInfo__text">
                        <span>Phone: </span> {phone}
                    </p>
                    <p className="compInfo__text">
                        <span>Address: </span> {address}
                    </p>
                    <p className="compInfo__text">
                        <span>Country: </span> {country}
                    </p>

                </div>
            </div>
        </div>
    );
}

export default UserInfo;
