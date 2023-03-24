import { PhotoCamera } from '@mui/icons-material'
import React from 'react'
import Index from '../Index'

function CameraBtnFile() {
    return (
        <>

            <Index.Box className="file-upload-main-icon">
                <Index.IconButton color="primary" className='icon-label-upload' aria-label="upload picture" component="label" disableRipple>
                    <input hidden accept="image/*" type="file" className='upload-input-details' />
                    <PhotoCamera />
                </Index.IconButton>
            </Index.Box>


        </>
    )
}

export default CameraBtnFile