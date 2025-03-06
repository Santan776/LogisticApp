namespace LogisticApp.Persistence.Entities
{
    public class OrderEntity
    {
        public Guid Id { get; set; }

        public string SenderCity { get; set; } = string.Empty;

        public string SenderAddress { get; set; } = string.Empty;

        public string RecipientCity { get; set; } = string.Empty;

        public string RecipientAddress { get; set; } = string.Empty; 

        public double Weight { get; set; }

        public DateTime DateOfCollection { get; set; }
    }
}