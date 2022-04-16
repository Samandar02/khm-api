using Microsoft.EntityFrameworkCore;

namespace KHM.Backand
{
    public class AppDbContext:DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options):base(options)
        {

        }
        public DbSet<Novelty> NewsDb { get; set; }
    }
}
