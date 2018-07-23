import React, {Component} from 'react';

import Breadcrumb from './breadcrumb';
import Anchor from './anchor';

class Title extends Component {
    render(){
        return <h2>{this.props.text}</h2>
    }
}

const Colors = () => {
    return (
        <div className="components">
            <Breadcrumb />
            <Title text="Colors" />
            <Anchor />
        </div>
    );
}

export default Colors;