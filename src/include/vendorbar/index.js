import React from 'react';

const VendorBar = () => {
    return (
        <ul className="vendorbar">
            <li>v0.1</li>
            <li><a href="https://github.com/rafaeltorres89/life-design" title="Github"><i class="fab fa-github"></i></a></li>
            <li><a href="https://teams.microsoft.com/_?lm=deeplink&lmsrc=officeWaffle#/conversations/General?threadId=19:e0e588b2cc844b658f0a9e10cd56e16d@thread.skype&ctx=channel" title="Teams"><i class="fab fa-slack"></i></a></li>
        </ul>
    );
}

export default VendorBar;