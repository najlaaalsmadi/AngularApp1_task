using AngularApp1.Server.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Identity; // تأكد من إضافة هذا namespace
using System.Linq;
using AngularApp1.Server.DTO;

namespace AngularApp1.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly MyDbContext _context;

        public UserController(MyDbContext context)
        {
            _context = context;
        }

        // دالة لتسجيل المستخدمين
        [HttpPost("register")]
        public IActionResult AddUser([FromForm] addUserDTO userDTO)
        {
            var checkUser = _context.Users.FirstOrDefault(x => x.Email == userDTO.Email);

            if (checkUser != null)
            {
                return BadRequest("User already exists");
            }

            // تشفير كلمة المرور
            var passwordHasher = new PasswordHasher<User>();
            var hashedPassword = passwordHasher.HashPassword(null, userDTO.Password); // استبدل null بكائن User

            var user = new User
            {
                Name = userDTO.Name,
                Email = userDTO.Email,
                Role = userDTO.Role,
                CreatedAt = DateTime.Now,
                Password = hashedPassword // تخزين كلمة المرور المشفرة
            };

            _context.Users.Add(user);
            _context.SaveChanges();

            return Ok(user);
        }

        // دالة لتسجيل الدخول
        [HttpPost("login")]
        public IActionResult Login([FromForm] LoginDto loginDto)
        {
            var user = _context.Users.FirstOrDefault(x => x.Email == loginDto.Email);

            if (user == null)
            {
                return Unauthorized("Invalid email or password");
            }

            // التحقق من كلمة المرور
            var passwordHasher = new PasswordHasher<User>();
            var result = passwordHasher.VerifyHashedPassword(user, user.Password, loginDto.Password);

            if (result == PasswordVerificationResult.Failed)
            {
                return Unauthorized("Invalid email or password");
            }

            // إذا كانت بيانات اعتماد تسجيل الدخول صحيحة، يمكنك إرجاع معلومات المستخدم أو توكن JWT
            return Ok(new { user.Name, user.Email, user.Role });
        }
    }

   
}
