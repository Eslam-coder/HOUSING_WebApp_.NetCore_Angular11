using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace House.Model.Repositories
{
    public class PurchaseDbRepository:IRepository<HouseUser>
    {
        HouseContext context;
        public PurchaseDbRepository(HouseContext _context)
        {
            context = _context;
        }

        public void Add(HouseUser houseUser)
        {
            context.HouseUser.Add(houseUser);
            context.SaveChanges();
        }

        public void Delete(int id)
        {
            throw new NotImplementedException();
        }

        public HouseUser Find(int id)
        {
            throw new NotImplementedException();
        }

        public IList<HouseUser> Get()
        {
            throw new NotImplementedException();
        }

        public IList<HouseUser> Search(string term)
        {
            throw new NotImplementedException();
        }

        public void Update(int id, HouseUser entity)
        {
            throw new NotImplementedException();
        }
    }
}
