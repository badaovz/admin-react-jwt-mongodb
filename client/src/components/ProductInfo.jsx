import React from 'react';
import { useSelector } from 'react-redux';

const ProductInfo = ({data}) => {
    const { productName, code, img, address, country, status} = data;
    const user = useSelector(state => state.auth.login?.currentUser);

    return (
        <div className='compInfo'>
            {user.isAdmin&&<p className="compInfo__edit">Edit</p>}
            <h5 className="compInfo__title">
                Information
            </h5>
            <div className="compInfo__container">
                <img src={img} alt="img" className="compInfo__img" />
                <div className="compInfo__content">
                    <h3 className="compInfo__text">
                        {productName}
                    </h3>
                    <p className="compInfo__text">
                        <span>Status: </span> {status}
                    </p>
                    <p className="compInfo__text">
                        <span>Code: </span> {code}
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

export default ProductInfo;
