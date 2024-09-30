using System;
using System.Collections.Generic;

namespace AngularApp1.Server.Models;

public partial class Payment
{
    public int PaymentId { get; set; }

    public DateTime PaymentDate { get; set; }

    public string PaymentMethod { get; set; } = null!;

    public decimal Amount { get; set; }

    public int CustomerId { get; set; }

    public virtual Customer Customer { get; set; } = null!;
}
