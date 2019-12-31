import React from "react";
import AppBarNav, {AppBarNavProps} from "./Nav/AppBarNav";
import './NavContainer.scss'

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

const NavContainer: React.FC = () => (
    <div className="nav-container">
        {
            navs.map((nav,index) => (
                <AppBarNav  key={`nav-${index}`} {...nav}/>
            ))
        }
    </div>
)

export default NavContainer