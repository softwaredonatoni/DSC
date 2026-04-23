document.addEventListener("DOMContentLoaded", function () {
    const pageName = window.location.pathname.split("/").pop();
    sessionStorage.setItem("pageName", pageName);

    if (sessionStorage.getItem("isLoggedIn") !== "true") {
        const fragment = window.location.hash.substring(1);
        const [parametro1] = fragment.split("|");

        if (!parametro1) {
            console.info("Token mancante");
            window.location.href = "login.html";
            return;
        }

        fetch(`http://192.168.6.14:8081/api/evaluate?token=${encodeURIComponent(parametro1)}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error("Errore nella risposta HTTP");
                }
                return response.json();
            })
            .then(text => {
                if (text === true || text === "True") {
                    console.info("login ok");
                    sessionStorage.setItem("isLoggedIn", "true");
                } else {
                    console.info("login KO");
                    window.location.href = "login.html";
                }
            })
            .catch(error => {
                console.error("Errore:", error);
                window.location.href = "login.html";
            });
    }
});