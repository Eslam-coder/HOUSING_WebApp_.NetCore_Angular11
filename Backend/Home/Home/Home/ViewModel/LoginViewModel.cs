using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;
namespace House.ViewModel
{
    public class LoginViewModel
    {
        [Required]
        [DataType(DataType.EmailAddress)]
        public String Email { get; set; }

        [Required]
        [DataType(DataType.Password)]
        public string Password { get; set; }
        //public bool RemeberMe { get; set; }
    }
}
