import * as React from 'react'
import Button from '@mui/material/Button'
import PropTypes from 'prop-types'
import clsx from 'clsx'
import { styled, Box } from '@mui/system'
import { Modal } from '@mui/base/Modal'

export function ModalUnstyled(props) {
  const [open, setOpen] = React.useState(false)

  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  const openHandleChange = () => {
    props.element.status = 'open'
    props.setOrders([...props.orders])
  }
  const readyHandleChange = () => {
    props.element.status = 'ready'
    props.setOrders([...props.orders])
  }
  const cancelHandleChange = () => {
    props.element.status = 'cancel'
    props.setOrders([...props.orders])
  }

  return (
    <div>
      <TriggerButton type="button" onClick={handleOpen}>
        {props.element.id}
      </TriggerButton>
      <StyledModal
        aria-labelledby="unstyled-modal-title"
        aria-describedby="unstyled-modal-description"
        open={open}
        onClose={handleClose}
        slots={{ backdrop: StyledBackdrop }}
      >
        <Box sx={style}>
          <h2 id="unstyled-modal-title" style={{ textAlign: 'center' }}>Select order status No. {props.element.id}:</h2>
          <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
            <Button
              id="unstyled-modal-description"
              variant='outlined'
              color='inherit'
              style={{ fontSize: '1rem', margin: '5px' }}
              onClick={openHandleChange}
              disabled={props.element.status === 'open'}
            >
              Open
            </Button>
            <Button
              id="unstyled-modal-description"
              variant='outlined'
              color='inherit'
              style={{ fontSize: '1rem', margin: '5px' }}
              onClick={readyHandleChange}
              disabled={props.element.status === 'ready'}
            >
              Ready
            </Button>
            <Button
              id="unstyled-modal-description"
              variant='outlined'
              color='inherit'
              style={{ fontSize: '1rem', margin: '5px' }}
              onClick={cancelHandleChange}
              disabled={props.element.status === 'close'}
            >
              Close
            </Button>
          </div>
        </Box>
      </StyledModal>
    </div >
  )
}

const Backdrop = React.forwardRef((props, ref) => {
  const { open, className, ...other } = props
  return (
    <div
      className={clsx({ 'MuiBackdrop-open': open }, className)}
      ref={ref}
      {...other}
    />
  )
})

Backdrop.propTypes = {
  className: PropTypes.string.isRequired,
  open: PropTypes.bool,
}

const blue = {
  200: '#99CCF3',
  400: '#3399FF',
  500: '#007FFF',
}

const grey = {
  50: '#f6f8fa',
  100: '#eaeef2',
  200: '#d0d7de',
  300: '#afb8c1',
  400: '#8c959f',
  500: '#6e7781',
  600: '#57606a',
  700: '#424a53',
  800: '#32383f',
  900: '#24292f',
}

const StyledModal = styled(Modal)`
  position: fixed;
  z-index: 1300;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`

const StyledBackdrop = styled(Backdrop)`
  z-index: -1;
  position: fixed;
  inset: 0;
  background-color: rgb(0 0 0 / 0.5);
  -webkit-tap-highlight-color: transparent;
`

const style = (theme) => ({
  width: 400,
  borderRadius: '12px',
  padding: '16px 32px 24px 32px',
  backgroundColor: theme.palette.mode === 'dark' ? '#0A1929' : 'white',
  boxShadow: `0px 2px 24px ${theme.palette.mode === 'dark' ? '#000' : '#383838'}`,
})

const TriggerButton = styled('button')(
  ({ theme }) => `
  font-family: IBM Plex Sans, sans-serif;
  font-size: 2rem;
  box-sizing: border-box;
  padding: 9px 18px;
  margin: 5px;
  background: #ffffff;
  border: 1px solid ${theme.palette.mode === 'dark' ? grey[800] : grey[200]};
  color: ${theme.palette.mode === 'dark' ? grey[100] : grey[900]};

  &:hover {
    background: ${theme.palette.mode === 'dark' ? grey[800] : grey[50]};
    border-color: ${theme.palette.mode === 'dark' ? grey[600] : grey[300]};
  }

  &:focus-visible {
    border-color: ${blue[400]};
    outline: 3px solid ${theme.palette.mode === 'dark' ? blue[500] : blue[200]};
  }
  `,
)