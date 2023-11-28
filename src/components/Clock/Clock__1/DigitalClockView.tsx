import React from "react";
import {ClockViewPropsType} from "./Clock";

const get2digitsString = (num: number) => num < 10 ? '0' + num : num;

export const DigitalClockView: React.FC<ClockViewPropsType> = ({date}) => {
    return <>
        <span className="hour">{get2digitsString(date.getHours())}</span>
        :
        <span className="minute">{get2digitsString(date.getMinutes())}</span>
        :
        <span className="second">{get2digitsString(date.getSeconds())}</span>

        <span className="dot"></span>
    </>
}