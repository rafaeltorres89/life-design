import React, {Component} from 'react';

import Breadcrumb from './breadcrumb';
import Anchor from './anchor';

class Title extends Component {
    render(){
        return <h2>{this.props.text}</h2>
    }
}

const Checkbox = () => {
    return (
        <div className="components">
            <Breadcrumb />
            <Title text="Checkbox" />
            <Anchor />
        </div>
    );
}

export default Checkbox;