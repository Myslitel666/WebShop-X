using System;
using System.Collections.Generic;

namespace Models;

public partial class Product
{
    public int ProductId { get; set; }

    public string? PoductName { get; set; }

    public string? Description { get; set; }

    public int? Price { get; set; }

    public int CategoryId { get; set; }

    public string? ImageUrl { get; set; }

    public int? SoldCount { get; set; }

    public virtual ProductCategory Category { get; set; } = null!;

    public virtual ICollection<OrderItem> OrderItems { get; set; } = new List<OrderItem>();

    public virtual ICollection<Review> Reviews { get; set; } = new List<Review>();
}
