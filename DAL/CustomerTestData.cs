using DAL.Model;
using System;
using System.Collections.Generic;
using System.Text;

namespace DAL
{
    public static class CustomerTestData
    {
        public static void AddCustomers(CustomerDBContext context)
        {
            var a = new CustomerType { Id = 0, Description = "Normal Customers" };
            var b = new CustomerType { Id=1,  Description = "Privileged Customers" };
            context.CustomerTypes.AddRange(new[] { a, b });
            //context.SaveChanges();
            //context.CustomerTypes.Add(b);
            context.Customers.Add(new Customer { Id = 1, Name = "Normal", CustomerType = a });
            context.Customers.Add(new Customer { Id = 2, Name = "Privileged", CustomerType = b });
            context.SaveChanges();
        }
    }
}
