using System;
using System.Collections.Generic;
using Enums;

namespace MyProject.Models
{
    public class User
    {
      public string FirstName { get; set; }

      public string LastName { get; set; }

      public string Email { get; set; }

      public DateTime DateOfBirth { get; set; }   

      public long DepartmentId { get; set; }   

      public virtual Department Department { get; set; }

      public Role Role { get; set; }

      public virtual IList<Skill> Skills { get; set; } = new List<Skill>();
    }
}