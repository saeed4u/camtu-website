import React from 'react'
import camtuLogo from '../../assets/images/logo.png'
import './Header.scss'
import {Avatar} from "@material-ui/core";

const Header: React.FC = () => (
    <header className="header-container">
        <div className="header-main">
            <Avatar src={camtuLogo} />
        </div>
    </header>
)

export default Header