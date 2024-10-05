//using AngularApp1.Server.DTO;
//using AngularApp1.Server.Models;

//using Microsoft.AspNetCore.Http;
//using Microsoft.AspNetCore.Mvc;

//namespace AngularApp2.Server.Controllers
//{
//    [Route("api/[controller]")]
//    [ApiController]
//    public class ServicesController : ControllerBase
//    {
//        private readonly MyDbContext _db;
//        public ServicesController(MyDbContext db)
//        {
//            _db = db;
//        }
//        [HttpGet("getServices")]
//        public IActionResult getServices()
//        {
//            var services = _db.Services.ToList();
//            return Ok(services);
//        }
//        [HttpPost("addServices")]
//        public IActionResult addServices([FromForm] ServiceDto model)
//        {
//            var uploadFolder = Path.Combine(Directory.GetCurrentDirectory(), "Images");

//            if (!Directory.Exists(uploadFolder))
//            {
//                Directory.CreateDirectory(uploadFolder);
//            }

//            var ImageFile = Path.Combine(uploadFolder, model.ServiceImage.FileName);

//            using (var stream = new FileStream(ImageFile, FileMode.Create))

//            {
//                model.ServiceImage.CopyToAsync(stream);
//            }

//            var newservice = new Service
//            {
//                ServiceName = model.ServiceName,
//                ServiceDescription = model.ServiceDescription,
//                ServiceImage = model.ServiceImage.FileName,
//            };
//            _db.Services.Add(newservice);
//            _db.SaveChanges();
//            return Ok(newservice);
//        }
//    }
//}

using AngularApp1.Server.DTO;
using AngularApp1.Server.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.IO;
using System.Linq;

namespace AngularApp2.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ServicesController : ControllerBase
    {
        private readonly MyDbContext _db;
        public ServicesController(MyDbContext db)
        {
            _db = db;
        }

        [HttpGet("getServices")]
        public IActionResult getServices()
        {
            var services = _db.Services.ToList();
            return Ok(services);
        }

        [HttpPost("addServices")]
        public IActionResult addServices([FromForm] ServiceDto model)
        {
            // تحقق مما إذا كانت الخدمة موجودة بالفعل
            var existingService = _db.Services.FirstOrDefault(s => s.ServiceName == model.ServiceName);
            if (existingService != null)
            {
                return BadRequest("الخدمة موجودة بالفعل.");
            }

            var uploadFolder = Path.Combine(Directory.GetCurrentDirectory(), "Images");

            if (!Directory.Exists(uploadFolder))
            {
                Directory.CreateDirectory(uploadFolder);
            }

            var ImageFile = Path.Combine(uploadFolder, model.ServiceImage.FileName);

            using (var stream = new FileStream(ImageFile, FileMode.Create))
            {
                model.ServiceImage.CopyTo(stream);
            }

            var newService = new Service
            {
                ServiceName = model.ServiceName,
                ServiceDescription = model.ServiceDescription,
                ServiceImage = model.ServiceImage.FileName,
            };

            _db.Services.Add(newService);
            _db.SaveChanges();
            return Ok(newService);
        }

        [HttpPut("updateService/{serviceId}")]
        public IActionResult updateService(int serviceId, [FromForm] ServiceDto model)
        {
            // البحث عن الخدمة
            var service = _db.Services.Find(serviceId);
            if (service == null)
            {
                return NotFound("الخدمة غير موجودة.");
            }

            // تحديث القيم
            service.ServiceName = model.ServiceName;
            service.ServiceDescription = model.ServiceDescription;

            // تحديث الصورة إذا تم توفيرها
            if (model.ServiceImage != null)
            {
                var uploadFolder = Path.Combine(Directory.GetCurrentDirectory(), "Images");
                if (!Directory.Exists(uploadFolder))
                {
                    Directory.CreateDirectory(uploadFolder);
                }

                var imageFilePath = Path.Combine(uploadFolder, model.ServiceImage.FileName);
                using (var stream = new FileStream(imageFilePath, FileMode.Create))
                {
                    model.ServiceImage.CopyTo(stream);
                }
                service.ServiceImage = model.ServiceImage.FileName;
            }

            _db.Services.Update(service);
            _db.SaveChanges();
            return Ok(service);
        }

        [HttpDelete("deleteService/{serviceId}")]
        public IActionResult deleteService(int serviceId)
        {
            // البحث عن الخدمة
            var service = _db.Services.Find(serviceId);
            if (service == null)
            {
                return NotFound("الخدمة غير موجودة.");
            }

            _db.Services.Remove(service);
            _db.SaveChanges();
            return Ok("تم حذف الخدمة بنجاح.");
        }
    }
}
