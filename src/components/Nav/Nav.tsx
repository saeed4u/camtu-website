import React from "react";
import {Link} from "react-router-dom";

export interface AppBarNavProps {
    title: string
    to: string
    active?: boolean
}

const Nav: React.FC<AppBarNavProps> = (props: AppBarNavProps) => <div className="app-nav-item-container">
    <Link to={props.to} className={props.active? 'active':''}>
        {props.title}
    </Link>
</div>

export default Nav
