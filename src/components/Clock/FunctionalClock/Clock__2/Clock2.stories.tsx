import React from "react";
import Clock2 from "./Clock2";


export default {
    title: 'Clock2',
    component: Clock2,
};

export const BaseExampleClocK = () => {
    return <Clock2 minuteRatio={0} hourRatio={0} secondRatio={0}/>
}
