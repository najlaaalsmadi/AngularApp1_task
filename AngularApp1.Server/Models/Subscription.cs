using System;
using System.Collections.Generic;

namespace AngularApp1.Server.Models;

public partial class Subscription
{
    public int SubscriptionId { get; set; }

    public string? SubscriptionName { get; set; }

    public string? SubscriptionAmount { get; set; }

    public string? SubscriptionDescription { get; set; }
}
