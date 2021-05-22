import React from "react";

import {NavLink} from 'react-router-dom';

  
const Navbar = () => {
    return (
        <>
           <div className = "nav_Container">
               <NavLink exact activeClassName='active-class' to = "/" >Home</NavLink>
               <NavLink exact activeClassName='active-class' to = "/details" >Details</NavLink>
               <NavLink exact activeClassName='active-class' to = "/signin" >SignIn</NavLink>
               <NavLink exact activeClassName='active-class' to = "/signup" >SignUp</NavLink>
           </div>
        </>
  );
}
  
export default Navbar;

        
    


