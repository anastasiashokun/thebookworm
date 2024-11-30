import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '1px solid #000',
  borderRadius: '6px',
  boxShadow: 24,
  p: 10,
  background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
};

const BasicModal: React.FC = () => {
  const [open, setOpen] = React.useState(false);
  const [comment, setComment] = React.useState('');
  const [savedComment, setSavedComment] = React.useState('');

  const handleOpen = () => {
    setOpen(true);
    const saved = localStorage.getItem('comment');
    if (saved) {
      setSavedComment(saved);
    }
  };

  const handleClose = () => setOpen(false);

  const handleSaveComment = () => {
    localStorage.setItem('comment', comment);
    setSavedComment(comment);
    setComment('');
  };

  return (
    <div>
      <Button onClick={handleOpen} 
      sx={{
        p: 1, 
        fontFamily: 'Josefin Sans',
        bgcolor:'#9d8376',
        color: 'white',
        position: 'relative',
        left: '210px',
        border: '1 px black',
        boxShadow:'0 10px 15px rgba(0, 0, 0.2, 0.2)'
        }}>Comment</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2" sx={{fontFamily: 'Josefin Sans'}}>
            Leave a comment
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2, fontFamily: 'Josefin Sans' }}>
            Write your comment below:
          </Typography>
          <TextField
            variant="outlined"
            fullWidth
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="Add a comment"
            sx={{ mt: 2, mb: 2, fontFamily: 'Josefin Sans' }}
          />
          <Button onClick={handleSaveComment} variant="contained"
           sx={{fontFamily: 'Josefin Sans',
           bgcolor:'#9d8376',
           color: 'white'}}>
            Save Comment
          </Button>
          {savedComment && (
            <Box sx={{ mt: 2, }}>
              <Typography variant="body1" sx={{fontFamily: 'Josefin Sans', pb: '10px', pt: '10px'}}>Saved Comment:</Typography>
              <Typography variant="body2"
               sx={{  fontFamily: 'Josefin Sans'}}>{savedComment}</Typography>
            </Box>
          )}
        </Box>
      </Modal>
    </div>
  );
}

export default BasicModal

