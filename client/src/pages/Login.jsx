import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { loginUser } from '../redux/apiRequest';
import { useDispatch, useSelector } from 'react-redux';
import { confirmStart } from '../redux/authSlice';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';

const Login = () => {
    const [show, setShow] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const message = useSelector((state) => state.auth.login?.message);
    console.log('Message: ', message);

    const handleLogin = (e) => {
        e.preventDefault();
        const user = {
            username,
            password,
        };
        loginUser(user, dispatch, navigate);
    };
    return (
        <main>
            <div className='login'>
                <h3 className='login__title'>Login</h3>
                <div className='login__form'>
                    <form className='form-group' onSubmit={handleLogin}>
                        <div className='form-group__item'>
                            <label
                                htmlFor='name'
                                className='form-group__label'
                            >
                                User name
                            </label>
                            <div className='form-group__input'>
                                <input
                                    type='text'
                                    id='name'
                                    placeholder='your name'
                                    onChange={(e) =>
                                        setUsername(e.target.value)
                                    }
                                    value={username}
                                />
                            </div>
                        </div>

                        <div className='form-group__item'>
                            <label
                                htmlFor='pass'
                                className='form-group__label'
                            >
                                Password
                            </label>
                            <div className='form-group__input'>
                                <input
                                    type={`${show ? 'text' : 'password'}`}
                                    id='pass'
                                    placeholder='your password'
                                    onChange={(e) =>
                                        setPassword(e.target.value)
                                    }
                                    value={password}
                                />
                                <span
                                    className={`icon form-group__icon ${
                                        show ? null : 'show'
                                    }`}
                                    onClick={() => setShow(!show)}
                                >
                                    <VisibilityOffOutlinedIcon />
                                </span>
                                <span
                                    className={`icon form-group__icon ${
                                        show ? 'show' : null
                                    }`}
                                    onClick={() => setShow(!show)}
                                >
                                    <VisibilityOutlinedIcon />
                                </span>
                            </div>
                            {message && (
                                <p className='form-group__message'>
                                    {message}
                                </p>
                            )}
                        </div>
                        <div className='form-group__more'>
                            <Link
                                to='/login/forgot'
                                //set confirm code = null
                                onClick={() => dispatch(confirmStart())}
                            >
                                forgot password?
                            </Link>
                            <Link to='/users/new'>Register!</Link>
                        </div>
                        <button className='form-group__btn'>Login</button>
                    </form>
                </div>
            </div>
        </main>
    );
};

export default Login;
