import { useState } from 'react';
import { resetPass } from '../redux/apiRequest';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

const ResetPass = () => {
    const [newPassword, setNewPassword] = useState('');
    const [code, setCode] = useState(undefined);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleResetPass = (e) => {
        e.preventDefault();
        const user = {
            newPassword,
            code,
        };
        resetPass(user, dispatch, navigate);
    };

    return (
        <div className='compConfirm'>
            <h3 className='compConfirm__title'>Reset your password</h3>
            <div className='compConfirm__form'>
                <form className='form-group' onSubmit={handleResetPass}>
                    <label htmlFor='name' className='form-group__label'>
                        New Password
                    </label>
                    <input
                        type='password'
                        id='name'
                        className='form-group__input'
                        placeholder='New password'
                        onChange={(e) => setNewPassword(e.target.value)}
                        value={newPassword}
                    />
                    <label htmlFor='code' className='form-group__label'>
                        Confirm code in your email
                    </label>
                    <input
                        type='number'
                        id='code'
                        className='form-group__input'
                        placeholder='Your code'
                        onChange={(e) => setCode(e.target.value)}
                        value={code}
                    />
                    <button className='form-group__btn'>Send</button>
                </form>
            </div>
        </div>
    );
};

export default ResetPass;
