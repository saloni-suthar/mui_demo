import React from 'react'
import Index from '../../Index'

function InputSimple() {
  return (
    <>
    
    <Index.Box className="inputfield" sx={{marginBottom: "60px"}}>
        <Index.SimpleInputField/>
    </Index.Box>

    <Index.Box className="inputfield" sx={{marginBottom: "60px"}}>
        <Index.LabelInputField/>
    </Index.Box>
    
    <Index.Box className="inputfield">
        <Index.PasswordInputField/>
    </Index.Box>
    
    </>
  )
}

export default InputSimple