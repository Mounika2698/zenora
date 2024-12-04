import { TextField as MuiTexfield } from '@mui/material';
import { useState } from 'react';



const TextField = (props) => {

    const  {
       label,
       type,
       onChange,
       value,
       name
    } = props
    
    return (
        <>
            <MuiTexfield
                label={label} 
                name={name}
                type={type}
                onChange={onChange}
                value={value}
            />
        </>
    )

}

export default TextField;