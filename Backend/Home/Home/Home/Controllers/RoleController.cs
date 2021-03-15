using Home.ViewModel;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Home.Controllers
{
    [ApiController]
    [Route("api/[Controller]/[action]")]
    public class RoleController : Controller
    {
        private readonly RoleManager<IdentityRole> roleManager;
        public RoleController(RoleManager<IdentityRole> roleManager)
        {
            this.roleManager = roleManager;
        }

        [HttpPost]
        public async Task<IActionResult> CreateRoleAsync(RoleViewModel model)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest();
            }
            IdentityRole identityRole = new IdentityRole
            {
                Name = model.RoleName
            };

            IdentityResult result = await roleManager.CreateAsync(identityRole);
            if (!result.Succeeded)
            {
                return BadRequest();
            }

            return Ok();
        }
    }
}
