import React from "react";
import Nav, {AppBarNavProps} from "./Nav";

export interface NavContainerProps {
    navs: Array<AppBarNavProps>,
    className: string
}

const NavContainer: React.FC<NavContainerProps> = (props: NavContainerProps) => (
    <div className={props.className}>
        {
            props.navs.map((nav,index) => (
                <Nav key={`nav-${index}`} {...nav}/>
            ))
        }
    </div>
)

export default NavContainer