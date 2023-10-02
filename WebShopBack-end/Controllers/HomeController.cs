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
            _dbContext = new ();
        }

        [HttpGet("categories")]
        public async Task<IActionResult> GetDepartments()
        {
            try
            {
                var departments = await _dbContext.ProductCategories
                    .Where(c => c.ParentCategoryId == null)
                    .Select(c => c.CategoryName)
                    .ToListAsync();

                return Ok(departments);
            }
            catch (Exception ex)
            {
                // Логируйте ошибку или верните ошибку сервера
                return StatusCode(500, $"Internal Server Error: {ex.Message}");
            }
        }
    }
}