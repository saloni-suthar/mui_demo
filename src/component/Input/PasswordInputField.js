import React from 'react'
import Index from '../Index';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';


function PasswordInputField() {


    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);
  
    const handleMouseDownPassword = (event) => {
      event.preventDefault();
    };
  

  return (
    <>
    

    <Index.Box className="input-details-main">
                <Index.Box className="input-box cm-search-box">
                    <Index.Box className="form-group">
                    <Index.Box className="form-group pass_group_main">
                        <OutlinedInput
                          className="form-control custom_form_control"
                          id="outlined-adornment-password"
                          type={showPassword ? 'text' : 'password'}
                          endAdornment={
                            <InputAdornment position="end" className="pass_position">
                              <IconButton
                                className='icon_end_icon'
                                aria-label="toggle password visibility"
                                onClick={handleClickShowPassword}
                                onMouseDown={handleMouseDownPassword}
                                edge="end"
                              >
                                {showPassword ? <VisibilityOff /> : <Visibility />}
                              </IconButton>
                            </InputAdornment>
                          }
                          label="Password"
                        />
                      </Index.Box>
                    </Index.Box>
                </Index.Box>

            </Index.Box>

    
    
    
    </>
  )
}

export default PasswordInputField