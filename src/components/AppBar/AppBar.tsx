import React, {useState} from 'react'
import camtuLogo from '../../assets/images/logo.jpeg'
import './AppBar.scss'
import {Avatar, IconButton, Menu, MenuItem} from "@material-ui/core";
import NavContainer from "../Nav/NavContainer";
import {AppBarNavProps} from "../Nav/Nav";
import MenuIcon from '@material-ui/icons/Menu';

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

const AppBar: React.FC = () => {

    const [menuAnchor, setMenuAnchor] = useState<null | HTMLElement>(null)

    const handleMenuClick = (event: React.MouseEvent<any>) => {
        setMenuAnchor(event.currentTarget)
    }

    const handleClose = () => {
        setMenuAnchor(null)
    }

    return (
    <header className="nav-bar-container">
        <div className="nav-bar-main">
            <Avatar src={camtuLogo} className="nav-bar-brand"/>
            <NavContainer navs={navs} className="nav-container"/>
            <IconButton className="hamburger-menu"  onClick={handleMenuClick}>
                <MenuIcon color="primary"/>
            </IconButton>
        </div>
        <Menu anchorEl={menuAnchor} keepMounted open={Boolean(menuAnchor)} onClose={handleClose}>
            {
                navs.map(({title,to},index) => (
                    <MenuItem key={`${title}-${index}`}>{title}</MenuItem>
                ))
            }
        </Menu>
    </header>
    )
}

export default AppBar