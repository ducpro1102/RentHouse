using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace RentHouse.Areas.Customer.Controllers
{
    public class CusHomeController : Controller
    {
        // GET: Customer/CusHome
        public ActionResult Index()
        {
            return View();
        }
    }
}