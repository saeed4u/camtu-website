import React from "react";
import './Footer.scss'
import {Avatar, Paper, Typography} from "@material-ui/core";
import NavContainer, {NavContainerProps} from "../Nav/NavContainer";
import {AppBarNavProps} from "../Nav/Nav";
import camtuLogo from "../../assets/images/logo.jpeg";
import Copyright from "../Copyright/Copyright";

const leftNav: Array<AppBarNavProps> = [
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
];

const rightNav: Array<AppBarNavProps> = [
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
    {
        title: '',
        to: ''
    },
];


const Footer: React.FC = () => (
    <div className="footer-container">
        <div className="footer-main">
            <div>
                <NavContainer navs={leftNav} className="nav-container"/>
            </div>
            <div>
                <Copyright />
            </div>
            <div>
                <NavContainer navs={rightNav} className="nav-container"/>
            </div>
        </div>
    </div>
)

export default Footer