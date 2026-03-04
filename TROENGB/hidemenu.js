document.addEventListener("DOMContentLoaded", function () {
    const sidebar = document.getElementById("sidebar"); // Mascondo il menu sulla destra
    const elementsp = document.querySelectorAll(".nav-chapters.previous");
    const elementsn = document.querySelectorAll(".nav-chapters.next");
    const menuToggle = document.querySelector(".toggle-menu");
    const menu = document.querySelector(".nav-left");

    if (sessionStorage.getItem("hideMenu") == "true") {
        sidebar.style.display = "none";

        elementsp.forEach(element => {
            element.style.display = "none"; // Nasconde ogni elemento
        });

        elementsn.forEach(element => {
            element.style.display = "none"; // Nasconde ogni elemento
        });

        // Controlla se il menu e il pulsante esistono
        if (menu && menuToggle) {
            // Nascondi il menu inizialmente
            menu.classList.add("closed");

            // Aggiungi un gestore per il clic sul pulsante
            menuToggle.addEventListener("click", function () {
                menu.classList.toggle("closed");
            });
        }

    }
    else {
        const fragment = window.location.hash.substring(1); // Prende il valore dopo #
        const [parametro1, parametro2] = fragment.split("|"); // Divide i valori
        const output = document.getElementById("parametro");
        const HIDEMENU = "H";

        if (parametro2 == HIDEMENU) {
            sidebar.style.display = "none";

            elementsp.forEach(element => {
                element.style.display = "none"; // Nasconde ogni elemento
            });

            elementsn.forEach(element => {
                element.style.display = "none"; // Nasconde ogni elemento
            });

            // Controlla se il menu e il pulsante esistono
            if (menu && menuToggle) {
                // Nascondi il menu inizialmente
                menu.classList.add("closed");

                // Aggiungi un gestore per il clic sul pulsante
                menuToggle.addEventListener("click", function () {
                    menu.classList.toggle("closed");
                });
            }


        }
    }

});