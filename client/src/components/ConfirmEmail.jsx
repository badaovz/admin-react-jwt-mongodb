import { useState } from 'react';
import { confirmUser } from '../redux/apiRequest';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

const ConfirmEmail = () => {
    const [email, setEmail] = useState('');
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleConfirm = (e) => {
        e.preventDefault();
        const user = {
            email,
        };
        confirmUser(user, dispatch, navigate);
    };

    return (
        <div className='compConfirm'>
            <h3 className='compConfirm__title'>Your email registered</h3>
            <div className='compConfirm__form'>
                <form className='form-group' onSubmit={handleConfirm}>
                    <label htmlFor='name' className='form-group__label'>
                        Email
                    </label>
                    <input
                        type='email'
                        id='name'
                        className='form-group__input'
                        placeholder='Your email'
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                    />
                    <button className='form-group__btn'>Send</button>
                    <p className='form-group__login'>
                        <Link to='/login'>login?</Link>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default ConfirmEmail;
