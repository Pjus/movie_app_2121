import React from "react";
import * as BsIcons from "react-icons/bs";

export const sidebarData = [
    {
        title: 'HOME',
        path: "/",
        state: {
            fromNavigation: true
        },
        icon: <BsIcons.BsFillHouseDoorFill />,
        cName: 'nav-text'
    },

    {
        title: 'About',
        path: "/about",
        state: {
            fromNavigation: true
        },
        icon: <BsIcons.BsInfoCircleFill />,
        cName: 'nav-text'
    }
]