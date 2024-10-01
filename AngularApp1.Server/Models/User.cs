using System;
using System.Collections.Generic;

namespace AngularApp1.Server.Models;

public partial class User
{
    public int Id { get; set; }

    public string Name { get; set; } = null!;

    public string Email { get; set; } = null!;

    public string? Role { get; set; }

    public DateTime? CreatedAt { get; set; }

    public string Password { get; set; } = null!;
}
