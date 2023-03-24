import React from 'react'
import Index from '../Index'
import { styled } from '@mui/material/styles';

const BpIcon = styled('span')(({ theme }) => ({
  borderRadius: '50%',
  width: 21,
  height: 21,
  boxShadow: 'none',
  display: 'flex',
    border: '1px solid #6E66E6',
  backgroundColor: theme.palette.mode === 'dark' ? '#ffffff' : '#ffffff',
  // backgroundImage:
  //   theme.palette.mode === 'dark'
  //     ? 'linear-gradient(180deg,hsla(0,0%,100%,.05),hsla(0,0%,100%,0))'
  //     : 'linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))',
  // '.Mui-focusVisible &': {
  //   outline: '2px auto rgba(19,124,189,.6)',
  //   outlineOffset: 2,
 
  // },
  'input:hover ~ &': {
    backgroundColor: theme.palette.mode === 'dark' ? '#ffffff' : '#ffffff',
  },
  'input:disabled ~ &': {
    boxShadow: 'none',
    background:
      theme.palette.mode === 'dark' ? 'rgba(57,75,89,.5)' : 'rgba(206,217,224,.5)',
  },
}));

const BpCheckedIcon = styled(BpIcon)({
  backgroundColor: '#ffffff',
  // backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))',
  '&:before': {
    display: 'block',
    width:15,
    height: 15,
    backgroundColor: '#6E66E6',
    content: '""',
    borderRadius: '50%',
    margin: 'auto',
  },

});

// Inspired by blueprintjs
function BpRadio(props) {
  return (
    <Index.Radio
      disableRipple
      color="default"
      checkedIcon={<BpCheckedIcon />}
      icon={<BpIcon />}
      {...props}
    />
  );
}


function Radiocomponent() {
  return (
    <>
    
    <Index.Box className="radiobox-main">
    <Index.FormControl className='radio-form-control'>
      <Index.RadioGroup
        defaultValue="female"
        aria-labelledby="demo-customized-radios"
        name="customized-radios"
        className='radio-customized'
      >
        <Index.FormControlLabel value="female" control={<BpRadio />} label="Female"  className='radio-cus-label'/>
        <Index.FormControlLabel value="male" control={<BpRadio />} label="male" className='radio-cus-label'/>
 
      </Index.RadioGroup>
    </Index.FormControl>
    </Index.Box>
    
    </>
  )
}

export default Radiocomponent