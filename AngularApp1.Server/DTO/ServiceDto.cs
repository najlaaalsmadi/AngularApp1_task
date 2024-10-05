using System.ComponentModel.DataAnnotations.Schema;

namespace AngularApp1.Server.DTO
{
    public class ServiceDto
    {
      

        public string? ServiceName { get; set; }
        public string? ServiceDescription { get; set; }
        public IFormFile ServiceImage { get; set; }
    }
}
