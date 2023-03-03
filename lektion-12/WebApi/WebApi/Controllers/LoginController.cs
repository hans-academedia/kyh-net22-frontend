using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using WebApi.Models;

namespace WebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LoginController : ControllerBase
    {
        /*             
            POST    CREATE/SKICKA
            GET     READ/HÄMTA
            PUT     UPDATE/ERSÄTT
            PATCH   UPDATE/UPPDATERA
            DELETE  DELETE/TA BORT
            
            HTTP METHODS    POST, GET, PUT/PATCH, DELETE
            CRUD            CREATE, READ, UPDATE, DELETE

            STATUS CODES
            -----------------------------------------------------------------------------
            200     OK                          ALLT GICK BRA OCH HÄR HAR DU DATA
            201     CREATED                     NÅGOT HAR SKAPATS
            204     NO CONTENT                  ALLT GICK BRA MEN DU FÅR INGEN DATA
            400     BAD REQUEST                 ANVÄNDAREN HAR SKRIVIT FELAKTIG INFORMATION
            401     UNAUTHORIZED                DU ÄR INTE INLOGGAD
            403     FORBIDDEN                   DU ÄR INLOGGAD MEN SAKNAR BEHÖRIGHET
            404     NOT FOUND                   DET DU SÖKER HITTAS INTE
            409     CONFLICT                    DET FINNS REDAN DATA SOM ÄR LIKADANT
            500     INTERNAL SERVER ERROR       NÅTT HAR GÅTT FEL MED BACKEND, INTE ANVÄNDARENS FEL
        */


        [HttpPost]
        public IActionResult Login(LoginForm form)
        {
            if (ModelState.IsValid)
            {
                return Ok("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c");
            }

            return BadRequest("Incorrect email or password");
        }
    }
}
