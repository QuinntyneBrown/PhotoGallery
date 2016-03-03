﻿using System;
using System.Collections.Generic;

namespace Chloe.Server.Models
{
    public class Gallery: BaseEntity
    {
        public Gallery()
        {
            this.Photos = new HashSet<GalleryPhoto>();
            this.MetaData = new HashSet<GalleryMetaDataItem>();
            this.OpenGraphData = new HashSet<GalleryOpenGraphDataItem>();
            this.Tags = new HashSet<GalleryTag>();
        }

        public string Title { get; set; }
        public DateTime PublishedDate { get; set; }
        public string Description { get; set; }
        public int SponsorId { get; set; }
        public Sponsor Sponsor { get; set; }
        public ICollection<GalleryTag> Tags { get; set; }
        public ICollection<GalleryPhoto> Photos { get; set; }
        public ICollection<GalleryMetaDataItem> MetaData { get; set; }
        public ICollection<GalleryOpenGraphDataItem> OpenGraphData { get; set; }
    }
}