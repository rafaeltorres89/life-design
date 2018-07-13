import React from 'react';

import Navbar from '../navbar';
import VendorBar from '../vendorbar';

const Header = () => {
    return (
        <header>
            <h1>Header do site</h1>
            <Navbar />
            <VendorBar />
        </header>
    );
}

export default Header;