import React from 'react'
import Index from '../Index'

function UploadBtnComponent() {
  return (
    <>

        <Index.Box className="title-name-upload">
          <Index.Button variant="contained" component="label" className='upload-sign-btn' disableRipple>
              upload btn
              <input hidden accept="image/*" multiple type="file"  className='inputfile-upload'/>
          </Index.Button>
        </Index.Box>
    
    </>

  )
}

export default UploadBtnComponent