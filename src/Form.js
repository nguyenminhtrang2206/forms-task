import React from 'react';

const Form = (props) =>{
    return (
        <div className="form">
        <form>
            <div>
            <label htmlFor="firstname">First name:</label>
            <input type="text" name="firstname" id="firstname"
            required onChange={props.change} />
            </div>
            <div>
            <label htmlFor="lastname">Last name:</label>
            <input type="text" name="lastname" id="lastname" required onChange={props.change} />
            </div>
            <div>
            <label htmlFor="phonenumber">Phone number:</label>
            <input type="number" name="phonenumber" id="phonenumber" required onChange={props.change} />
            </div>
            <div>
            <label htmlFor="role">Role:</label>
            <select name="role" id="role" required onChange={props.change}> 
            <option value="teacher">Teacher</option>
            <option value="student">Student</option>
            <option value="other">Other</option>
            </select> 
            </div>
            <div>     
            <label htmlFor="message">Message:</label>
            <input type="text" name="message" id="message" required onChange={props.change} />    
            </div>         
        </form>
        <button type="submit" value="submit" onClick={props.popup}>Submit</button>
        
        </div>
    
    );
}
        
    


export default Form;