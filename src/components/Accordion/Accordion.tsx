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
            {!props.collapsed && <AccordionBody items={props.items} onClick={props.onClick}/>}
        </div>
    )
}

type AccordionTittlePropsType = {
    title: string
    onChange:  () => void
    color ?: string
}

export function AccordionTitle (props: AccordionTittlePropsType) {

    console.log("Accordion rendering")
    return (

         <h3
             style={{color: props.color ? props.color : 'black'}}
             onClick={ (e) => props.onChange()}>--{props.title}--</h3>

    )
}

type AccordionBodyPropsType = {
    items: ItemType[]
    onClick: (value: any) => void
}

export function AccordionBody (props: AccordionBodyPropsType) {
    console.log("Accordion rendering")
    return (
        <ul>
            { props.items.map ( (i, index) => <li onClick={() => {props.onClick(i.value)} } key={index}>{i.title}</li>) }
        </ul>
     )
}
