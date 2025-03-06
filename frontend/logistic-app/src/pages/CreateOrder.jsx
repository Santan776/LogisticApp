import { Box, Button, TextField, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { createOrder } from '../services/ordersService';

function CreateOrder() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    id: '',
    senderCity: '',
    senderAddress: '',
    recipientCity: '',
    recipientAddress: '',
    weight: 0,
    dateOfCollection: ''
  });
  const [error, setError] = useState('');

  useEffect(() => {
    setFormData((prev) => ({ ...prev, id: crypto.randomUUID() }));
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: name === "weight" ? value.replace(/\D/g, "") : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const isEmpty = Object.values(formData)
      .filter(key => key !== 'id')
      .some(value => value === '');
    if (isEmpty) {
      setError('Все поля должны быть заполнены');
      return;
    }
    try {
      await createOrder(formData);
      navigate('/orders');
    } catch (e) {
      console.error(e.response.data);
      setError(e.response.data);
    }
  };

  return (
    <Box sx={{
      width: '100%',
      height: '100vh',
      backgroundColor: '#fff',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <Button onClick={() => navigate('/')} sx={{ position: 'absolute', top: '30px', left: '30px' }}>
        Назад
      </Button>
      <Box p={3} sx={{ border: '2px solid #000', borderRadius: '10px' }}>
        <Typography variant='h5' textAlign='center' mb={1}>
          Новый заказ
        </Typography>
        {error !== '' &&
          <Typography textAlign='center' color='red'>{error}</Typography>
        }
        <form onSubmit={handleSubmit}>
          <Box display='flex' p={2} gap={2}>
            <TextField
              variant='outlined'
              label='Город отправителя'
              name='senderCity'
              onChange={handleChange}
              value={formData.senderCity}
            />
            <TextField
              variant='outlined'
              label='Адрес отправителя'
              name='senderAddress'
              onChange={handleChange}
              value={formData.senderAddress}
            />
          </Box>
          <Box display='flex' p={2} gap={2}>
            <TextField
              variant='outlined'
              label='Город получателя'
              name='recipientCity'
              onChange={handleChange}
              value={formData.recipientCity}
            />
            <TextField
              variant='outlined'
              label='Адрес получателя'
              name='recipientAddress'
              onChange={handleChange}
              value={formData.recipientAddress}
            />
          </Box>
          <Box display='flex' p={2} gap={2}>
            <TextField
              variant='outlined'
              label='Вес'
              name='weight'
              onChange={handleChange}
              value={formData.weight}
            />
            <TextField
              variant='outlined'
              label='Дата сборки'
              name='dateOfCollection'
              onChange={handleChange}
              value={formData.dateOfCollection}
              type="date"
              InputLabelProps={{ shrink: true }}
            />
          </Box>
          <Box mt={1} display='flex' justifyContent='center'>
            <Button type='submit' variant='outlined' sx={{ borderRadius: '10px' }}>Создать</Button>
          </Box>
        </form>
      </Box>
    </Box>
  )
}

export default CreateOrder;