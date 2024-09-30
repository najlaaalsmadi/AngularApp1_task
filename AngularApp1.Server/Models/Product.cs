using System;
using System.Collections.Generic;

namespace AngularApp1.Server.Models;

public partial class Product
{
    public int ProductId { get; set; }

    public string Sku { get; set; } = null!;

    public string Description { get; set; } = null!;

    public string Imgprodect { get; set; } = null!;

    public decimal Price { get; set; }

    public int Stock { get; set; }

    public int? CategoryId { get; set; }

    public int? Quantity { get; set; }

    public virtual ICollection<Cart> Carts { get; set; } = new List<Cart>();

    public virtual Category? Category { get; set; }

    public virtual ICollection<OrderItem> OrderItems { get; set; } = new List<OrderItem>();
}
