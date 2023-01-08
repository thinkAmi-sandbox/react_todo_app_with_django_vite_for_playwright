import {Button, IconButton, Snackbar} from "@mui/material";
import {SyntheticEvent, useState} from "react";
import CloseIcon from '@mui/icons-material/Close'

export const MuiSnackbar = () => {
  const [open, setOpen] = useState<boolean>(false)

  const handleClick = () => {
    setOpen(true)
  }

  const handleClose = (event: SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return
    }

    setOpen(false)
  }

  const action= (
    <IconButton
        id="close_snackbar"
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
  )

  return (
    <>
      <Button id="show_snackbar" onClick={handleClick}>Show Snackbar</Button>

      <Snackbar
        id="snackbar"
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        message="Hello snackbar"
        action={action}
      />
    </>
  )
}