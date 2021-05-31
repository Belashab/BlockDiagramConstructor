import React, { Component } from 'react'
// import blocks from './blocks/blocks.json'

function Component_menu(props) {
    return (
        <div>
            <div className="component_menu__state_arrow"></div>
            <Component_block id = {1}/>
            <Component_block />
            <Component_block />
            <Component_block />
        </div>
    );
}

function component_block__dnd_handler (e) {
    console.log(`e.target.id` + 'clicked')
}

function component_block__getter (props) {
    
    return (
        <div>
            <ul><Component_block /></ul>
        </div>
    );
}

const Component_block = (props) => {
    return(
    <div id = {props.id}>{props.id}</div>
    );
}



export default Component_menu;