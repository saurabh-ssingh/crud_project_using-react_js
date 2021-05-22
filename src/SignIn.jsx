import React from "react";
import {Link,NavLink} from "react-router-dom";

const SignIn = () =>{
    return(
        <>
            
            <div className = "container_Sign">
                <h1>SignIn Page</h1>
                <label for="email"><b>Enter your email:</b></label><br/>
                <input type = "email" placeholder ="Enter Your Email" id="user_name"></input><br/>

                <label for="password"><b>Enter your password:</b></label><br/>
                <input type = "password" placeholder ="Enter Your Password" id="user_name"></input><br/><br/>
                <NavLink className="btn btn-primary" to = '/'>SingIn</NavLink><br/><br/>
                
                <span>For SignUp<Link to = '/signup'> Click Here </Link></span>
            </div>
           
        </>
    );
}

export default SignIn;