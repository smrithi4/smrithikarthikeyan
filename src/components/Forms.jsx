import { TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

const Forms = () => {
    var [fname, setName] = useState("")
    const finput = (e) => {
        setName(e.target.value)
    }
    var [lname, setLName] = useState("")
    const linput = (e) => {
        setLName(e.target.value)
    }
    return (
        <div>
            <Typography>First name is {fname}</Typography>
            <TextField label='First name' variant='outlined' onChange={(e) => finput(e)} />
            <br>
            </br>
            <Typography>Second name is {lname}</Typography>
            <TextField label='second name' variant='outlined' onChange={(e) => linput(e)} />
        </div>
    )
}

export default Forms
