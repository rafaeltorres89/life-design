import React from 'react';

const Button = () => {
    return (
        <div className="components">
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
        </div>
    );
}

export default Button;