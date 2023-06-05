using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace BTL
{
    public partial class Login : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            String email, password;
            email = Request.Form["email"];
            password = Request.Form["password"];
            List<Account> accounts = (List<Account>)Application["accounts"];
            Boolean check = false;
            if(accounts != null)
            {
                foreach (Account account in accounts)
                {
                    if (account.email == email && account.password == password)
                    {
                        Session["current_user"] = account.username;
                        Response.Write("This is email: " + account.email + "\n");
                        Response.Write("This is username: " + account.username + "\n");
                        Response.Write("This is password: " + account.password);
                        check = true;
                        break;
                    }

                }
                if (!check)
                {
                    Response.Redirect("login.html?success=0");
                }
                else
                {
                    Response.Redirect("home.html?success=1");
                }
            } else
            {
                Response.Redirect("login.html?success=0");
            }
            
        }
    }
}