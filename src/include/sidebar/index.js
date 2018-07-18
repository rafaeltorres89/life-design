import React from 'react';

import Listbar from '../listbar';

const Sidebar = () => {
    return (
        <aside className="sidebar">
            <div className="search">
                <input type="text" className="form-control" value="Search"/>
            </div>
            <Listbar />
        </aside>
    );
}

export default Sidebar;