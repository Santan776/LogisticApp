import React from 'react';
import { Dialog, DialogActions, DialogContent, DialogTitle, Button } from '@mui/material';

const InfoDialog = ({ open, handleClose, order }) => {
  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Заказ</DialogTitle>
      <DialogContent>
        {order ? (
          Object.keys(order).map((key) => (
            <div key={key} style={{ marginBottom: '8px' }}>
              <strong>{key}:</strong> {order[key]}
            </div>
          ))
        ) : (
          <div>No data to display</div>
        )}
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Закрыть
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default InfoDialog;