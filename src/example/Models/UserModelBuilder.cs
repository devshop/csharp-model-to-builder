using System;

namespace MyProject.Models
{
  public class UserBuilder
  {
    private string _firstName = "";
    private string _lastName = "";
    private string _email = "";
    private DateTime _dateOfBirth = new DateTime(1970, 1, 1);

    public User Build() =>
      new User
      {
        FirstName = _firstName,
        LastName = _lastName,
        Email = _email,
        DateOfBirth = _dateOfBirth
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
  }
}
