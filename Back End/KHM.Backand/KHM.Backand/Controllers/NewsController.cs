using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;

namespace KHM.Backand.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class NewsController : ControllerBase
    {
        private readonly AppDbContext _context;

        public NewsController(AppDbContext context)
        {
            this._context = context;
        }
        [HttpGet]
        public IEnumerable<Novelty> Get()
        {
            return _context.NewsDb.Reverse().ToList();
        }

        [HttpGet("{id}")]
        public ActionResult<Novelty> Get(int id)
        {
            return Ok(_context.NewsDb.SingleOrDefault(i => i.Id == id));
        }

        [HttpPost]
        public ActionResult Post([FromBody] Novelty item)
        {
            if(item == null)
                return BadRequest("News not be null");
            _context.NewsDb.Add(item);
            _context.SaveChanges();
            return Ok(item);
        }

        [HttpPut("{id}")]
        public ActionResult Put([FromRoute] int id, [FromBody] Novelty value)
        {
            if (id != value.Id)
                return BadRequest("News ID mismatch");

            _context.Entry(value).State = EntityState.Modified;
            _context.SaveChanges();
                return Ok(value);
           
        }

        [HttpDelete("{id}")]
        public ActionResult Delete(int id)
        {
            var news = _context.NewsDb.SingleOrDefault(_ => _.Id == id);
            if (news == null)
                return BadRequest("Bunday yangilik mavjud emas");
            _context.NewsDb.Remove(news);
            _context.SaveChanges();
            return Ok(new { Status="removed succes" });
        }
    }
}
