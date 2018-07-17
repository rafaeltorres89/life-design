import React from 'react';

import Navbar from '../navbar';
import VendorBar from '../vendorbar';

const Header = () => {
    return (
        <header>
            <h1 className="logo">
                <a href="" title="Mongeral Aegon | Life Design">Mongeral Aegon | Life Design</a>
            </h1>
            <Navbar />
            <VendorBar />
        </header>
    );
}

export default Header;