using Microsoft.EntityFrameworkCore;

namespace CoreSignalRCrud.Models
{
    public class ApplicationDbContext :DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
        : base(options)
        {
        }
        public virtual DbSet<Product> Products { get; set; }
    }
}
