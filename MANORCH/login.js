document.addEventListener("DOMContentLoaded", function () {

    const pageName = window.location.pathname.split("/").pop();
    sessionStorage.setItem("pageName", pageName);

    if (sessionStorage.getItem("isLoggedIn") !== "true")         
    {
        const fragment  = window.location.hash.substring(1); // Prende il valore dopo #
        const [parametro1] = fragment.split("|"); // Divide i valori
        const output = document.getElementById("parametro");        

        fetch(`http://192.168.6.14:8081/api/evaluate?token=${encodeURIComponent(parametro1)}`)
  .then(response => {
    if (!response.ok) throw new Error("Errore nella risposta HTTP");
    return response.json(); // supponiamo che la risposta sia `true` o `false` in JSON
  })
  .then(text => {
 
    if (text == "True"){ 
    //RICHIESTA IN OK
    console.info("login ok");
    sessionStorage.setItem("isLoggedIn", "true");   
    }
    else {
    //RICHIESTA IN KO
    console.info("login KO");
    window.location.href = "login.html"; // Torna alla pagina di login se non autenticato
    }
  })
  .catch(error => {
    console.error("Errore:", error);
  });

    }    
});