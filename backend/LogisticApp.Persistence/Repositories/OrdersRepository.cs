using LogisticApp.Core.Models;
using LogisticApp.Core.Stores;
using LogisticApp.Persistence.Entities;
using Microsoft.EntityFrameworkCore;

namespace LogisticApp.Persistence.Repositories
{
    public class OrdersRepository : IOrdersRepository
    {
        public OrdersRepository(ApplicationDbContext context)
        {
            _context = context;
        }

        private readonly ApplicationDbContext _context;

        public async Task Add(Order order)
        {
            var entity = new OrderEntity()
            {
                Id = order.Id,
                SenderCity = order.SenderCity,
                SenderAddress = order.SenderAddress,
                RecipientCity = order.RecipientCity,
                RecipientAddress = order.RecipientAddress,
                Weight = order.Weight,
                DateOfCollection = order.DateOfCollection.ToUniversalTime(),
            };

            _context.Orders.Add(entity);
            await _context.SaveChangesAsync();  
        }

        public async Task<List<Order>> GetAllOrders()
        {
            var orders = await _context.Orders
                .Select(e => Order.Create(
                    e.Id, e.SenderCity, 
                    e.SenderAddress, e.RecipientCity,
                    e.RecipientAddress, e.Weight, 
                    e.DateOfCollection))
                .ToListAsync();

            return orders;
        }
    }
}