using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace WebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EmployeeController : ControllerBase
    {
        [HttpGet]
        public IActionResult Get()
        {
            return Ok(GlobalVar.Employees);
        }

        [HttpPost]
        public IActionResult Post(EmployeePost model)
        {
            GlobalVar.Employees.Add(new Employee()
            {
                Id = Guid.NewGuid(),
                FirstName = model.FirstName,
                LastName = model.LastName,
                Age = model.Age,
                Department = model.Department,
                Email = model.Email
            });
            return StatusCode(200);
        }

        [HttpPut]
        public IActionResult Update(EmployeePut model)
        {
            Employee employee = GlobalVar.Employees.Where(x => x.Id == model.Id).FirstOrDefault();
            employee.FirstName = model.FirstName;
            employee.LastName = model.LastName;
            employee.Age = model.Age;
            employee.Department = model.Department;
            employee.Email = model.Email;
            return StatusCode(200);
        }

        [HttpDelete()]
        public IActionResult Delete(EmployeeDelete model)
        {
            Employee employee = GlobalVar.Employees.Where(x => x.Id == model.Id).FirstOrDefault();
            GlobalVar.Employees.Remove(employee);
            return StatusCode(200);
        }
    }
}
