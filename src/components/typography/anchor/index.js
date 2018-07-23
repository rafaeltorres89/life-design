import React, {Component} from 'react';

class ListSubTitle extends Component {
    render(){
        return <li><a href="" title="" className="lk">{this.props.text}</a></li>
    }
}

const Anchor = () => {
    return (
        <ul className="section-nav">
            <ListSubTitle text="Global settings"/>
            <ListSubTitle text="Headings"/>
        </ul>
    );
}

export default Anchor;