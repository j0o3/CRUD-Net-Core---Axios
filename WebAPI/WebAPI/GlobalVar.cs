namespace WebAPI
{
    public class Employee
    {
        public Guid Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public int Age { get; set; }
        public string Department { get; set; }
        public string Email { get; set; }
    }

    public class EmployeePost
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public int Age { get; set; }
        public string Department { get; set; }
        public string Email { get; set; }
    }

    public class EmployeePut
    {
        public Guid Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public int Age { get; set; }
        public string Department { get; set; }
        public string Email { get; set; }
    }

    public class EmployeeDelete
    {
        public Guid Id { get; set; }
    }

    public static class GlobalVar
    {
        public static List<Employee> Employees { get; set; } = new List<Employee>();
    }
}
