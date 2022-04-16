using System;

namespace KHM.Backand
{
    public class Novelty
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Body { get; set; }
        public DateTime CreatedAt { get; set; }
        public string ImgUrl { get; set; }
        public int Viewed { get; set; }

    }
}
