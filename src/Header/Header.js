import React from "react";
import {Link} from 'react-router-dom'
import "./Header.css"
class Header extends React.Component{
    render(){
        return (
            <div className="nav-bar">
                <ul id='myNav'>
                    <li>
                        <Link to="/">Get (Poke)</Link>
                    </li>
                    <li>
                        <Link to="/films">Get (Star Wars)</Link>
                    </li>   
                    <li>
                        <Link to="/post">Post (User Reg)</Link>
                    </li>
                    <li>
                        <Link to="/users">Get (User List)</Link>
                    </li>                    
                    <li>
                        <Link to="/login">Post (Login)</Link>
                    </li>                                   
                </ul>
            </div>
        )
    }
}
export default Header;