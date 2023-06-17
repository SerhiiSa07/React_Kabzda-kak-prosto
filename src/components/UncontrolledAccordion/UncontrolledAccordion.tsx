import React, {useState} from 'react';
import {action} from "@storybook/addon-actions";
import {reducer, TOGGLE_CONSTANT} from "redux-form";

type AccordionPropsType = {
    titleValue: string
}


function UnccontrolledAccordion(props: AccordionPropsType) {

    console.log('UncontrolledAccordion rendering')

    let [collapsed, dispatch] = useState(reducer, { collapsed: false });

    return <div>
        <AccordionTitle title={props.titleValue} onClick={ () => {
            dispatch({type: TOGGLE_CONSTANT})
        } } />
    </div>

}

type AccordionTitlePropsType = {
    title: string
    onClick: () => void
}

function AccordionTitle (props: AccordionTitlePropsType) {
    console.log('AccordionTitle rendering')
    return(
        <h3 onClick={ () => { props.onClick() } }>-- {props.title} --</h3>
    )
}

export function UncontrolledAccordion(props: AccordionPropsType) {
    console.log("Accordion rendering")

    let [collapsed, setCollapsed] = useState(false);

    return (

        <div>
            <AccordionTitle title={props.titleValue} onClick={ () => {setCollapsed(!collapsed)}}/>
            {!collapsed && <AccordionBody/>}
        </div>

    )
}

type AccordionTitlePropsType = {
    title: string
    onClick: () => void
}

export function AccordionTitle(props: AccordionTitlePropsType) {

    console.log("AccordionTitle rendering")
    return (

        <h3 onClick={ () => {props.onClick()} }>-- {props.title} --</h3>

    )
}

export function AccordionBody() {
    console.log("Accordion rendering")
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}

