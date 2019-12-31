import React from 'react'
import camtuLogo from '../../assets/images/logo.jpeg'
import './AppBar.scss'
import {Avatar} from "@material-ui/core";
import NavContainer from "./NavContainer";

const AppBar: React.FC = () => (
    <header className="nav-bar-container">
        <div className="nav-bar-main">
            <Avatar src={camtuLogo} className="nav-bar-brand"/>
            <NavContainer />
        </div>
    </header>
)

export default AppBar