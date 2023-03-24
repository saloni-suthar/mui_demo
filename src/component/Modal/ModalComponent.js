import React from 'react'
import Index from '../Index'

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    minWidth: 400,
  };


function ModalComponent() {

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);


  return (
    <>
    
    <Index.Box className="modal-component">
    <Index.Button onClick={handleOpen}>Open modal</Index.Button>
      <Index.Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className="modal-open-box"
      >
        <Index.Box sx={style} className="modal-open-bg">
            <Index.Box className="modal-body-open">
            <Index.Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Index.Typography>
          <Index.Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Index.Typography>
            </Index.Box>
        </Index.Box>
      </Index.Modal>
    </Index.Box>

    </>
  )
}

export default ModalComponent