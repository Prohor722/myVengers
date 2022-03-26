import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div className='footer d-flex align-items-center justify-content-center text-light'>
            <div>
                <h5>How react works?</h5>
                <p>Ans: React creates a copy of dom named virtual dom and its faster then the actual dom. Then react compare between virtual dom and actual dom. Using its efficient algorithm finds out the changes in our markup. Without re-rendering the whole dom react re-render only that particular part which is changed.Then we can see the changes.</p>

                <h5>Props vs State</h5>
                <p>Ans: Props can not be reassigned but state can be reassigned. Props used for transferring data from one component to another and state is used for changing any particular data state in that component. Props is synchronous and state is asynchronous.Props is immutable and state is mutable.Stateless components dont have state but can have props</p>

                <p className='mt-5'>CopyRight Claim by © ProhorBanik 2050</p>
            </div>
        </div>
    );
};

export default Footer;