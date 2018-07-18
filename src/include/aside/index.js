import React from 'react';

import Button from '../components/button';

const Aside = () => {
    return (
        <main>
            <div className="components">
                <Button />
            </div>
            <ul className="section-nav">
                <li><a href="" title="" className="lk">List 1</a></li>
                <li><a href="" title="" className="lk">List 2</a></li>
                <li><a href="" title="" className="lk">List 3</a></li>
                <li><a href="" title="" className="lk">List 4</a></li>
            </ul>
        </main>
    );
}

export default Aside;