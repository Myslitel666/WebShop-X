using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Models;

namespace WebShopBack_end.Controllers
{
    [Route("api/home")]
    [ApiController]
    public class HomeController : ControllerBase
    {
        private WebShopXContext _dbContext;

        public HomeController()
        {
            _dbContext = new WebShopXContext();
        }

        [HttpGet("categories")]
        public async Task<IActionResult> GetCategories()
        {
            try
            {
                var categories = await _dbContext.ProductCategories
                    .Where(c => c.ParentCategoryId == null)
                    .Select(c => new { CategoryName = c.CategoryName, IconUrl = c.ImageUrlOrNameIcon })
                    .ToListAsync();

                return Ok(categories);
            }
            catch (Exception ex)
            {
                // Логируйте ошибку или верните ошибку сервера
                return StatusCode(500, $"Internal Server Error: {ex.Message}");
            }
        }

        [HttpGet("popular-products")]
        public async Task<IActionResult> GetPopularProducts()
        {
            try
            {
                var popularProducts = await _dbContext.Products
                    .OrderByDescending(p => p.SoldCount)
                    .Take(6) // Получить 6 самых популярных товаров
                    .ToListAsync();

                return Ok(popularProducts);
            }
            catch (Exception ex)
            {
                // Логируйте ошибку или верните ошибку сервера
                return StatusCode(500, $"Internal Server Error: {ex.Message}");
            }
        }
    }
}
