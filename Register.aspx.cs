using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace BTL
{
    public class Account
    {
        public string email, username, password;
        public Account(string email, string username, string password)
        {
            this.email = email;
            this.username = username;
            this.password = password;
        }
    }
    public partial class Register : System.Web.UI.Page
    {   
        protected void Page_Load(object sender, EventArgs e)
        {
            String email, username, password;
            email = Request.Form["email"];
            username = Request.Form["username"];
            password = Request.Form["password"];
            if(email != null && username != null && password != null)
            {
                Account account = new Account(email, username, password);

                if (Application["accounts"] == null)
                {
                    List<Account> accounts = new List<Account>();
                    accounts.Add(account);
                    Application["accounts"] = accounts;
                }
                else
                {
                    List<Account> accounts = (List<Account>)Application["accounts"];
                    accounts.Add(account);
                    Application["accounts"] = accounts;
                }
                Response.Redirect("register.html?success=1");

            }


        }
    }
}