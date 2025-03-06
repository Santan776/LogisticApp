import React from 'react';
import { Box, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function Main() {
  const navigate = useNavigate();
  return (
    <>
      <Box sx={{
        width: '100%',
        height: '100vh',
        backgroundColor: '#fff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <Box display='flex' gap={2}>
          <Button
            variant='outlined'
            sx={{ borderRadius: '10px', fontSize: '1.4rem' }}
            onClick={() => navigate('/orders')}
          >
            Все заказы
          </Button>
          <Button
            variant='contained'
            sx={{ borderRadius: '10px', fontSize: '1.4rem' }}
            onClick={() => navigate('/create-order')}
          >
            Создать заказ
          </Button>
        </Box>
      </Box>
    </>
  )
}

export default Main;