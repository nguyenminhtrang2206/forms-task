import React from 'react';

const Form = (props) =>{
    return (
        
        <form onSubmit={props.submit}>
            
            <div className="form" >
                    <div>
                    <label htmlFor="firstname"><strong>First name</strong></label>
                    <input type="text" name="firstname" id="firstname"
                    required onChange={props.change} />
                    </div>

                    <div>
                    <label htmlFor="lastname"><strong>Last name</strong></label>
                    <input type="text" name="lastname" id="lastname" required onChange={props.change} />
                    </div>

                    <div>
                    <label htmlFor="phonenumber"><strong>Phone number</strong></label>
                    <input type="number" name="phonenumber" id="phonenumber" required onChange={props.change} />
                    </div>

                    <div>     
                    <label htmlFor="message"><strong>Message</strong></label>
                    <textarea name="message" id="message" required onChange={props.change} />    
                    </div> 

                    <div>
                    <label htmlFor="role"><strong>Role</strong></label>
                    <select name="role" id="role" required onChange={props.change}> 
                    <option value="teacher">Teacher</option>
                    <option value="student">Student</option>
                    <option value="other">Other</option>
                    </select> 
                    </div>

                    
            </div>

            <input className="submit-button"type="submit" value="SEND" />
        </form>
        
    
    );      
}
        
    


export default Form;