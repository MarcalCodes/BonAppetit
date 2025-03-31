import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

/**
 * Comes from https://mui.com/material-ui/react-dialog/#form-dialogs
 */
const SimpleModal = ({title, open, setOpen, children}) => {
    return (
        <Dialog open={open} onClose={() => setOpen(false)}>
            <DialogTitle>{title}</DialogTitle>
            <DialogContent>
                {children}
            </DialogContent>
        </Dialog>
    )
}

export default SimpleModal