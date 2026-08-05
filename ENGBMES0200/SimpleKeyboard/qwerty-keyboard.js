/*
 * Tastiera virtuale QWERTY (italiana), attivata/disattivata da un bottone.
 * - Il bottone #keyboard-toggle abilita o disabilita la tastiera.
 * - Quando attiva, il bottone ha la classe "active" e la tastiera è visibile.
 * - La tastiera scrive nell'ultimo campo di testo che ha ricevuto il focus.
 */
document.addEventListener("DOMContentLoaded", () => {
  if (!window.SimpleKeyboard) return;

  // Il bundle UMD espone la classe come window.SimpleKeyboard.SimpleKeyboard.
  // (Alcune versioni usano .default: gestiamo entrambi i casi.)
  const Keyboard =
    window.SimpleKeyboard.default ||
    window.SimpleKeyboard.SimpleKeyboard ||
    window.SimpleKeyboard;

  const container = document.getElementById("keyboard-container");
  const keyboardElement = document.getElementById("keyboard");
  const toggleBtn = document.getElementById("keyboard-toggle");
  if (!container || !keyboardElement) return;

  // simple-keyboard richiede che l'elemento contenitore abbia una classe.
  keyboardElement.classList.add("simple-keyboard");

  // Campo attualmente collegato alla tastiera.
  let activeInput = null;

  // Tipi di <input> testuali su cui scrivere.
  const TEXT_TYPES = [
    "text",
    "search",
    "email",
    "url",
    "tel",
    "number",
    "password",
  ];

  function isEditable(el) {
    if (!el) return false;
    if (el.tagName === "TEXTAREA") return true;
    if (el.tagName === "INPUT") {
      return TEXT_TYPES.includes((el.getAttribute("type") || "text").toLowerCase());
    }
    return false;
  }

  const keyboard = new Keyboard(keyboardElement, {
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

    onChange: (value) => {
      if (!activeInput) return;
      activeInput.value = value;
      activeInput.dispatchEvent(new Event("input", { bubbles: true }));
    },

    onKeyPress: (button) => {
      if (button === "{shift}" || button === "{lock}") {
        handleShift();
      } else if (button === "{enter}" && activeInput) {
        activeInput.dispatchEvent(
          new KeyboardEvent("keydown", { key: "Enter", bubbles: true }),
        );
      }
    },
  });

  function handleShift() {
    const current = keyboard.options.layoutName;
    keyboard.setOptions({
      layoutName: current === "default" ? "shift" : "default",
    });
  }

  let enabled = false;

  function enableKeyboard() {
    enabled = true;
    container.style.display = "block";
    if (toggleBtn) {
      toggleBtn.classList.add("active");
      toggleBtn.setAttribute("aria-pressed", "true");
    }
    if (activeInput) keyboard.setInput(activeInput.value);
  }

  function disableKeyboard() {
    enabled = false;
    container.style.display = "none";
    if (toggleBtn) {
      toggleBtn.classList.remove("active");
      toggleBtn.setAttribute("aria-pressed", "false");
    }
  }

  function toggleKeyboard() {
    if (enabled) disableKeyboard();
    else enableKeyboard();
  }

  // Bottone di attivazione/disattivazione.
  if (toggleBtn) {
    // Evita che cliccando il bottone il campo di testo perda il focus.
    toggleBtn.addEventListener("mousedown", (e) => e.preventDefault());
    toggleBtn.addEventListener("click", (e) => {
      e.preventDefault();
      toggleKeyboard();
    });
  }

  // Tiene traccia dell'ultimo campo di testo attivo, senza mostrare la tastiera.
  document.addEventListener("focusin", (e) => {
    if (isEditable(e.target)) {
      activeInput = e.target;
      if (enabled) keyboard.setInput(activeInput.value);
    }
  });

  // Sincronizza la tastiera quando si scrive con la tastiera fisica.
  document.addEventListener("input", (e) => {
    if (e.target === activeInput) keyboard.setInput(activeInput.value);
  });

  // Cliccare sulla tastiera non deve togliere il focus al campo attivo.
  container.addEventListener("mousedown", (e) => {
    e.preventDefault();
    if (activeInput) activeInput.focus();
  });
});
