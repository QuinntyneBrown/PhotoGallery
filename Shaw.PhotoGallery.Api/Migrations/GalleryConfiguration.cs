using Chloe.Server.Data;
using Chloe.Server.Models;
using System.Linq;
using System.Data.Entity.Migrations;
using System;

namespace Chloe.Migrations
{
    public class GalleryConfiguration
    {
        public static void Seed(ChloeContext context)
        {
            if (context.Galleries.FirstOrDefault(x => x.Title == "Timber Kings") == null)
            {
                var gallery = new Gallery();
                gallery.Name = "Timber Kings";
                gallery.Slug = "timber-kings";
                gallery.Sponsor = new Sponsor() { LogoUrl = "sponsor-logo.jpg" };
                gallery.PublishedDate = DateTime.Now;
                gallery.Photos.Add(
                    new GalleryPhoto()
                    {
                        Photo = context.Photos.Where(x => x.Name == "tree-stump-coffee-table.jpg").Single()
                    });
                gallery.Photos.Add(
                    new GalleryPhoto()
                    {
                        Photo = context.Photos.Where(x => x.Name == "tree-stump-planters.jpg").Single()
                    });
                gallery.Photos.Add(
                    new GalleryPhoto()
                    {
                        Photo = context.Photos.Where(x => x.Name == "tree-stump-wine-rack.jpg").Single()
                    });

                context.Galleries.Add(gallery);
                context.SaveChanges();
            }

            if (context.Galleries.FirstOrDefault(x => x.Title == "Loveland") == null)
            {
                var gallery = new Gallery();
                gallery.Name = "Loveland";
                gallery.Slug = "loveland";
                gallery.PublishedDate = DateTime.Now;
                gallery.Photos.Add(new GalleryPhoto() { Photo = context.Photos.Where(x => x.Name == "loveland-one.jpg").Single() });
                gallery.Photos.Add(new GalleryPhoto() { Photo = context.Photos.Where(x => x.Name == "loveland-two.jpg").Single() });
                gallery.Photos.Add(new GalleryPhoto() { Photo = context.Photos.Where(x => x.Name == "loveland-three.jpg").Single() });
                context.Galleries.Add(gallery);
                context.SaveChanges();
            }
        }
    }
}