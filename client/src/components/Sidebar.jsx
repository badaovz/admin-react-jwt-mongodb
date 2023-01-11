import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { createAxios } from '../axiosInstance';
import { dataNav } from '../data';
import { logoutUser } from '../redux/apiRequest';
import { loginSuccess } from '../redux/authSlice';
import { closeSidebar } from '../redux/deferenceSlice';

const Sidebar = () => {
    const user = useSelector((state) => state.auth.login?.currentUser);
    const isSidebarOpen = useSelector((state) => state.def.sidebar?.isOpen);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const location = useLocation();

    console.log('Location: ', location);

    const accessToken = user?.accessToken;
    const id = user?._id;
    const axiosJWT = createAxios(user, dispatch, loginSuccess);

    const handleLogout = (i) => {
        if (i.title === 'logout') {
            logoutUser(dispatch, id, accessToken, navigate, axiosJWT);
        }
    };

    return (
        <div className={`sidebar ${isSidebarOpen && user ? 'active' : null} `}>
            <p
                className='sidebar__icon'
                onClick={() => dispatch(closeSidebar())}
            >
                <CloseOutlinedIcon />
            </p>
            <div className='sidebar__container'>
                {dataNav.map((item) => (
                    <div className='sidebar__item' key={item.id}>
                        <h3 className='sidebar__name'>{item.name}</h3>
                        {item.contents.map((i, index) => (
                            <Link
                                to={user ? i.link : '/login'}
                                className={`sidebar__content ${
                                    location.pathname === i.link ||
                                    location.pathname.includes(i.link + '/')
                                        ? 'active'
                                        : null
                                }`}
                                key={index}
                                onClick={() => {
                                    handleLogout(i);
                                }}
                            >
                                <span>{i.icon}</span> {i.title}
                            </Link>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Sidebar;
