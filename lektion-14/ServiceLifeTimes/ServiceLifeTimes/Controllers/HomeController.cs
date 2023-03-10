using Microsoft.AspNetCore.Mvc;
using ServiceLifeTimes.Services;

namespace ServiceLifeTimes.Controllers
{
    public class HomeController : Controller
    {
        private readonly InstanceService _instanceService;
        private readonly TransientService _transientService;
        private readonly ScopedService _scopedService;
        private readonly SingletonService _singletonSerivce;

        public HomeController(TransientService transientService, ScopedService scopedService, SingletonService singletonSerivce)
        {
            _instanceService = new InstanceService();
            _transientService = transientService;
            _scopedService = scopedService;
            _singletonSerivce = singletonSerivce;
        }

        public IActionResult Index()
        {
            ViewData["Title"] = "Instansiering";
            return View(_instanceService);
        }

        public IActionResult Transient()
        {
            ViewData["Title"] = "Transient";
            return View(_transientService);
        }

        public IActionResult Scoped()
        {
            ViewData["Title"] = "Scoped";
            return View(_scopedService);
        }

        public IActionResult Singleton()
        {
            ViewData["Title"] = "Singleton";
            return View(_singletonSerivce);
        }

    }
}
