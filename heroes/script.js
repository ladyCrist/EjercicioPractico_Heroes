const button1 = document.getElementById("button1");

button1.addEventListener("click", () => {
  const historia1 = document.getElementById("historia1");
  const clase = historia1.classList;
  clase.contains("active") ? clase.remove("active") : clase.add("active");
});

const button2 = document.getElementById("button2");

button2.addEventListener("click", () => {
  const historia2 = document.getElementById("historia2");
  const clase = historia2.classList;
  clase.contains("active") ? clase.remove("active") : clase.add("active");
});

const button3 = document.getElementById("button3");

button3.addEventListener("click", () => {
  const historia3 = document.getElementById("historia3");
  const clase = historia3.classList;
  clase.contains("active") ? clase.remove("active") : clase.add("active");
});

const button4 = document.getElementById("button4");

button4.addEventListener("click", () => {
  const historia4 = document.getElementById("historia4");
  const clase = historia4.classList;
  clase.contains("active") ? clase.remove("active") : clase.add("active");
});

const button5 = document.getElementById("button5");

button5.addEventListener("click", () => {
  const historia5 = document.getElementById("historia5");
  const clase = historia5.classList;
  clase.contains("active") ? clase.remove("active") : clase.add("active");
});
