import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import { DialogStore } from './reducer';
import * as dialogActions from './actions';
import { useDispatch, useSelector } from 'react-redux';
const styles = (theme:any):any => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const DialogTitle = withStyles(styles)((props:any) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

export default function CustomizedDialogs() {
  //const [open, setOpen] = React.useState(false);

  const dialogStore:DialogStore = useSelector((state:any)=> state.dialog);
  const {visible, message } = dialogStore;
  const dispatch = useDispatch();
  const handleClose = () => {
      dispatch(dialogActions.closeDialogBox());
  };

  return (
    <div>
      <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={visible}>
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          Dialog box
        </DialogTitle>
        <DialogContent dividers>
        {Array.isArray(message) ? message.map((msg:string)=>(
         <Typography>{msg}</Typography>   
        )) : message}
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
