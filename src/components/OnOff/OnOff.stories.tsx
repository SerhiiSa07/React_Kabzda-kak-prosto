import React, {useState} from "react";
import { action } from '@storybook/addon-actions'
import {OnOff} from "./OnOff";

export default {
    title: 'OnOff',
    component: OnOff
};

const callback = action('or on of clicked')

export const OnMode = () => <OnOff on={true} onChange={callback}/>;
export const OffMode = () => <OnOff on={false} onChange={callback}/>;

export const OnOffChanging = () => {
    const [value, setValue] = useState<boolean>(true);
    return(
        <div>
            <OnOff on={value} onChange={setValue} />
        </div>
    )
};