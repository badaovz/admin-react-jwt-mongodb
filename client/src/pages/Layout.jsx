import React from 'react';
import { Navbar, Sidebar, Footer } from '../components';
import { Outlet } from 'react-router-dom';

const Layout = () => {
    return (
        <div className='layout'>
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
