// Code Keypad Component Here
import React from 'react'

export default function Keypad({ onChange }) {
    function onChange() {
        console.log('Entering password...')
    }
    return (
        <input type="password" placeholder="password" onChange={onChange} />
    )
}
