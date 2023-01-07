import { useState } from "react";
import {dataNav} from "../data";
import { Link, useNavigate, useLocation } from 'react-router-dom';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import { useDispatch, useSelector } from 'react-redux';
import { closeSidebar } from '../redux/deferenceSlice';
import { createAxios } from '../axiosInstance';
import { logoutUser } from '../redux/apiRequest';
import { loginSuccess } from '../redux/authSlice';


const Sidebar = () => {
    const user = useSelector(state => state.auth.login?.currentUser);
    const isSidebarOpen = useSelector(state => state.def.sidebar?.isOpen);
    const isDarkMode = useSelector(state => state.def.isDarkMode)
    const [indexPreview, setIndexPreview] = useState(101);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const location = useLocation();

    console.log('Location: ', location)

    const accessToken = user?.accessToken;
    const id = user?._id;
    const axiosJWT = createAxios(user, dispatch, loginSuccess);

    
    const handleLogout = (i) => {
        setIndexPreview(i.id);

        if(i.title === "logout"){
            logoutUser(dispatch, id, accessToken, navigate, axiosJWT);
            setIndexPreview(101);
        }
    }

    return (
        <div className={`sidebar ${isSidebarOpen&&user ? 'active' : null} sidebar--${isDarkMode&&'dark'}`}>
            <p 
                className="sidebar__icon"
                onClick={() => dispatch(closeSidebar())}
            ><CloseOutlinedIcon /></p>
            <div className='sidebar__container'>
                {dataNav.map((item) => (
                    <div className='sidebar__item' key={item.id}>
                        <h3 className='sidebar__name'>{item.name}</h3>
                        {
                            item.contents.map((i, index) => (
                                <Link 
                                    to={user ? i.link : '/login'} 
                                    className={`sidebar__content ${location.pathname === i.link || location.pathname.includes(i.link + '/')  ? 'active' : null}`} 
                                    key={index}
                                    onClick={() => {handleLogout(i)}} 
                                    >
                                    <span>{i.icon}</span> {i.title}
                                </Link>
                            ))
                        }
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Sidebar;
