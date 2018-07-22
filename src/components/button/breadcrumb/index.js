import React from 'react';

const Breadcrumb = () => {
    return (
        <ul className="breadcrumb">
            <li className="breadcrumb-item"><a href="">Home</a></li>
            <li className="breadcrumb-item"><a href="">Components</a></li>
            <li className="breadcrumb-item active">Buttons</li>
        </ul>
    );
}

export default Breadcrumb;