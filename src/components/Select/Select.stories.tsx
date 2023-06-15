import React, {useState} from "react";
import {Select} from "./Select";
import {action} from "@storybook/addon-actions";

export default {
    title: 'Select',
    component: Select,
};

export const WithValue = () => {
    const [value, setValue] = useState("2")
    return(
        <>
            <Select
                value={value}
                onChange={setValue}
                items={[
                    {value: '1', title: 'Kiev'},
                    {value: '2', title: 'Czech'},
                    {value: '3', title: 'Poland'}
                ]}
            />
        </>
    )
};

export const WithoutValue = () => {

    const [value, setValue] = useState(null)

    return(
        <>
            <Select
                value={value}
                onChange={setValue}
                items={[
                    {value: '1', title: 'Kiev'},
                    {value: '2', title: 'Czech'},
                    {value: '3', title: 'Poland'}
                ]}/>
        </>
    )
};