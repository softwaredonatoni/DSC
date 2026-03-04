document.addEventListener("DOMContentLoaded", function () {

  const pageName = window.location.pathname.split("/").pop();
  sessionStorage.setItem("pageName", pageName);

  if (sessionStorage.getItem("isLoggedIn") !== "true")
  {
      const fragment  = window.location.hash.substring(1);
      const [parametro1] = fragment.split("|");
      const output = document.getElementById("parametro");

      // crea iframe invisibile
      const iframe = document.createElement("iframe");
      iframe.style.display = "none";

      iframe.src = `https://softwaredonatoni.github.io/DSCEV/#${encodeURIComponent(parametro1)}`;

      iframe.onload = function () {

          try {

              const result = iframe.contentDocument.getElementById("out").textContent.trim();

              if (result == "true" || result == "True")
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
          catch (error)
          {
              console.error("Errore:", error);
          }

      };

      document.body.appendChild(iframe);
  }

});