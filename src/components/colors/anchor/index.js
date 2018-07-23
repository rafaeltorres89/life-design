import React, {Component} from 'react';

class ListSubTitle extends Component {
    render(){
        return <li><a href="" title="" className="lk">{this.props.text}</a></li>
    }
}

const Anchor = () => {
    return (
        <ul className="section-nav">
            <ListSubTitle text="Standard Blue Colors"/>
            <ListSubTitle text="Grayscale Color"/>
            <ListSubTitle text="Color Palette"/>
            <ListSubTitle text="Color High Contrast"/>
            <ListSubTitle text="Color DT Acromatico"/>
            <ListSubTitle text="Color DT Dic"/>
            <ListSubTitle text="Color DT Dic Tri"/>
            <ListSubTitle text="Color DT Dic Tri 2"/>
        </ul>
    );
}

export default Anchor;