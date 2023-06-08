import React from 'react';

type ItemType = {
    title: string
    value: any
}

export type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
    onChange: () => void
    /**
     * Elements that are showed when accordion is opened (not collapsed)
     */
    items: ItemType[]
    onClick: (value: any) => void
}

export function Accordion(props:AccordionPropsType) {
    console.log("Accordion rendering")
    return (
        <div>
            <AccordionTitle title={props.titleValue} onChange={props.onChange}/>
            {!props.collapsed && <AccordionBody/>}
        </div>
    )
}

type AccordionTittlePropsType = {
    title: string
    onChange:  () => void
}

export function AccordionTitle (props: AccordionTittlePropsType) {

    console.log("Accordion rendering")
    return (

         <h3 onClick={ (e) => props.onChange()}>--{props.title}--</h3>

    )
}

type AccordionBodyPropsType = {
    items: ItemType[]
    onClick: (value: any) => void
}

export function AccordionBody () {
    console.log("Accordion rendering")
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
     )
}
