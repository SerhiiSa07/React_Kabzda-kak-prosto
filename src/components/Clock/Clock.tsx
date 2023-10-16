import React, {useEffect, useState} from "react";
 import './Clock.module.css';


type PropsType = {
}

const get2digitsString = (num: number) => num < 10 ? '0' + num : num;

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

    return (
        <div>
            <span>{get2digitsString(data.getHours())}</span>
            :
            <span>{get2digitsString(data.getMinutes())}</span>
            :
            <span>{get2digitsString(data.getSeconds())}</span>
        </div>
    )
}