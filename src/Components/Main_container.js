import React from 'react'
import Upper_menu from './Upper_menu'
import Component_menu from './Component_menu'
import Main_workspace from './Main_workspace'

function Main_container (props) {
    return (
        <div id = "Main_container">
            <Upper_menu />
            <Component_menu />
            <Main_workspace />
        </div>
    );
} 

export default Main_container;