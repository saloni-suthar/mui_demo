import React from 'react'
import Index from '../Index'

function PrimaryButton(props) {
  return (
    <>
    
    <Index.Box className='primary-main-component'>
        <Index.Button className={props.className} onClick={props.onClick} disableRipple>{props.btnLabel}</Index.Button>
    </Index.Box>

    </>
  )
}

export default PrimaryButton