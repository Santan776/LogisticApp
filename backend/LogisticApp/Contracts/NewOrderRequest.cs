namespace LogisticApp.Contracts
{
    public record NewOrderRequest(Guid id, string senderCity, string senderAddress, string recipientCity, string recipientAddress,
            double weight, DateTime dateOfCollection);
}