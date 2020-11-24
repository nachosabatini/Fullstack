using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using PersonasAPI.Contexts;
using PersonasAPI.Models;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace PersonasAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PersonsController : ControllerBase
    {
        private readonly AppDbContext context;
        public PersonsController(AppDbContext context)
        {
            this.context = context;
        }

        // GET: api/<PersonsController>
        [HttpGet]
        public IEnumerable<Persons> Get()
        {
            return context.Persons.ToList();
        }

        // GET api/<PersonsController>/5
        [HttpGet("{id}")]
        public Persons Get(int id)
        {
            var person = context.Persons.FirstOrDefault(p => p.Id == id);
            return person;
        }

        // POST api/<PersonsController>
        [HttpPost]
        public ActionResult Post([FromBody] Persons persons)
        {
            try
            {
                context.Persons.Add(persons);
                context.SaveChanges();
                return new JsonResult("Insert Succesfully");
            }
            catch (Exception ex) {
                return BadRequest();
            }

        }

        // PUT api/<PersonsController>/5
        [HttpPut("{id}")]
        public ActionResult Put(int id, [FromBody] Persons persons)
        {
            if (persons.Id == id)
            {
                context.Entry(persons).State = EntityState.Modified;
                context.SaveChanges();
                return new JsonResult("Update Succesfully");
            }
            else {
                return BadRequest();
            }
        }

        // DELETE api/<PersonsController>/5
        [HttpDelete("{id}")]
        public ActionResult Delete(int id)
        {
            var person = context.Persons.FirstOrDefault(p => p.Id == id);
            if (person != null)
            {
                context.Persons.Remove(person);
                context.SaveChanges();
                return Ok();
            }
            else {
                return BadRequest();
            }
        }
    }
}
