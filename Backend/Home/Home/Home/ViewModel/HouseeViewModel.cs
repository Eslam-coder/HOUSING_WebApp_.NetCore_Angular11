using House.Model;
using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace House.ViewModel
{
    public class HouseeViewModel
    {
        //public Housee Housee { get; set; }

        //public string HouseId { get; set; }
        public string Name { get; set; }
        public string HouseeType { get; set; }
        public string Furnishing { get; set; }
        public decimal Price { get; set; }
        public decimal Security { get; set; }
        public decimal BuiltArea { get; set; }
        public string Address { get; set; }
        public DateTime PossesionDate { get; set; }
        public int HouseeAge { get; set; }
        public string Description { get; set; }
        public string Image { get; set; }
        public IFormFile File { get; set; }
    }
}
