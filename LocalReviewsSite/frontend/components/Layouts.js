import React from 'react'
import Nav from './Nav'

export default function Layouts({ children }) {
    return (
        <div>
            <Nav/> 
            {children}
        </div>
    )
}
