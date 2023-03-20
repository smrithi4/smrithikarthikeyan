import { Button, Typography } from '@mui/material'
import React, { useState } from 'react'

const zero = () => {
    var [cnt,setCnt] =useState(0);
    const increment = () =>{
       setCnt(++cnt)
            
    }
    const decrement =() =>{
        setCnt(--cnt)

    }
    return(
        <div>
            <Typography variant='h2'>{cnt}</Typography>
            <br>
           </br>
           <Button variant='contained'onClick={decrement}>-</Button>
           <br>
           </br>
           <br></br>
           <Button variant="contained"onClick={increment}>+</Button>

        </div>
    )
    }


export default zero
