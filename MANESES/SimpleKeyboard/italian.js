document.addEventListener("DOMContentLoaded", () => {
  if (!window.SimpleKeyboard) return;

  const Keyboard = window.SimpleKeyboard.default;

  const input = document.getElementById("searchbar");
  if (!input) return;

  const container = document.getElementById("keyboard-container");
  const keyboardElement = document.getElementById("keyboard");

  const keyboard = new Keyboard(keyboardElement, {
    onChange: (value) => {
      input.value = value;

      input.dispatchEvent(
        new Event("input", {
          bubbles: true,
        }),
      );
    },

    onKeyPress: (button) => {
      switch (button) {
        case "{shift}":
        case "{lock}":
          handleShift();
          break;

        case "{enter}":
          input.dispatchEvent(
            new KeyboardEvent("keydown", {
              key: "Enter",
              bubbles: true,
            }),
          );

          break;
      }
    },

    layoutName: "default",

    display: {
      "{bksp}": "⌫",
      "{enter}": "Invio",
      "{shift}": "⇧",
      "{lock}": "Caps",
      "{space}": "Spazio",
      "{tab}": "Tab",
    },

    layout: {
      default: [
        "1 2 3 4 5 6 7 8 9 0 ' ì {bksp}",

        "q w e r t y u i o p è +",

        "{lock} a s d f g h j k l ò à {enter}",

        "{shift} < z x c v b n m , . - {shift}",

        "{space}",
      ],

      shift: [
        `! " £ $ % & / ( ) = ? ^ {bksp}`,

        "Q W E R T Y U I O P É *",

        "{lock} A S D F G H J K L Ç ° {enter}",

        "{shift} > Z X C V B N M ; : _ {shift}",

        "{space}",
      ],
    },
  });

  function handleShift() {
    const current = keyboard.options.layoutName;

    keyboard.setOptions({
      layoutName: current === "default" ? "shift" : "default",
    });
  }

  input.addEventListener("focus", () => {
    container.style.display = "block";

    keyboard.setInput(input.value);
  });

  input.addEventListener("input", () => {
    keyboard.setInput(input.value);
  });

  document.addEventListener("click", (e) => {
    if (!container.contains(e.target) && e.target !== input) {
      container.style.display = "none";
    }
  });
});
/*
 * Sincronizza la tastiera quando l'utente scrive con la tastiera fisica
 */
input.addEventListener("keyup", () => {
  keyboard.setInput(input.value);
});

/*
 * Focus automatico quando si clicca sulla tastiera
 */
keyboardElement.addEventListener("mousedown", (e) => {
  e.preventDefault();
  input.focus();
});

/*
 * Mantiene aperta la tastiera mentre si cliccano i tasti
 */
keyboardElement.addEventListener("click", (e) => {
  e.stopPropagation();
});

/*
 * Mostra la tastiera
 */
function showKeyboard() {
  container.style.display = "block";

  keyboard.setInput(input.value);

  keyboard.setOptions({
    layoutName: "default",
  });
}

/*
 * Nasconde la tastiera
 */
function hideKeyboard() {
  container.style.display = "none";
}

/*
 * Apertura
 */
input.addEventListener("click", showKeyboard);

input.addEventListener("focus", showKeyboard);

/*
 * Chiusura
 */
document.addEventListener("mousedown", (e) => {
  if (e.target === input || container.contains(e.target)) return;

  hideKeyboard();
});

/*
 * ESC chiude la tastiera
 */
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") hideKeyboard();
});

/*
 * Forza il focus iniziale
 */
setTimeout(() => {
  keyboard.setInput(input.value);
}, 100);
