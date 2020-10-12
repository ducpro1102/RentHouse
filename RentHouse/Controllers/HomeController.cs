using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Web;
using System.Web.Mvc;

namespace RentHouse.Controllers
{
    public class HomeController : Controller
    {

        public ActionResult Login()
        {
            ViewBag.Message = "Login for customer";
            return View();
        }

        public ActionResult LoginForAdmin()
        {
            ViewBag.Message = "Login for admin";

            return View();
        }
        public ActionResult HomePage()
        {
            ViewBag.Message = "Home Page";

            return View();
        }
    }
}