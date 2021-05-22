import React from "react";
import {Route,Switch } from "react-router-dom";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Details from "./Details";
import Home from "./Home";
import Navbar from "./Navbar.jsx";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import Error from "./Error";

const App = () => {
    return(
        <>
            <Navbar/>
            <Switch>
                <Route exact path = "/" component = {Home}/>
                <Route exact path = "/details" component = {Details}/>
                <Route exact path = "/signin" component = {SignIn}/>
                <Route exact path = "/signup" component = {SignUp}/>
                
                <Route exact component = {Error}/>
            </Switch>
        </>
    );
}

export default App;