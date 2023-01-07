import PhotoIcon from '@mui/icons-material/Photo';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { registerUser } from '../redux/apiRequest';

const New = ({ name, infos }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [file, setFile] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [phone, setPhone] = useState('');
    const [age, setAge] = useState();
    const [address, setAddress] = useState('');
    const [country, setCountry] = useState('');
    const [status, setStatus] = useState('active');
    const [img, setImg] = useState('');
    // const {id, label, type, placeholder} = infos;

    const handleRegister = (e) => {
        e.preventDefault();
        const newUser = {
            username,
            phone,
            password,
            img,
            status,
            email,
            address,
            country,
            age,
        };

        registerUser(newUser, dispatch, navigate);
    };

    return (
        <div className='new'>
            <h3 className='new__title'>Add new {name}</h3>
            <div className='new__content'>
                <div className='new__image'>
                    {/* <label htmlFor='file' className="new__container__image__label">
                        <span>choose image</span>
                        <DriveFolderUploadOutlinedIcon />
                    </label>
                    <input 
                        id='file'
                        type='file'
                        className="new__container__image__input" 
                        onChange={(e) => setFile(e.target.files[0])}
                        style={{display: 'none'}}
                    /> */}
                    <label htmlFor='file' className='new____label'>
                        <span>Image Preview</span>
                    </label>
                    {img ? (
                        <label htmlFor='file'>
                            <img
                                className='new__img active'
                                src={img}
                                alt='img'
                            />
                        </label>
                    ) : (
                        <label htmlFor='file'>
                            <PhotoIcon className='new__img' />
                        </label>
                    )}
                </div>
                {name === 'user' ? (
                    <div className='new__form'>
                        <form
                            className='form-group'
                            onSubmit={handleRegister}
                        >
                            <div className='form-group__item'>
                                <p className='form-group__label'>
                                    Username
                                </p>
                                <input
                                    type='text'
                                    className='form-group__input'
                                    placeholder='Your name'
                                    onChange={(e) =>
                                        setUsername(e.target.value)
                                    }
                                    value={username}
                                />
                            </div>
                            <div className='form-group__item'>
                                <p className='form-group__label'>
                                    Email
                                </p>
                                <input
                                    type='email'
                                    className='form-group__input'
                                    placeholder='Your email'
                                    onChange={(e) => setEmail(e.target.value)}
                                    value={email}
                                />
                            </div>
                            <div className='form-group__item'>
                                <p className='form-group__label'>
                                    Password
                                </p>
                                <input
                                    type='password'
                                    className='form-group__input'
                                    placeholder='Your password'
                                    onChange={(e) =>
                                        setPassword(e.target.value)
                                    }
                                    value={password}
                                />
                            </div>
                            <div className='form-group__item'>
                                <p className='form-group__label'>
                                    Phone
                                </p>
                                <input
                                    type='text'
                                    className='form-group__input'
                                    placeholder='Your phone'
                                    onChange={(e) => setPhone(e.target.value)}
                                    value={phone}
                                />
                            </div>
                            <div className='form-group__item'>
                                <p className='form-group__label'>
                                    Age
                                </p>
                                <input
                                    type='number'
                                    className='form-group__input'
                                    placeholder='Your age'
                                    onChange={(e) => setAge(e.target.value)}
                                    value={age}
                                />
                            </div>
                            <div className='form-group__item'>
                                <p className='form-group__label'>
                                    Address
                                </p>
                                <input
                                    type='text'
                                    className='form-group__input'
                                    placeholder='Your address'
                                    onChange={(e) => setAddress(e.target.value)}
                                    value={address}
                                />
                            </div>
                            <div className='form-group__item'>
                                <p className='form-group__label'>
                                    Country
                                </p>
                                <input
                                    type='text'
                                    className='form-group__input'
                                    placeholder='Your country'
                                    onChange={(e) => setCountry(e.target.value)}
                                    value={country}
                                />
                            </div>
                            <div className='form-group__item'>
                                <p className='form-group__label'>
                                    Status
                                </p>
                                <select
                                    className='form-group__input'
                                    onChange={(e) => setStatus(e.target.value)}
                                >
                                    <option value='active'>Active</option>
                                    <option value='passive'>Passive</option>
                                    <option value='pending'>Pending</option>
                                </select>
                            </div>
                            <div className='form-group__item'>
                                <p className='form-group__label'>
                                    Image
                                </p>
                                <input
                                    type='text'
                                    className='form-group__input'
                                    placeholder='Your image url'
                                    onChange={(e) => setImg(e.target.value)}
                                    value={img}
                                />
                            </div>

                            <button className='form-group__btn'>
                                send
                            </button>
                        </form>
                    </div>
                ) : (
                    <div className='form-group'>
                        {infos.map((i) => (
                            <div
                                className='form-group__item'
                                key={i.id}
                            >
                                <p className='form-group__label'>
                                    {i.label}
                                </p>
                                <input
                                    type={i.type}
                                    className='form-group__input'
                                    placeholder={i.placeholder}
                                />
                            </div>
                        ))}
                        <Link
                            style={{ textAlign: 'center' }}
                            to={`/${name}s`}
                            className='form-group__btn'
                        >
                            Send
                        </Link>
                    </div>
                )}
            </div>
        </div>
    );
};

export default New;
