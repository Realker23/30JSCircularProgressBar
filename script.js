const number = document.getElementById("number");
const input = document.getElementById("input");
const anim = document.querySelector(".anim");

input.oninput = function () {
  this.nextElementSibling.value = `${this.value}%`;
};

input.addEventListener("change", () => {
  document.documentElement.style.setProperty(
    "--keyWidth",
    565 - (565 * input.value) / 100
  );

  anim.classList.remove("anim");

  anim.offsetHeight;
  anim.classList.add("anim");
});

// getComputedStyle(document.documentElement).getPropertyValue("--keyWidth");

let counter = 0;

setInterval(() => {
  if (counter == input.value) {
    clearInterval();
  } else {
    counter++;
    number.innerHTML = `${counter}%`;
  }
}, 2000 / input.value);
