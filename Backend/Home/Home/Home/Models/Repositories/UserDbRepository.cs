using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace House.Model.Repositories
{
    public class UserDbRepository : IRepository<ApplicationUser>
    {
        HouseContext contextUser;
        public UserDbRepository(HouseContext _contextUser)
        {
            contextUser = _contextUser;
        }
        public void Add(ApplicationUser NewUser)
        {
            contextUser.ApplicationUsers.Add(NewUser);
            contextUser.SaveChanges();
        }

        public void Delete(int id)
        {
            
            ApplicationUser UserInDb = contextUser.ApplicationUsers.Find(id);
            contextUser.ApplicationUsers.Remove(UserInDb);
            contextUser.SaveChanges();
        }

        public ApplicationUser Find(int id)
        {
            string InputID = Convert.ToString(id);
            ApplicationUser UserInDb = contextUser.ApplicationUsers.Find(InputID);
            return UserInDb;
        }

        public IList<ApplicationUser> Get()
        {
           List<ApplicationUser> UserList = contextUser.ApplicationUsers.ToList();
            return UserList;
        }

        public IList<ApplicationUser> Search(string term)
        {
            throw new NotImplementedException();
        }

        public void Update(int id, ApplicationUser UpdateUser)
        {
           
            ApplicationUser UserInDb =  contextUser.ApplicationUsers.Find(id);

            UserInDb.Id = UpdateUser.Id;
            UserInDb.UserName = UpdateUser.UserName;
            UserInDb.LastName = UpdateUser.LastName;
            UserInDb.Email = UpdateUser.Email;

            contextUser.SaveChanges();
        }
    }
}
