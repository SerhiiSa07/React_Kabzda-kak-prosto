import React, {useEffect, useState} from "react";

export default {
    title: 'useEffect demo'
}

/*export const SimpleExample = () => {
    const [counter, setCounter] = useState(1)
    const [fake, setFake] = useState(1)

    console.log('SimpleExample')

    useEffect( () => {
        console.log('useEffect')
        //api.getUsers().then('')
        //setInterval
        //indexedDB
        //document.getElementId
        //document.title = 'User';
    } )

    useEffect( () => {
        console.log('useEffect every render');
        document.title = counter.toString();
    })

    useEffect( () => {
        console.log('useEffect only first render (componentDidMount)');
        document.title = counter.toString();
    }, [])

    useEffect( () => {
        console.log('useEffect first render and every counter change');
        document.title = counter.toString();
    }, [counter])

    return<>

        Hello, {counter} {fake}
        <button onClick={ ()  => setFake(fake + 1) }>fake+</button>
        <button onClick={ ()  => setCounter(counter + 1) }>counter+</button>

    </>
}

export const SetTimeoutExample = () => {
    const [counter, setCounter] = useState(1)
    const [fake, setFake] = useState(1)

    console.log('SetTimeoutExample')

    useEffect( () => {
        setTimeout( () => {
            console.log('SetTimeout')
            document.title = counter.toString();
        }, 1000);
    }, [counter])

    return<>

        Hello, {counter} {fake}
        <button onClick={ ()  => setFake(fake + 1) }>fake+</button>
        <button onClick={ ()  => setCounter(counter + 1) }>counter+</button>

    </>
}

export const SetTimeoutExample2 = () => {
    const [counter, setCounter] = useState(1)

    console.log('SetTimeoutExample2')

    useEffect( () => {
        setInterval( () => {
            setCounter(state => state +1)
        }, 1000);
    }, [])

    return<>

        Hello, counter: {counter}
    </>
}*/

export const Clock = () => {
    const [time, setTime] = useState(new Date())

    console.log('Clock')

    useEffect( () => {
        const interval = setInterval( () => {
            setTime(new Date())
        }, 1000);
        return () => clearInterval(interval)

    }, [])

    const hours = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();

    const timeString = `${hours} : ${minutes} : ${seconds}`;

    return<>
        <h1>
            {timeString}
        </h1>
    </>
}
