using System;
using System.Collections.Generic;

namespace Models;

public partial class ProductCategory
{
    public int CategoryId { get; set; }

    public string? CategoryName { get; set; }

    public int? ParentCategoryId { get; set; }

    public string? ImageUrlOrNameIcon { get; set; }

    public virtual ICollection<ProductCategory> InverseParentCategory { get; set; } = new List<ProductCategory>();

    public virtual ProductCategory? ParentCategory { get; set; }

    public virtual ICollection<Product> Products { get; set; } = new List<Product>();
}
