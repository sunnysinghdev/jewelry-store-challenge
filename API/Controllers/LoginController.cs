using DAL;
using DAL.Model;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class LoginController: ControllerBase
    {
        private readonly CustomerDBContext _context;

        public LoginController(CustomerDBContext context)
        {
            _context = context;
        }
        [HttpPost]
        public async Task<IActionResult> Login(Customer customer) 
        {
            var res =_context.Customers.Include(e => e.CustomerType).Where(c => c.Name == customer.Name).FirstOrDefault();
            if (res == null) {
                return Unauthorized();
            }
            return Ok(res);
        }
    }
}
