public class addUserDTO
{
    public string Name { get; set; } = null!;
    public string Email { get; set; } = null!;
    public string? Role { get; set; }
    public DateTime CreatedAt { get; set; } = DateTime.Now; // تعيين الوقت الحالي بشكل افتراضي
    public string Password { get; set; } = null!;

}
