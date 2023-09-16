import React, {useState} from "react";
import {number} from "prop-types";

export default {
    title: 'React.memo demo',
}

const NewMessagesCounter = (props: {count: number}) => {
    return <div>{props.count}</div>
}

const UsersSecret = ( props: {users: Array<string>} ) => {
    console.log('USERS')
    return <div>
        {props.users.map( (u, i) => <div key={i}>{u}</div> )}
    </div>
}

const Users = React.memo(UsersSecret)

export const Example1 = () => {

    console.log('Example');

    const [counter, setCounter] = useState(0)
    const [users, setUsers] = useState(['Serg', 'Lex', 'Den', 'Tom'])

    const addUsers = () => {
        const newUsers = [...users, 'Fes' + new Date().getTime()];
        setUsers(newUsers);
    }

    users.push('Fes' + new Date().getTime());

    return <>
        <button onClick={ () => setCounter(counter + 1) }>+</button>
        <button onClick={ () => addUsers() }>add user</button>
        <NewMessagesCounter count={counter}/>
        <Users users={users}/>
    </>
}