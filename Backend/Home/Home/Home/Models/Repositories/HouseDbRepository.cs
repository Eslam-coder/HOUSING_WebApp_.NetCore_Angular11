using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using House.Model;
using House.ViewModel;

namespace House.Model.Repositories
{
    public class HouseDbRepository : IRepository<Housee>
    {
        HouseContext context;
        
        public HouseDbRepository(HouseContext _context)
        {
            context = _context;
        }
        public void Add(Housee NewHouse)
        {

            context.Houses.Add(NewHouse);
            context.SaveChanges();
        }

        public void Delete(int id)
        {
            string InputID = Convert.ToString(id);
            Housee HouseInDb = context.Houses.FirstOrDefault(h => h.HouseId == InputID);
            context.Houses.Remove(HouseInDb);
            context.SaveChanges();
        }

        
        public Housee Find(int id)
        {
            string InputID = Convert.ToString(id);
            Housee HouseInDb =context.Houses.Find(InputID);
            return HouseInDb;

        }

        public IList<Housee> Get()
        {
            IList<Housee> HouseList = context.Houses.ToList();
            return HouseList;
        }

        public IList<Housee> Search(string term)
        {
            List<Housee> ResultSearch = context.Houses
                .Where(
                        h=>h.Name.Contains(term)||
                        h.HouseeType.Contains(term)||
                        h.Furnishing.Contains(term)||
                        h.Address.Contains(term)||
                        h.Description.Contains(term)
                       ).ToList();

            return ResultSearch;
        }

        public void Update(int id, Housee UpdateHouse)
        {
            string InputID = Convert.ToString(id);
            Housee HouseInDb = context.Houses.FirstOrDefault(h => h.HouseId == InputID);

            HouseInDb.Name = UpdateHouse.Name;
            HouseInDb.PossesionDate = UpdateHouse.PossesionDate;
            HouseInDb.Price = UpdateHouse.Price;
            HouseInDb.Security = UpdateHouse.Security;
            HouseInDb.HouseeType = UpdateHouse.HouseeType;
            HouseInDb.Furnishing = UpdateHouse.Furnishing;
            HouseInDb.Address = UpdateHouse.Address;
            HouseInDb.BuiltArea = UpdateHouse.BuiltArea;
            HouseInDb.Description = UpdateHouse.Description;
            HouseInDb.HouseeAge = UpdateHouse.HouseeAge;

            context.SaveChanges();

        }

        
    }
}
