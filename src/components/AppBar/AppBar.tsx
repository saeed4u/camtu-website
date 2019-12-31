import React from 'react'
import camtuLogo from '../../assets/images/logo.jpeg'
import './AppBar.scss'
import {Avatar} from "@material-ui/core";
import NavContainer from "../Nav/NavContainer";
import {AppBarNavProps} from "../Nav/Nav";

const navs: Array<AppBarNavProps> = [
    {
        title: 'Activities',
        to: '/activities',
        active: true
    },
    {
        title: 'Events',
        to: '/events'
    },
    {
        title: 'Services',
        to: '/services'
    },
    {
        title: 'Members',
        to: '/members'
    },
    {
        title: 'Calendar',
        to: '/calendar'
    },
    {
        title: 'Contacts',
        to: '/contacts'
    },
    {
        title: 'About us',
        to: '/about-us'
    },
]

const AppBar: React.FC = () => (
    <header className="nav-bar-container">
        <div className="nav-bar-main">
            <Avatar src={camtuLogo} className="nav-bar-brand"/>
            <NavContainer navs={navs} className="nav-container"/>
        </div>
    </header>
)

export default AppBar