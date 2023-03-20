
import { Button, Typography } from '@mui/material'
import React, { useState } from 'react'

const Page = () => {
    var [page, setpage] =useState("")
    const homname=()=>{
        setpage("Home page")
    }
    const gallername=()=>{
        setpage("Gallery page")
    }
    const contactname=()=>{
        setpage("Contact page")
    }
      return (
    <div>
        <Button variant="contained" color="primary" onClick={homname}>Home page</Button>
        <Button variant="contained" color="secondary"onClick={gallername}>Gallery page</Button>
        <Button variant="contained" color="success"onClick={contactname}>Contact page</Button>
        <Typography>Welcome to {page}</Typography>
      
    </div>
  )
}

export default Page
