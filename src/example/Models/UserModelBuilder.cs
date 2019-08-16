using System;

namespace MyProject.Models
{
  public class UserBuilder
  {
    private string _firstName = "";
    private string _lastName = "";
    private string _email = "";
    private DateTime _dateOfBirth = new DateTime(1970, 1, 1);
    private long _departmentId = 0;
    private Department _department = null;
    private Role _role = null;
    private IList _skills = null;

    public User Build() =>
      new User
      {
        FirstName = _firstName,
        LastName = _lastName,
        Email = _email,
        DateOfBirth = _dateOfBirth,
        DepartmentId = _departmentId,
        Department = _department,
        Role = _role,
        Skills = _skills
      };

    public UserBuilder WithFirstName(string value)
    {
      _firstName = value;
      return this;
    }

    public UserBuilder WithLastName(string value)
    {
      _lastName = value;
      return this;
    }

    public UserBuilder WithEmail(string value)
    {
      _email = value;
      return this;
    }

    public UserBuilder WithDateOfBirth(DateTime value)
    {
      _dateOfBirth = value;
      return this;
    }

    public UserBuilder WithDepartmentId(long value)
    {
      _departmentId = value;
      return this;
    }

    public UserBuilder WithDepartment(Department value)
    {
      _department = value;
      return this;
    }

    public UserBuilder WithRole(Role value)
    {
      _role = value;
      return this;
    }

    public UserBuilder WithSkills(IList value)
    {
      _skills = value;
      return this;
    }
  }
}
