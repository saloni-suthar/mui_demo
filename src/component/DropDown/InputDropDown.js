import React from 'react'
import Index from '../Index'

function InputDropDown() {
    const [age, setAge] = React.useState('');

    const handleChangedropdown = (event) => {
      setAge(event.target.value);
    };

  return (
    <>
    
    <Index.Box className="edit_profile_field">
                              <Index.Box className="form-group from_login_details">
                                <Index.Box className='dropdown-box'>
                                  <Index.FormControl className='form-control'>
                                    <Index.Select className='dropdown-select '
                                      value={age}
                                      onChange={handleChangedropdown}
                                      displayEmpty
                                      inputProps={{ 'aria-label': 'Without label' }}
                                    >
                                      <Index.MenuItem value="" className='menuitem'>Authorised Signatory</Index.MenuItem>
                                      <Index.MenuItem value={10} className='menuitem'>Authorised Signatory</Index.MenuItem>
                                      <Index.MenuItem value={20} className='menuitem'>Authorised Signatory</Index.MenuItem>
                                      <Index.MenuItem value={30} className='menuitem'>Authorised Signatory</Index.MenuItem>
                                    </Index.Select>
                                  </Index.FormControl>
                                </Index.Box>
                              </Index.Box>
                            </Index.Box>
    
    </>
  )
}

export default InputDropDown