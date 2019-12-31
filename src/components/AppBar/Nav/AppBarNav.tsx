import React from "react";
import {Link} from "react-router-dom";
import './AppBarNav.scss'

export interface AppBarNavProps {
    title: string
    to: string
    active?: boolean
}

const AppBarNav: React.FC<AppBarNavProps> = (props: AppBarNavProps) => <div className="app-nav-item-container">
    <Link to={props.to} className={props.active? 'active':''}>
        {props.title}
    </Link>
</div>

export default AppBarNav
