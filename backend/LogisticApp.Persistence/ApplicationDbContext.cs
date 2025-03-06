using LogisticApp.Persistence.Entities;
using Microsoft.EntityFrameworkCore;

namespace LogisticApp.Persistence
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) 
            : base(options)
        {
            Database.EnsureCreated();
        }

        public DbSet<OrderEntity> Orders { get; set; }
    }
} 