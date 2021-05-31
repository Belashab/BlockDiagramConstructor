import React from 'react'

function Upper_menu (props) {
    return (
        <div> 
            <Menu_button id = {1} name = "Main workspace" onClick={menu_button__click_handler}/>
            <Menu_button id = {2} name = "Settings" onClick={menu_button__click_handler}/>
            <Menu_button id = {3} name = "3" onClick={menu_button__click_handler}/>
       </div>
    );
}

function menu_button__click_handler (e) {
    console.log(e.target.id)
}


const Menu_button = (props) => {
    return (
        <button id = {props.id} onClick = {props.onClick}>{props.name}</button>
    );
}

export default Upper_menu;