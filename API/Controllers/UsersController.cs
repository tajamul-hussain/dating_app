using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Data;
using API.Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{

    
    public class UserController : BaseApiController
    {
        private readonly DataContext _context;
        public UserController(DataContext context)
        {
            _context = context;
        }
        [HttpGet]
        public async Task< ActionResult<IEnumerable<AppUser>>> GetUsers()
        {
            var users= await _context.Users.ToListAsync();
            return users;

        }

         [HttpGet("{id}")]

         public  async Task<ActionResult<AppUser> >GetUsers(int id)
        {
            var user= await _context.Users.FindAsync(id);
            return user;

        }

    }
}