import React from 'react';
import { Outlet } from 'react-router-dom';
import TopBar from './Component/TopBar';
import Navbar from './Component/navbar';
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
