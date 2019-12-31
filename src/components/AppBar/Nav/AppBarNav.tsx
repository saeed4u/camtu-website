import React from "react";
import {Link} from "react-router-dom";

export interface AppBarNavProps {
    title: string
    to: string
}

const AppBarNav: React.FC<AppBarNavProps> = (props: AppBarNavProps) => <div className="app-nav-item-container">
    <Link to={props.to}>
        {props.title}
    </Link>
</div>

export default AppBarNav
