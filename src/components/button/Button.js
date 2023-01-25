import React from 'react'

export const Button = ({ submit, reset }) => {
    return (
        <>
            <button type={submit ? 'submit' : 'reset'} >
            click here</button>
        </>
    )
}
