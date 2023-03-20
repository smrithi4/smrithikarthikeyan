import { Button, Typography } from '@mui/material'
import React, { useState } from 'react'

const Statebasics = () => {
    var [fname,setfname] = useState("Tiya")
    const changeName =()=>{
        setfname("meera")
     }
  return (
    <div>
      <Typography>Welcome{fname}</Typography>
      <br>
      </br>
      <Button varient="contained"onClick={changeName}>change</Button>
    </div>
  )
}

export default Statebasics
