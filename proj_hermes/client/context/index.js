import React, { useState, createContext } from 'react'

export const Context = createContext()

export const ContextProvider = (props) => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const value = {
        firstName,
        setFirstName,
        lastName,
        setLastName,
        username,
        setUsername,
        password,
        setPassword,
    }

    return (<Context.Provider value={value}>{props.children}</Context.Provider>)
}
