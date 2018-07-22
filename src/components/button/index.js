import React from 'react';

import Breadcrumb from '../../include/breadcrumb';

const Button = () => {
    return (
        <div className="components">
            <Breadcrumb />
            <h2>Button</h2>
            <p className="info-page">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            <h3>Examples</h3>
            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
            <div className="bd-example flex-container">
                <button type="button" class="btn btn-primary">Primary</button>
                <button type="button" class="btn btn-default">Default</button>
                <button type="button" class="btn btn-success">Success</button>
                <button type="button" class="btn btn-danger">Danger</button>
                <button type="button" class="btn btn-warning">Warning</button>
                <button type="button" class="btn btn-info">Info</button>

                <button type="button" class="btn btn-link">Link</button>
            </div>
            <figure class="highlight">
                <pre>
                    <code>
                        <span className="tg">&lt;button </span>
                        <span className="at">type</span>
                        <span className="vl">="button"</span>
                        <span className="at"> class</span>
                        <span className="vl">="btn btn-primary"</span>
                        <span className="tg">&gt;</span>
                        <span className="if">Primary</span>
                        <span className="tg">&lt;button&gt;</span>
                    </code>
                    <code>
                        <span className="tg">&lt;button </span>
                        <span className="at">type</span>
                        <span className="vl">="button"</span>
                        <span className="at"> class</span>
                        <span className="vl">="btn btn-default"</span>
                        <span className="tg">&gt;</span>
                        <span className="if">Default</span>
                        <span className="tg">&lt;button&gt;</span>
                    </code>
                    <code>
                        <span className="tg">&lt;button </span>
                        <span className="at">type</span>
                        <span className="vl">="button"</span>
                        <span className="at"> class</span>
                        <span className="vl">="btn btn-success"</span>
                        <span className="tg">&gt;</span>
                        <span className="if">Success</span>
                        <span className="tg">&lt;button&gt;</span>
                    </code>
                    <code>
                        <span className="tg">&lt;button </span>
                        <span className="at">type</span>
                        <span className="vl">="button"</span>
                        <span className="at"> class</span>
                        <span className="vl">="btn btn-danger"</span>
                        <span className="tg">&gt;</span>
                        <span className="if">Danger</span>
                        <span className="tg">&lt;button&gt;</span>
                    </code>
                    <code>
                        <span className="tg">&lt;button </span>
                        <span className="at">type</span>
                        <span className="vl">="button"</span>
                        <span className="at"> class</span>
                        <span className="vl">="btn btn-warning"</span>
                        <span className="tg">&gt;</span>
                        <span className="if">Warning</span>
                        <span className="tg">&lt;button&gt;</span>
                    </code>
                    <code>
                        <span className="tg">&lt;button </span>
                        <span className="at">type</span>
                        <span className="vl">="button"</span>
                        <span className="at"> class</span>
                        <span className="vl">="btn btn-info"</span>
                        <span className="tg">&gt;</span>
                        <span className="if">Info</span>
                        <span className="tg">&lt;button&gt;</span>
                    </code>
                    <br/>
                    <code>
                        <span className="tg">&lt;button </span>
                        <span className="at">type</span>
                        <span className="vl">="button"</span>
                        <span className="at"> class</span>
                        <span className="vl">="btn btn-link"</span>
                        <span className="tg">&gt;</span>
                        <span className="if">Link</span>
                        <span className="tg">&lt;button&gt;</span>
                    </code>
                </pre>
            </figure>
            <div className="callout">
                <h5>Conveying meaning to assistive technologies</h5>
                <p>Using color to add meaning only provides a visual indication, which will not be conveyed to users of assistive technologies – such as screen readers. Ensure that information denoted by the color is either obvious from the content itself (e.g. the visible text), or is included through alternative means, such as additional text hidden with the .sr-only class.</p>
            </div>
            <h3>Outline button</h3>
            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
            <div className="bd-example flex-container">
                <button type="button" class="btn btn-outline-primary">Primary</button>
                <button type="button" class="btn btn-outline-default">Default</button>
                <button type="button" class="btn btn-outline-success">Success</button>
                <button type="button" class="btn btn-outline-danger">Danger</button>
                <button type="button" class="btn btn-outline-warning">Warning</button>
                <button type="button" class="btn btn-outline-info">Info</button>
            </div>
            <figure class="highlight">
                <pre>
                    <code>
                        <span className="tg">&lt;button </span>
                        <span className="at">type</span>
                        <span className="vl">="button"</span>
                        <span className="at"> class</span>
                        <span className="vl">="btn btn-outline-primary"</span>
                        <span className="tg">&gt;</span>
                        <span className="if">Primary</span>
                        <span className="tg">&lt;button&gt;</span>
                    </code>
                    <code>
                        <span className="tg">&lt;button </span>
                        <span className="at">type</span>
                        <span className="vl">="button"</span>
                        <span className="at"> class</span>
                        <span className="vl">="btn btn-outline-default"</span>
                        <span className="tg">&gt;</span>
                        <span className="if">Default</span>
                        <span className="tg">&lt;button&gt;</span>
                    </code>
                    <code>
                        <span className="tg">&lt;button </span>
                        <span className="at">type</span>
                        <span className="vl">="button"</span>
                        <span className="at"> class</span>
                        <span className="vl">="btn btn-outline-success"</span>
                        <span className="tg">&gt;</span>
                        <span className="if">Success</span>
                        <span className="tg">&lt;button&gt;</span>
                    </code>
                    <code>
                        <span className="tg">&lt;button </span>
                        <span className="at">type</span>
                        <span className="vl">="button"</span>
                        <span className="at"> class</span>
                        <span className="vl">="btn btn-outline-danger"</span>
                        <span className="tg">&gt;</span>
                        <span className="if">Danger</span>
                        <span className="tg">&lt;button&gt;</span>
                    </code>
                    <code>
                        <span className="tg">&lt;button </span>
                        <span className="at">type</span>
                        <span className="vl">="button"</span>
                        <span className="at"> class</span>
                        <span className="vl">="btn btn-outline-warning"</span>
                        <span className="tg">&gt;</span>
                        <span className="if">Warning</span>
                        <span className="tg">&lt;button&gt;</span>
                    </code>
                    <code>
                        <span className="tg">&lt;button </span>
                        <span className="at">type</span>
                        <span className="vl">="button"</span>
                        <span className="at"> class</span>
                        <span className="vl">="btn btn-outline-info"</span>
                        <span className="tg">&gt;</span>
                        <span className="if">Info</span>
                        <span className="tg">&lt;button&gt;</span>
                    </code>
                </pre>
            </figure>
            <p>problema com a conexão</p>
        </div>
    );
}

export default Button;