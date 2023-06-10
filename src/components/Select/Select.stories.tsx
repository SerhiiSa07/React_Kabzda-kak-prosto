import React from "react";
import {Select} from "./Select";
import {action} from "@storybook/addon-actions";


export default {
    title: 'Select',
    component: Select,
};

const callback = action('on or of clicked');

export const ModeSelect = () => {

    return(

        <Select items={[]} value={'Serg'} onChange={callback}/>

    )
};
