import React, {useEffect, useState} from "react";
import './Clock.module.css';
import {DigitalClockView} from "./DigitalClockView";
import {AnalogClockView} from "./AnalogClockView";


type PropsType = {
    mode?: 'digital' | 'analog'
}

export const Clock: React.FC<PropsType> = (props) => {

    const [data, setData] = useState(new Date())

    useEffect( () => {

        const internalID = setInterval( () => {
            console.log('time')
            setData(new Date());
        }, 1000)

        return () => {
            clearInterval(internalID)
        }

    }, [])


    let view;

    switch (props.mode) {
        case 'analog':
            view = <AnalogClockView date={data}/>
            break;
        case 'digital':
        default:
            view = <DigitalClockView date={data}/>
    }

    return (
        <div className="clock">
            <div className="wrap">
                {view}
                {/*{
                    props.mode === 'digital' ?
                    <>
                    <span className="hour">{get2digitsString(data.getHours())}</span>
                    :
                    <span className="minute">{get2digitsString(data.getMinutes())}</span>
                    :
                    <span className="second">{get2digitsString(data.getSeconds())}</span>
                    <span className="dot"></span>
                </> : <>ANALOG</>
                }*/}
            </div>
        </div>
    )
}

export type ClockViewPropsType = {
    date: Date
}

