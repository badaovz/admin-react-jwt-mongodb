import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import LightModeIcon from '@mui/icons-material/LightMode';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import defaultUser from '../assets/defaultUser.png';
import defaultImage from '../assets/no-image.png';
import { messages, notifies } from '../data';
import { messageToggle, modeToggle, notifyToggle, openSidebar } from '../redux/deferenceSlice';
import Notify from './Notify';
import { useEffect } from 'react';

const Navbar = () => {
    const user = useSelector((state) => state.auth.login?.currentUser);
    const isNotifyOpen = useSelector(state => state.def.isNotifyOpen)
    const isMessageOpen = useSelector(state => state.def.isMessageOpen)
    const isDarkMode = useSelector(state => state.def.isDarkMode)

    const dispatch = useDispatch();

    const handleOpenSidebar = () => {
        dispatch(openSidebar());
    };
    const handleToggleNotify = () => {
        if(isMessageOpen){
            dispatch(messageToggle())
        }
        dispatch(notifyToggle());
    };
    const handleToggleMessage = () => {
        if(isNotifyOpen) {
            dispatch(notifyToggle())
        }
        dispatch(messageToggle());
    };

    const handleModeToggle = () => {
        dispatch(modeToggle())
    }

    useEffect(() => {
        if(isDarkMode) {
            document.body.classList.add('dark')
        }else {
            document.body.classList.remove('dark')
        }
    }, [isDarkMode])

    return (
        <div className={`navbar`}>
            <div className='navbar__menu-logo'>
                {user && (
                    <span
                        className='navbar__menu'
                        onClick={handleOpenSidebar}
                    >
                        <MenuOutlinedIcon />
                    </span>
                )}
                <Link to='/' className='navbar__logo'>
                    <AdminPanelSettingsIcon className='icon--large'/>
                    <span> Admin</span>
                </Link>
            </div>
            <div className='navbar__container'>
                {/* <div className='navbar__container__search'>
                    <input
                        type='text'
                        className='navbar__container__search__input'
                        placeholder='Search'
                    />
                    <span>
                        <SearchOutlinedIcon />
                    </span>
                </div> */}
                <div></div>
                <div className='navbar__right'>
                    <div className='navbar__item'>
                        <LanguageOutlinedIcon className='icon' />
                        <p>English</p>
                    </div>
                    <div className='navbar__item' onClick={handleModeToggle}>
                       {isDarkMode ?  <LightModeIcon className='icon' /> : <DarkModeOutlinedIcon className='icon' />}
                    </div>
                    <div className='navbar__item' onClick={handleToggleNotify}>
                        <NotificationsNoneOutlinedIcon className='icon' />
                        <span>{notifies.length}</span>
                        <Notify title='Notifications' status={isNotifyOpen} data={notifies} link='/notifications' />
                    </div>
                    <div className='navbar__item' onClick={handleToggleMessage}>
                        <ChatBubbleOutlineOutlinedIcon className='navbar__icon' />
                        <span>{notifies.length}</span>
                        <Notify title='Message' status={isMessageOpen} data={messages} link='/messages' />
                    </div>
                    <Link className='navbar__item' to={user ? '/profile' : '/login'}>
                        <p>
                            <img
                                src={user ? user?.img || defaultImage : defaultUser}
                                alt='avatar'
                            />
                        </p>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
