using LogisticApp.Core.Models;
using LogisticApp.Core.Stores;
using Microsoft.Extensions.Logging;

namespace LogisticApp.Application.Services
{
    public class OrdersService(IOrdersRepository ordersRepository, ILogger<OrdersService> logger)
    {
        public async Task<bool> AddNewOrder(Order order)
        {
            try
            {
                await ordersRepository.Add(order); 

                return true;
            }
            catch (Exception ex)
            {
                logger.LogError(ex.ToString());
                return false;
            }
        }

        public async Task<(bool success, List<Order> orders)> GetAllOrders()
        {
            try
            {
                var orders = await ordersRepository.GetAllOrders();

                return (true, orders);
            }
            catch (Exception ex)
            {
                logger.LogError(ex.ToString());
                return (false, new List<Order>());
            }
        }
    }
}