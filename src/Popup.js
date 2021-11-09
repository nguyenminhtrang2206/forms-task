import React from 'react';

const closeHandler = () => {
    window.location.reload();
};

const Popup = (props) => {
    return (
        <div className="overlay">
        <div className="popup">
            
            <h1>Your note</h1>
            

            <p>First name: {props.first}</p>
            
            <p>Last name: {props.last}</p>
            
            <p>Phone number: {props.phone}</p>
            
            <p>Message: {props.message}</p>
            
            <p>Role: {props.role}</p>
             
            <div className="popup-buttons">
                <button onClick={closeHandler}className="yes">YES, I'M SURE</button>
                <button onClick={closeHandler}className="no">NOPE, DON'T WANT TO POST IT</button>
            </div>
        </div>    
        </div>
    );
};

export default Popup;