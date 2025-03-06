using LogisticApp.Application.Services;
using LogisticApp.Contracts;
using LogisticApp.Core.Models;
using Microsoft.AspNetCore.Mvc;

namespace LogisticApp.Controllers
{
    [ApiController]
    [Route("/api/orders")]
    public class OrdersController : ControllerBase
    {
        [HttpPost("add-new-order")]
        public async Task<IResult> AddNewOrder([FromBody] NewOrderRequest request, OrdersService ordersService)
        {
            var order = Order.Create(request.id, request.senderCity, request.recipientAddress, request.recipientCity, request.recipientAddress,
                request.weight, request.dateOfCollection);

            var result = await ordersService.AddNewOrder(order);

            return result ? Results.Ok() : Results.BadRequest();
        }

        [HttpGet("get-all-orders")]
        public async Task<IResult> GetAllOrders(OrdersService ordersService)
        {
            var result = await ordersService.GetAllOrders();

            return result.success ? Results.Ok(result.orders) : Results.BadRequest();
        }
    }
}
