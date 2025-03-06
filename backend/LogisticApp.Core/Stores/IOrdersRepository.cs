using LogisticApp.Core.Models;

namespace LogisticApp.Core.Stores
{
    public interface IOrdersRepository
    {
        Task Add(Order order);

        Task<List<Order>> GetAllOrders();
    }
}