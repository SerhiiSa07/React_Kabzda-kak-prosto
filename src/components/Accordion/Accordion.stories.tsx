import React, {useState} from "react";
import {action} from '@storybook/addon-actions';
import {Accordion, AccordionPropsType} from "./Accordion";
import {StoryFn} from "@storybook/react";

export default {
    title: 'Accordion',
    component: Accordion
};

const callback = action('or on of clicked')
const onClickCallback = action('some item was clicked')

const Template: StoryFn<AccordionPropsType> = (args) => <Accordion {...args}/>
const callbacksProps = {
    onChange: callback,
    onClick: onClickCallback
}

export const MenuCollapsedMode = Template.bind({})

MenuCollapsedMode.args = {
    ...callbacksProps,
    titleValue: 'Menu',
    collapsed: true,
    onChange: callback,
    items: [],
    onClick: onClickCallback
}

export const UsersCollapsedMode = Template.bind({})
UsersCollapsedMode.args = {
    titleValue: 'Users',
    collapsed: false,
    items: [
        {title: 'Serg', value: 1},
        {title: 'Den', value: 2},
        {title: 'Nik', value: 3},
        {title: 'Tom', value: 4}
    ],
    ...callbacksProps
}

export const ModeChanging: StoryFn<AccordionPropsType> = (args) => {

    const [value, setValue] = useState<boolean>(true);

    return <Accordion {...args} collapsed={value} onChange={() => setValue(!value)}/>
}

ModeChanging.args = {
    titleValue: 'Users',
    items:
        [
            {title: 'Serg', value: 1 },
            {title: 'Lera', value: 2},
            {title: 'Den', value: 3},
            {title: 'Tor', value: 4}
        ],
        onClick: (value) => {
            alert(`user with ID ${value} should be happy`)
    }
};