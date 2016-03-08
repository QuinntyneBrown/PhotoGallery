using Chloe.Server.Models;
using System;

namespace Chloe.Server.Dtos
{
    public class PhotoDto
    {
        public PhotoDto(Photo entity)
        {
            this.Id = entity.Id;
            this.Name = entity.Name;
            this.Slug = entity.Slug;
        }

        public PhotoDto()
        {

        }

        public int Id { get; set; }
        public string Name { get; set; }
        public string Slug { get; set; }
        public DateTime Created { get; set; }
        public DateTime Modified { get; set; }
        public long Size { get; set; }


    }
}