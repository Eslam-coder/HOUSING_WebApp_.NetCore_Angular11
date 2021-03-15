using House.Model;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using House.Model.Repositories;
using House.ViewModel;
using System.IO;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Authorization;

namespace House.Controllers
{
    [Route("api/[controller]/[Action]")]
    [ApiController]
    public class HouseController : Controller
    {
        private readonly Model.Repositories.IRepository<Housee> houseRepository;

        public IHostingEnvironment Hosting { get; }

        public HouseController(IRepository<Housee> HouseRepository, IHostingEnvironment hosting)
        {
            houseRepository = HouseRepository;
            Hosting = hosting;
        }

        //Get  /api/House
        [HttpGet]
        //[ValidateAntiForgeryToken]
        public IActionResult GetHouses()
        {
            IList<Housee> HouseList = houseRepository.Get();
            return Ok(HouseList);
        }


        //GetById /api/House/1
        [HttpGet]
        //[ValidateAntiForgeryToken]
        public IActionResult GetHouseByID(int id)
        {
            Housee HouseInDb = houseRepository.Find(id);

            if (HouseInDb == null)
                return NotFound();

            return Ok(HouseInDb);
        }


        //[Authorize(Roles = "Admin")]
        //Post /api/House/CreateNewHouse
        [HttpPost]
        public IActionResult PostCreateNewHouse(Housee newHouse)
        {
            if (!ModelState.IsValid)
                return BadRequest();

            Housee NewHouse = new Housee
            {
                HouseId = "10",
                Name = newHouse.Name,
                HouseeType = newHouse.HouseeType,
                Furnishing = newHouse.Furnishing,
                Price = newHouse.Price,
                Security = newHouse.Security,
                BuiltArea = newHouse.BuiltArea,
                Address = newHouse.Address,
                PossesionDate = newHouse.PossesionDate,
                HouseeAge = newHouse.HouseeAge,
                Description = newHouse.Description,
                Image = newHouse.Image
            };

            houseRepository.Add(NewHouse);

            return Ok(NewHouse);
        }


        //Search /api/House/Search 
        public IActionResult Search(string term)
        {
            IList<Housee> ResultSearch = houseRepository.Search(term);
            return Ok(ResultSearch);
        }


        //Put /api/House/Delete/1
        //[Authorize(Roles = "Admin")]
        [HttpPut]
        public IActionResult Update(int id, Housee UpdateHouse)
        {
            houseRepository.Update(id,UpdateHouse);
            return Ok();
        }



        //Delete /api/House/Delete/1
        //[Authorize(Roles = "Admin")]
        [HttpDelete]
        public IActionResult Delete(int id)
        { 
            houseRepository.Delete(id);
            return Ok();
        }
        
    }
}
