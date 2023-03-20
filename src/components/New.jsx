import { TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

const New = () => {
    var[inputname,setinputname] =useState({
        fname:"",
        lname:''

    })
    const inputhandler =(e)=>{
        const { name,value } =e.target
        setinputname({...inputname,[name]:value})

    }
  return (
    <div>
      
     <Typography>First name is {inputname.fname}</Typography>
     <TextField label='First name' variant='outlined'name='fname' value={inputhandler.fname} onChange={inputhandler}/>
     <br>
     </br>
     <Typography>Second name is {inputname.lname}</Typography>
     <TextField label='second name' variant='outlined'name='lname'value={inputhandler.lname} onChange={inputhandler} />
     </div>
  )
}

export default New
