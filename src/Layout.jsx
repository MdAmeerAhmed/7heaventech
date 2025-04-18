import React from 'react';
import { Outlet } from 'react-router-dom';
import TopBar from './Component/TopBar';
import Navbar from './Component/Navbar';
import Footer from './Component/Footer';

function Layout() {
    return (
        <div>
            <TopBar/>
            <Navbar />
            <main>
                <Outlet />
            </main>
            <Footer />
        </div>
    );
}

export default Layout;
