import React from "react";
import "./Header.scss";

import { Link } from 'react-router-dom';

const Header: React.FC = () =>{
    return (
        <div className="Header_wrapper">
            <Link to="/" className="Header_title">Student Management System</Link>
        </div>
    )
}

export default Header;