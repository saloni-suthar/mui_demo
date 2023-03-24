import React from 'react'
import Index from '../Index'

function ToggleComponent() {

    const [alignment, setAlignment] = React.useState('left');

    const handleAlignment = (event, newAlignment) => {
      setAlignment(newAlignment);
    };

  return (
    <>

        <Index.Box className="com-toggle-btn">
        <Index.ToggleButtonGroup
                    value={alignment}
                    exclusive
                    onChange={handleAlignment}
                    aria-label="text alignment"
                    className='alignment-toggle-group'
                >
                    <Index.ToggleButton value="left" aria-label="left aligned"  className='alignment-toggle-value'>
                        Yes
                    </Index.ToggleButton>
                    <Index.ToggleButton value="center" aria-label="centered" className='alignment-toggle-value'>
                      No
                    </Index.ToggleButton>
                </Index.ToggleButtonGroup>
        </Index.Box>

    </>
  )
}

export default ToggleComponent