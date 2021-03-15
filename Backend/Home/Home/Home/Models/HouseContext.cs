using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;



namespace House.Model
{
    public class HouseContext: IdentityDbContext
    {
        public HouseContext(DbContextOptions<HouseContext> options) : base(options)
        {

        }

        public DbSet<Housee> Houses { get; set; }
        public DbSet<ApplicationUser> ApplicationUsers { get; set; }
        public  DbSet<HouseUser> HouseUser { get; set; }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);

            //builder.ApplyConfiguration<HouseUser>.Add(new HouseUserConfiguration());

            builder.Entity<HouseUser>().HasKey(h => new { h.HouseId, h.ApplicationUserId });
            //builder.Entity<HouseUser>().HasKey(h => h.HouseId);

        }
    }
}
