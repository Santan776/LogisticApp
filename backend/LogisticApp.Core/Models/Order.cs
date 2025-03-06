namespace LogisticApp.Core.Models
{
    public class Order
    {
        private Order(Guid id, string senderCity, string senderAddress, string recipientCity, string recipientAddress, 
            double weight, DateTime dateOfCollection)
        {
            Id = id;
            SenderCity = senderCity;
            SenderAddress = senderAddress;
            RecipientCity = recipientCity;
            RecipientAddress = recipientAddress;
            Weight = weight;
            DateOfCollection = dateOfCollection;
        }

        public Guid Id { get; set; }

        public string SenderCity { get; set; }

        public string SenderAddress { get; set; }

        public string RecipientCity { get; set; }

        public string RecipientAddress { get; set; }

        public double Weight { get; set; }

        public DateTime DateOfCollection { get; set; }

        public static Order Create(Guid id, string senderCity, string senderAddress, string recipientCity, string recipientAddress,
            double weight, DateTime dateOfCollection)
        {
            return new Order(id, senderCity, senderAddress, recipientCity, recipientAddress, weight, dateOfCollection);
        }
    }
}