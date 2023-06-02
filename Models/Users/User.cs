using Project2.Enums;
using Microsoft.AspNetCore.Identity;

namespace Project2.Models.Users
{
    public class User : BaseEntity.BaseEntity
    {
        public required string Username;
        public required string Password { get; set; }
        public required string Email { get; set; }
        public Role Role { get; set; }
        public bool? IsBanned { get; set; }

    }
}
