import React, {Component} from 'react';

class ListSubTitle extends Component {
    render(){
        return <li><a href="" title="" className="lk">{this.props.text}</a></li>
    }
}

const Anchor = () => {
    return (
        <ul className="section-nav">
            <ListSubTitle text="List 1"/>
            <ListSubTitle text="List 2"/>
            <ListSubTitle text="List 3"/>
            <ListSubTitle text="List 4"/>
        </ul>
    );
}

export default Anchor;