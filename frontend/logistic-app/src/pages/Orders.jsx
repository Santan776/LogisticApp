import { Box, Button, Typography } from '@mui/material';
import React, { useState } from 'react'
import InfoDialog from '../components/InfoDialog';
import { useNavigate } from 'react-router-dom';
import { getAllOrders } from '../services/ordersService';

function Orders() {
  const navigate = useNavigate();
  const [orders, setOrders] = useState([]);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState(null);

  useState(() => {
    const getOrders = async () => {
      try {
        const response = await getAllOrders();
        setOrders(response.data);
        console.log(response.data)
      } catch (e) {
        console.error(e);
      }
    };

    getOrders();
  }, []);

  const handleOrderClick = (order) => {
    setSelectedOrder(order);
    setDialogOpen(true);
  }

  return (
    <Box sx={{
      width: '100%',
      height: '100vh',
      backgroundColor: '#fff',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <InfoDialog
        open={dialogOpen}
        handleClose={() => setDialogOpen(false)}
        order={selectedOrder}
      />
      <Button onClick={() => navigate('/')} sx={{ position: 'absolute', top: '30px', left: '30px' }}>
        Назад
      </Button>
      <Box display='flex' flexDirection='column'>
        {orders.map((order, index) => (
          <Box key={index} p={2} gap={2} mb={1} sx={{ borderRadius: '10px', border: '2px solid #000' }}>
            <Typography>Откуда: {order.senderCity}</Typography>
            <Typography>Куда: {order.recipientCity}</Typography>
            <Typography>ID: {order.id}</Typography>
            <Button
              variant='outlined'
              sx={{ borderRadius: '10px' }}
              onClick={() => handleOrderClick(order)}
            >
              Подробнее
            </Button>
          </Box>
        ))}
      </Box>
    </Box>
  )
}

export default Orders;