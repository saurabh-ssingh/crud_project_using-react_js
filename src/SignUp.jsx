import React,{useState} from "react";
import {Link,NavLink} from "react-router-dom";
import axios from 'axios'
import {useHistory} from "react-router-dom";

const SignUp = () =>{
    let history = useHistory();
    const [user, setUser] = useState({

        username: "",
        email: "", 
        address: ""
    });

    const {username, email, address } = user;
    const onInputChange = e => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    const onSubmit = async e => {
        e.preventDefault();
        await axios.post("http://localhost:3003/users", user);
        history.push("/");
      };

    
    return(
        <>
            
            <div className = "container_Sign">
                <h1>SignUp Page</h1>
                <form onSubmit={e => onSubmit(e)}>

                    <label><b>Enter your UserName:</b></label><br/>
                    <input 
                        type = "text" 
                        placeholder ="Enter Your UserName" 
                        id="user_name"
                        defaultValue={username}
                        onChange={e => onInputChange(e)}
                    /><br/>

                    <label><b>Enter your email:</b></label><br/>
                    <input 
                        type = "email" 
                        placeholder ="Enter Your Email" 
                        id="user_name"
                        defaultValue = {email} 
                        onChange={e=>onInputChange(e)}
                    /><br/>

                    <label><b>Enter your password:</b></label><br/>
                    <input type = "password" placeholder ="Enter Your Password" id="user_name"></input><br/><br/>

                    <label><b>Confirm password:</b></label><br/>
                    <input type = "password" placeholder ="ReEnter Your Password" id="user_name"></input><br/><br/>
                
                    <label><b>Adress:</b></label><br/>
                    <textarea name="message" rows="5" cols="50" 
                     defaultValue = {address}onChange={e=>onInputChange(e)}></textarea><br/><br/>

                    <NavLink className="btn btn-primary" to="/details">SingUp</NavLink><br/><br/>
                
                    <span>For SingIn<Link to = '/signin'> Click Here </Link></span>
                </form>
            </div>
           
        </>
    );
}

export default SignUp;