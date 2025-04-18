import React from 'react';
import { Outlet } from 'react-router-dom';
import TopBar from './Component/TopBar';
import Footer from './Component/Footer';
import NavFar from './Component/NavFar';

function Layout() {
    return (
        <div>
            <TopBar/>
            <NavFar/>
            <main>
                <Outlet />
            </main>
            <Footer />
        </div>
    );
}

export default Layout;
