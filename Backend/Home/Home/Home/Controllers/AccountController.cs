using House.Model;
using House.ViewModel;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace House.Controllers
{
    [Route("api/[controller]/[Action]")]
    [ApiController]
    public class AccountController : ControllerBase
    {
        private readonly Microsoft.AspNetCore.Identity.UserManager<ApplicationUser> userManager;
        private readonly SignInManager<ApplicationUser> signInManager;
        

        public AccountController(Microsoft.AspNetCore.Identity.UserManager<ApplicationUser> UserManager, SignInManager<ApplicationUser> signInManager)
        {
            this.userManager = UserManager;
            this.signInManager = signInManager;
            
        }

        [HttpPost]
        [AllowAnonymous]
        public async Task<IActionResult> RegisterAsync(RegisterViewModel model)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            
            var user = new ApplicationUser
            {
                UserName = model.Email,
                LastName = model.LastName,
                Email = model.Email,
                FirstName = model.FirstName
            };
                var result = await userManager.CreateAsync(user, model.Password);
            if (result.Succeeded)
            {
                await signInManager.SignInAsync(user, isPersistent: false);
            }

            return Ok();
        }


        [AllowAnonymous]
        [HttpPost]
        //[ValidateAntiForgeryToken]
        public async Task<IActionResult> LoginAsync(LoginViewModel model)
        {
            if (ModelState.IsValid)
            {
                var result = await signInManager.PasswordSignInAsync(model.Email, model.Password,false, false);
                
                if (!result.Succeeded)
                {
                    return BadRequest(result);
                }
                return Ok(result);
               
            }

            return Ok();
        }


        [HttpPost]
        public async Task<IActionResult> LogoutAsync()
        {
            await signInManager.SignOutAsync();
            return Ok();
        }
    }
}
