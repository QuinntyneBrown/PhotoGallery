using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Chloe.Server.Models
{
    public class Gallery: BaseEntity
    {
        public Gallery()
        {
            this.GalleryPhotos = new HashSet<GalleryPhoto>();
        }

        public string Title { get; set; }
        public DateTime PublishedDate { get; set; }
        public string Description { get; set; }
        public ICollection<GalleryPhoto> GalleryPhotos { get; set; }
    }
}