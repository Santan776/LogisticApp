import axios from 'axios';

const API_URL = 'http://localhost:5000/';

export const createOrder = async (formData) => {
  return await axios.post(`${API_URL}api/orders/add-new-order`, formData);
}

export const getAllOrders = async () => {
  return await axios.get(`${API_URL}api/orders/get-all-orders`);
}