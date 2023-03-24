import React from 'react'
import Index from '../../Index'

function UploadFileBtn() {
  return (
    <>

        <Index.Box className="upload-file-text" sx={{marginBottom: "30px"}}>
            <Index.UploadBtnComponent />
        </Index.Box>

        <Index.Box className="icon-upload-file">
            <Index.CameraBtnFile/>
        </Index.Box>


    
    
    </>
  )
}

export default UploadFileBtn