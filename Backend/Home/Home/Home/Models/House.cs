using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;
using House.Model;
using Microsoft.AspNetCore.Http;
using System.ComponentModel.DataAnnotations.Schema;

namespace House.Model
{
    public class Housee
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public string HouseId { get; set; }
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
       
        public virtual ICollection<HouseUser> HouseUser { get; set; }
    }
}
