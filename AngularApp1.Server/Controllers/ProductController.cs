using AngularApp1.Server.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace AngularApp1.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductController : ControllerBase
    {
        private readonly MyDbContext _context;

        public ProductController(MyDbContext context)
        {
            _context = context;
        }

        // GET: api/Product/category/{categoryId}
        [HttpGet("category/{categoryId}")]
        public async Task<ActionResult<IEnumerable<Product>>> GetProductsByCategory(int categoryId)
        {
            var products = await _context.Products
                .Where(p => p.CategoryId == categoryId)
                .ToListAsync();

            if (products == null || products.Count == 0)
            {
                return NotFound(new { Message = "No products found for this category." });
            }

            return Ok(products);
        }
    }
}
