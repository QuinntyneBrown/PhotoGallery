using Chloe.Server.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Chloe.Server.Dtos
{
    public class GalleryDto
    {
        public GalleryDto(Gallery model)
        {
            this.Photos = new HashSet<PhotoDto>();

            this.Id = model.Id;
            this.Name = model.Name;            
            this.GalleryPhotosCount = model.Photos.Count;
            this.PublishedDate = model.PublishedDate.ToShortDateString();
            if(model.Sponsor !=null) { this.SponsorLogoUrl = model.Sponsor.LogoUrl; }

            foreach(var photo in model.Photos) { this.Photos.Add(new PhotoDto(photo.Photo)); }
            
        }

        public GalleryDto()
        {

        }

        public int Id { get; set; }
        public string Name { get; set; }
        public int GalleryPhotosCount { get; set; }
        public string SponsorLogoUrl { get; set; }
        public string PublishedDate { get; set; }
        public ICollection<PhotoDto> Photos { get; set; }
    }
}