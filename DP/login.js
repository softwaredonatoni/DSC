document.addEventListener("DOMContentLoaded", function () {

  const pageName = window.location.pathname.split("/").pop();
  sessionStorage.setItem("pageName", pageName);

  if (sessionStorage.getItem("isLoggedIn") !== "true")
  {
      const fragment  = window.location.hash.substring(1);
      const [parametro1] = fragment.split("|");
      let result = 'false';
      const token = 'Donatoni2026!'


                if(parametro1 == token)
                {
                  result = 'True';
                }

              if (result == "True")
              {
                  console.info("login ok");
                  sessionStorage.setItem("isLoggedIn", "true");
              }
              else
              {
                  console.info("login KO");
                  window.location.href = "login.html";
              }


  }

});