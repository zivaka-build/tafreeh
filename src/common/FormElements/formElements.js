import React from 'react'
import { useState } from 'react'
export const Input =  ({ register,error,error_class,passToggle,toggleClass,type, ...rest }) => {
  const [tempType,setTempType]=useState('password');

  const toggle=()=>{
    if(tempType==='password'){
      setTempType('text');
    }
    else if(tempType==='text'){
      setTempType('password');
    }
  }
  return(
    <>
      <input
        ref={register}
        type={passToggle?tempType:type}
        {...rest}
      />
    {passToggle?
      tempType==='password'
      ?<i className={`fa fa-eye ${toggleClass}`} onClick={toggle} style={password_vis}></i>:
      <i className={`fa fa-eye-slash ${toggleClass}`} onClick={toggle} style={password_vis}></i>
      :
      null
    }
    {error && <span style={form_error} className={error_class}>{error.message}</span>}
    </>
  )
}

const form_error={
  color:'red'
} 
const password_vis={
  position: 'absolute',
  right: '10px',
  top: '10px',
  fontSize: '25px',
  color: '#f5efefd1',
  cursor: 'pointer',
}
  