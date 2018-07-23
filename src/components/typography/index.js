import React, {Component} from 'react';

import Breadcrumb from './breadcrumb';
import Anchor from './anchor';

class Title extends Component {
    render(){
        return <h2>{this.props.text}</h2>
    }
}

class SubTitle extends Component {
    render(){
        return <h3>{this.props.text}</h3>
    }
}

const Typography = () => {
    return (
        <div className="components">
            <Breadcrumb />
            <Title text="Typography" />
            <p className="info-page">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            <SubTitle text="Global settings" />
            <p className="info-page">Lide Design Mongeral sets basic global display, typography, and link styles. When more control is needed, check out the textual utility classes.</p>
            <ol>
                <li>Use a native font stack that selects the best font-family for each OS and device.</li>
                <li>For a more inclusive and accessible type scale, we assume the browser default root font-size (typically 16px) so visitors can customize their browser defaults as needed.</li>
                <li>Use the $font-family-base, $font-size-base, and $line-height-base attributes as our typographic base applied to the body.</li> 
            </ol>
            <SubTitle text="Headings" />
            <p className="info-page">All HTML headings, h1 through h6, are available.</p>
            <div className="bd-example">
                <h1 className="txt-font">h1. Bootstrap heading</h1>
                <h2 className="txt-font">h2. Bootstrap heading</h2>
                <h3 className="txt-font">h3. Bootstrap heading</h3>
                <h4 className="txt-font">h4. Bootstrap heading</h4>
                <h5 className="txt-font">h5. Bootstrap heading</h5>
                <h6 className="txt-font">h6. Bootstrap heading</h6>
            </div>
            <figure class="highlight">
                <pre>
                    <code>
                        <span className="tg">&lt;h1&gt;</span>
                        <span className="if">h1. Bootstrap heading</span>
                        <span className="tg">&lt;/h1&gt;</span>
                    </code>
                    <code>
                        <span className="tg">&lt;h2&gt;</span>
                        <span className="if">h2. Bootstrap heading</span>
                        <span className="tg">&lt;/h2&gt;</span>
                    </code>
                    <code>
                        <span className="tg">&lt;h3&gt;</span>
                        <span className="if">h3. Bootstrap heading</span>
                        <span className="tg">&lt;/h3&gt;</span>
                    </code>
                    <code>
                        <span className="tg">&lt;h4&gt;</span>
                        <span className="if">h4. Bootstrap heading</span>
                        <span className="tg">&lt;/h4&gt;</span>
                    </code>
                    <code>
                        <span className="tg">&lt;h5&gt;</span>
                        <span className="if">h5. Bootstrap heading</span>
                        <span className="tg">&lt;/h5&gt;</span>
                    </code>
                    <code>
                        <span className="tg">&lt;h6&gt;</span>
                        <span className="if">h6. Bootstrap heading</span>
                        <span className="tg">&lt;/h6&gt;</span>
                    </code>
                </pre>
            </figure>
            <p>.h1 through .h6 classes are also available, for when you want to match the font styling of a heading but cannot use the associated HTML element.</p>
            <Anchor />
        </div>
    );
}

export default Typography;