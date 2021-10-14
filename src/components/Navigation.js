import React, { useState } from "react";
import { Link } from "react-router-dom"
import "./Navigation.css";

import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
/* 아이콘 컬러 전체 변경 기능 */
import { IconContext } from 'react-icons';

import { sidebarData } from "./sidebar";

function Navigation() {

    const [sidebar, setSidebar] = useState(false);
    const showSidebar = () => setSidebar(!sidebar);

    return (
        <>
        <IconContext.Provider value={{ color: '#fff' }}>
            
            <div className="navbar">
            <Link to="#" className="menu-bars">
                <FaIcons.FaBars onClick={showSidebar} />
            </Link>
            </div>

            <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                <ul className="nav-menu-items" onClick={showSidebar}>
                    <li className="navbar-toggle">

                    <Link to="#" className="menu-bars">
                        <AiIcons.AiOutlineClose />
                    </Link>
                    </li>

                    {/* SidebarData를 순서대로 담기*/}
                    {sidebarData.map((item, index) => {
                    return (
                        <li key={index} className={item.cName}>
                        <Link to={{
                            pathname: `${item.path}`,
                        }}>
                            {item.icon}
                            <span>{item.title}</span>
                        </Link>
                        </li>
                    );
                    })}

                </ul>
            </nav>

        </IconContext.Provider>
        </>
                
    );

}

export default Navigation;