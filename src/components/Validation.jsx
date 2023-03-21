import { Button, TextField,} from '@mui/material'
import { isElementType } from '@testing-library/user-event/dist/utils';
import React, { useEffect, useState } from 'react'

const Validation = () => {
    var [submitted,setsubmitted] =useState(false);
    var [inputname,setinputname] =useState({
        fname: ""
    })
    var [validation,setvalidation] =useState({
        fname: ""
    })

    const inputhandler =(e) => {
        const { name,value } =e.target
        setinputname({...inputname,[name]: value })

    }
    const checkvalidation = () => {
        let errors = validation;
        //first Name validation
        if (!inputname.fname.trim()) {
            errors.fname = "First name is required";
        }else{
            errors.fname = "";
        }
        setvalidation(errors);
        }
      useEffect(() =>{
        checkvalidation();
      });
      const handlesubmit = (e) => {
        e.preventDefault();
        setsubmitted(true);
      }

  return (
    <div>
        <form
          id='registrationForm'
          onSubmit={handlesubmit}
        >

          <TextField label='First name' variant='outlined' name='fname' value={inputname.fname} onChange={inputhandler}/>
     <br>
     </br>
     <br></br>
     {(validation.fname && submitted) && <p>{validation.fname}</p>}
     <Button variant='contained' color='success' type=''>Save</Button>
     </form>
    </div>
  )
}

export default Validation
