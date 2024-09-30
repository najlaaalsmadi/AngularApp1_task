using System;
using System.Collections.Generic;

namespace AngularApp1.Server.Models;

public partial class Wishlist
{
    public int WishlistId { get; set; }

    public int CustomerId { get; set; }

    public virtual Customer Customer { get; set; } = null!;
}
