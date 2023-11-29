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

export const SetTimeoutExample3 = () => {
    const [counter, setCounter] = useState(1)
    const [fake, setFake] = useState(1)

    console.log('SetTimeoutExample3')

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
        const intervalID = setInterval( () => {
            setTime(new Date())
        }, 1000);
        return () => clearInterval(intervalID)

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

export const ResetEffectExample = () => {
    const [counter, setCounter] = useState(1)

    console.log('Component rendering')

    useEffect( () => {
        console.log('Effect occurred')

        return () => {
            console.log(
                'RESET EFFECT' + counter
            );
        }
    }, [counter])

    return<>
            Hello, counter: {counter} <button onClick={ () => {setCounter(counter + 1)} }>+</button>
    </>
}


export const KeysTrackerExample = () => {

    const [text, setText] = useState('')

    console.log('Component rendered with ' + text)

    useEffect(() => {

        const handler = (e: KeyboardEvent) => {
            console.log(e.key)
            setText((state) => state + e.key)
        };
        window.addEventListener('keypress', handler);
        return () => {
            window.removeEventListener('keypress', handler);
        }
    }, [text])

    return <>
        Typed text: {text}
    </>
}

export const SetTimeoutExample = () => {

    const [text, setText] = useState('')

    console.log('Component rendered with ' + text)

    useEffect(() => {

        const timeoutId = setTimeout( () => {
            console.log('TIMEOUT EXPIRED')
            setText('3 seconds passed')
        }, 3000)

        return () => {
            clearTimeout(timeoutId)
        }
    }, [text])

    return <>
         text: {text}
    </>
}