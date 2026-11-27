const Keyboard = window.SimpleKeyboard.default;

const input = document.getElementById("searchbar");
const container = document.getElementById("keyboard-container");

const keyboard = new Keyboard({
  onChange: (input) => {
    document.getElementById("searchbar").value = input;
  },
  onKeyPress: (button) => {
    if (button === "{enter}") {
      document.getElementById("searchbar").dispatchEvent(
        new KeyboardEvent("keydown", {
          key: "Enter",
          bubbles: true,
        }),
      );
    }
  },
});

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
