import React from 'react'
import camtuLogo from '../../assets/images/logo.png'
import './AppBar.scss'
import {Avatar} from "@material-ui/core";

const AppBar: React.FC = () => (
    <header className="nav-bar-container">
        <div className="nav-bar-main">
            <Avatar src={camtuLogo} className="nav-bar-brand"/>
            <Avatar src={camtuLogo} className="nav-bar-brand"/>
            <Avatar src={camtuLogo} className="nav-bar-brand"/>
        </div>
    </header>
)

export default AppBar