import React from 'react'

function Upper_menu (props) {
    return (
       <div> 
        <Menu_button id = {1} name = "1" OnClick={menu_button__click_handler}/>
        <Menu_button id = {2} name = "2" OnClick={menu_button__click_handler}/>
        <Menu_button id = {3} name = "3" OnClick={menu_button__click_handler}/>
        <Menu_button name = 'test'/>
       </div>
    );
}

function menu_button__click_handler () {
    return (
        console.log('клик')
    );
}


const Menu_button = (props) => {
    return (
        <button id = {props.id} OnClick = {()=> console.log('click')}>{props.name}</button>
    );
}

export default Upper_menu;