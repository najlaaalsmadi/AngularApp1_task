using System;
using System.Collections.Generic;

namespace AngularApp1.Server.Models;

public partial class Cart
{
    public int CartId { get; set; }

    public string Description { get; set; } = null!;

    public string Imgprodect { get; set; } = null!;

    public int Quantity { get; set; }

    public int CustomerId { get; set; }

    public int ProductId { get; set; }

    public virtual Customer Customer { get; set; } = null!;

    public virtual Product Product { get; set; } = null!;
}
