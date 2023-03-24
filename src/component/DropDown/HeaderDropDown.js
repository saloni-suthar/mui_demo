import React from 'react'
import Index from '../Index'
import { styled, alpha } from '@mui/material/styles';

const StyledMenu = styled((props) => (
    <Index.Menu
        elevation={0}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
        }}
        transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
        }}
        {...props}
    />
))(({ theme }) => ({
    '& .MuiPaper-root': {
        borderRadius: 3,
        marginTop: theme.spacing(1),
        minWidth: 258,
        paddingTop: 30,
        paddingBottom: 0,
        paddingLeft: 23,
        marginTop: 38,
        color:
            theme.palette.mode === 'light' ? 'rgb(55, 65, 81)' : theme.palette.grey[300],
        boxShadow:
            '0px 3px 6px #00000029',
        '& .MuiMenu-list': {
            padding: '0px 0',
        },
        '& .MuiMenuItem-root': {
            '& .MuiSvgIcon-root': {
                fontSize: 18,
                color: theme.palette.text.secondary,
                marginRight: theme.spacing(1.5),
            },
            '&:active': {
                backgroundColor: alpha(
                    theme.palette.primary.main,
                    theme.palette.action.selectedOpacity,
                ),
            },
        },
    },
}));



function HeaderDropDown() {


    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };


    
    return (
        <>

<Index.Button
                 className='drop-header-btn'
              id="basic-button"
              aria-controls={open ? 'basic-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
              onClick={handleClick}
              disableRipple
            >
              <Index.Box className="flex-drop-main">
                <img src={Index.Jpg.user} className="admin-header-profile-icon" alt='dashboard bell icon'></img>
                    {/* <Index.Box className="title-admin-drop">
                        <Index.Typography variant="h5" component="h5" className='admin-header-drop'>Admin</Index.Typography>
                    </Index.Box> */}
              </Index.Box>
            </Index.Button>
            <Index.Menu
            className='drop-header-menu'
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                'aria-labelledby': 'basic-button',
              }}
            >
              <Index.MenuItem onClick={handleClose}  className='drop-header-menuitem'>  Profile</Index.MenuItem>
              <Index.MenuItem onClick={handleClose}  className='drop-header-menuitem'> Account Settings</Index.MenuItem>
              <Index.MenuItem onClick={handleClose}  className='drop-header-menuitem'>  Sign Out</Index.MenuItem>
            </Index.Menu>

        </>
    )
}

export default HeaderDropDown