import React, { useEffect, useState } from 'react'
import TextField from '@mui/material/TextField';
import { Typography, Button } from '@mui/material';


const Add = () => {
    var [fname, setName] = useState("")
    const changeName = (event) => {
        const { name, value } = event.target;
        setName(value);
    }
    useEffect(() => {
        setName("[Enter name]");
    }, [])


    return (
        <div>
            <Typography variant='h1'>My name is {fname}</Typography>
            <br>
            </br>
            <TextField id="outlined-basic" label="Enter name" onChange={(e) => changeName(e)} />
            <br></br>
            <br></br>
            <Button variant='contained'>add Name</Button>


        </div>
    )
}

export default Add
