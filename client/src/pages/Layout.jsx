import React from 'react';
import { Navbar, Sidebar, Footer } from '../components';
import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Layout = () => {
    const isDarkMode = useSelector(state => state.def.isDarkMode)
    return (
        <div className={`layout layout--${isDarkMode&&'dark'}`}>
            <Navbar />
            <div className='layout__content'>
                <Sidebar />
                <div className='layout__outlet'>
                    <Outlet />
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Layout;
