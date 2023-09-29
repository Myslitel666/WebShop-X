using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Models;

namespace WebShopBack_end.Controllers
{
    [Route("api/home")]
    [ApiController]
    public class HomeController : ControllerBase
    {
        private readonly WebShopXContext _dbContext;

        public HomeController(WebShopXContext dbContext)
        {
            _dbContext = dbContext;
        }

        [HttpGet("categories")]
        public async Task<IActionResult> GetCategories()
        {
            var categories = await _dbContext.Categories.ToListAsync();
            return Ok(categories);
        }

        [HttpGet("popular")]
        public async Task<IActionResult> GetPopularProducts()
        {
            var popularProducts = await _dbContext.Products.OrderByDescending(p => p.SoldCount).Take(10).ToListAsync();
            return Ok(popularProducts);
        }
    }
}
