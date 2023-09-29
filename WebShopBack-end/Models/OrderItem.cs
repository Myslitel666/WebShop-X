using System;
using System.Collections.Generic;

namespace Models;

public partial class OrderItem
{
    public int OrderItemId { get; set; }

    public int OrderId { get; set; }

    public int ProductId { get; set; }

    public int Quantity { get; set; }

    public int? StartingItemPrice { get; set; }

    public int ItemStatusId { get; set; }

    public virtual OrderStatusDirectory ItemStatus { get; set; } = null!;

    public virtual Order Order { get; set; } = null!;

    public virtual Product Product { get; set; } = null!;
}
