import React, {Component} from 'react';

class ListSubTitle extends Component {
    render(){
        return <li><a href="" title="" className="lk">{this.props.text}</a></li>
    }
}

const Anchor = () => {
    return (
        <ul className="section-nav">
            <ListSubTitle text="Example"/>
            <ListSubTitle text="Outline button"/>
            <ListSubTitle text="Sizes"/>
            <ListSubTitle text="Disabled state"/>
        </ul>
    );
}

export default Anchor;