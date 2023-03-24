import React from 'react'
import Index from '../Index'
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';

function GridComponent() {

    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
      }));
      

  return (
    <>

        <Index.Box className='container'>
          <Index.Box className='grid-row'>
            <Index.Box sx={{ width: 1 }} className="grid-main">

              
              <Index.Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={{ xs: 2, sm: 2, md: 0, lg: 0 }}>
                <Index.Box gridColumn={{ xs: "span 12", sm: "span 6", md: "span 4", lg: "span 2" }} className="grid-column">
                  <Item className='grid-item'>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                  </Item>   
                </Index.Box>
                <Index.Box gridColumn={{ xs: "span 12", sm: "span 6", md: "span 8", lg: "span 7" }} className="grid-column">
                  <Item className='grid-item'>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                  </Item>
                </Index.Box>
                <Index.Box gridColumn={{ xs: "span 12", sm: "span 6", md: "span 4", lg: "span 3" }} className="grid-column">
                  <Item className='grid-item'>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                  </Item>
                </Index.Box>
              </Index.Box>
            </Index.Box>
          </Index.Box>
        </Index.Box>
    
    </>
  )
}

export default GridComponent