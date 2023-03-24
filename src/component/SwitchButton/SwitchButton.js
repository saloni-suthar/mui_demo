import React from 'react'
import Index from '../Index';

const label = { inputProps: { 'aria-label': 'Switch demo' } };

function SwitchButton() {
  return (
    <>
    
            <Index.Box className="switch-main-details">
                     <Index.Switch {...label} defaultChecked  className="switch-input"/>
            </Index.Box>
    
    </>
  )
}

export default SwitchButton