using Chloe.Server.Data;
using Chloe.Server.Models;
using System.Linq;
using System.Data.Entity.Migrations;
using System.IO;
using System;

namespace Chloe.Migrations
{
    public class PhotoConfiguration
    {
        public static void Seed(ChloeContext context)
        {
            if (context.Photos.ToList().Count < 6)
            {

                context.Photos.Add(CreatePhoto("loveland-one.jpg"));
                context.Photos.Add(CreatePhoto("loveland-two.jpg"));
                context.Photos.Add(CreatePhoto("loveland-three.jpg"));
                context.Photos.Add(CreatePhoto("tree-stump-coffee-table.jpg"));
                context.Photos.Add(CreatePhoto("tree-stump-planters.jpg"));
                context.Photos.Add(CreatePhoto("tree-stump-wine-rack.jpg"));

                context.SaveChanges();
            }            
        }

        public static Photo CreatePhoto(string filename)
        {
            return new Photo()
            {
                Name = filename,
                Slug = Path.GetFileNameWithoutExtension(filename),                
                Created = DateTime.Now,
                Modified = DateTime.Now,
                Size = 0
            };
        }
    }
}