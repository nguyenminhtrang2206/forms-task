import React from 'react';

const View = (props) => {
    return (
        <div className="input-area">
        
        <div className="input">
        
            <div className="vl">
            <h1>This is your input</h1>
                <div className="hl"></div>
                <p>First name: {props.first}</p>
                <div className="hl"></div>
                <p>Last name: {props.last}</p>
                <div className="hl"></div>
                <p>Phone number: {props.phone}</p>
                <div className="hl"></div>
                <p>Message: {props.message}</p>
                <div className="hl"></div>
                <p>Role: {props.role}</p>
                <div className="hl"></div>
            </div>
        </div>
        </div>
    );
};

export default View;