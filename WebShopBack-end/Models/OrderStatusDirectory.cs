using System;
using System.Collections.Generic;

namespace Models;

public partial class OrderStatusDirectory
{
    public int OrderStatusId { get; set; }

    public string? OrderStatus { get; set; }

    public virtual ICollection<OrderItem> OrderItems { get; set; } = new List<OrderItem>();
}
