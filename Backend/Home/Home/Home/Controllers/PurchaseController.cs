using House.Model;
using House.Model.Repositories;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace House.Controllers
{
    [Route("api/[controller]/[Action]")]
    [ApiController]
    public class HouseUserController : Controller
    {
        private readonly IRepository<HouseUser> HouseUserRepository;
        private readonly UserManager<ApplicationUser> _userManager;
        public HouseUserController(IRepository<HouseUser> HouseUserRepository, UserManager<ApplicationUser> userManager)
        {
            this.HouseUserRepository = HouseUserRepository;
            _userManager = userManager;
        }

        [HttpPost]
        public async Task<IActionResult> PostPurchaseAsync(HouseUser houseUser)
        {
            var user = await _userManager.GetUserAsync(User);
            //string userID = user.Id;
                        
            var HouseUser = new HouseUser
            {
                ApplicationUserId = houseUser.ApplicationUserId,
                HouseId = houseUser.HouseId,
                ApplicationUser = houseUser.ApplicationUser,
                House = houseUser.House
            };
            HouseUserRepository.Add(HouseUser);
            return View();
        }
    }
}
