import React, {useState, KeyboardEvent} from "react";
import styles from './Select.module.css'
import {action} from "@storybook/addon-actions";


type ItemType={
   title: string
   value: any
}

type SelectPropsType = {
    value ?: any
    onChange: (value: any) => void
    items: ItemType[]
}

export function Select (props: SelectPropsType) {

    const [active, setActive] = useState(false)
    const [hoveredElementItem, setHoveredElementItem] = useState(props.value)

    const selectedItem = props.items.find(i => i.value === props.value)

    const hoveredItem = props.items.find(i => i.value === hoveredElementItem)

    const onItemClick = (value: any) => {props.onChange(value);
    toggleItems()};

    const toggleItems = () => setActive(!active)

    const onKeyUp = (e: KeyboardEvent<HTMLDivElement>) => {
        console.log('press')
    }

    return (
        <>
            <select>
                <option value="">Kiev</option>
                <option value="">Czech</option>
                <option value="">Poland</option>
            </select>
            <div className={styles.select}
            onKeyUp={onKeyUp} tabIndex={0}
            >
                <span className={styles.main} onClick={toggleItems}>{selectedItem && selectedItem.title}</span>
                {
                    active &&
                <div className={styles.items}>
                    {props.items.map(i => <div
                        onMouseEnter={ () => {setHoveredElementItem(i.value)} }
                        className={
                        styles.item + " " + (hoveredItem === i ? styles.selected : "")
                    } key={i.value}
                    onClick={() => {onItemClick(i.value)
                    } }
                    >{i.title}</div>)}
                </div>
                }
            </div>
        </>
    )
}
