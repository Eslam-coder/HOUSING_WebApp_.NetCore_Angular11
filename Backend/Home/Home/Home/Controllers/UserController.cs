using House.Model;
using House.Model.Repositories;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace House.Controllers
{
    [Route("api/[controller]/[Action]")]
    [ApiController]
    public class UserController : Controller
    {
        private readonly IRepository<ApplicationUser> userRepository;
        public UserController(IRepository<ApplicationUser> UserRepository)
        {
            userRepository = UserRepository;
        }

        //Get /api/User/Get
        [HttpGet]
        public IActionResult Get()
        {
            IList<ApplicationUser> UsersList= userRepository.Get();
            return Ok(UsersList);
        }

        //Delete /api/User/Delete
        [HttpDelete]
        public IActionResult Delete(int id)
        {
            userRepository.Delete(id);
            return Ok();
        }
    }
}
