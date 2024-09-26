const icon = document.querySelector('[data-js="icon"]');
const button3 = document.querySelector('[data-js="sleep-3-button"]');
const button5 = document.querySelector('[data-js="sleep-5-button"]');
const button10 = document.querySelector('[data-js="sleep-10-button"]');
const body = document.body;

// Fix buttons

button3.addEventListener("click", async () => {
  icon.textContent = "💤";
  sleep(3).then(() => (icon.textContent = "⏰"));
});

button5.addEventListener("click", () => {
  icon.textContent = "💤";
  sleep(5).then(() => (icon.textContent = "⏰"));
});

async function handleSleepFor10Button() {
  icon.textContent = "💤";
  await sleep(10);
  icon.textContent = "⏰";
}

button10.addEventListener("click", handleSleepFor10Button);

// EXTRA: Dark mode

button3.addEventListener("click", async () => {
  body.classList.add("body.dark");
  sleep(3).then(() => body.classList.remove("body.dark"));
});

button5.addEventListener("click", async () => {
  body.classList.add("body.dark");
  sleep(5).then(() => body.classList.remove("body.dark"));
});

button10.addEventListener("click", async () => {
  body.classList.add("body.dark");
  sleep(10).then(() => body.classList.remove("body.dark"));
});

// returns a Promise that resolves after x seconds
function sleep(seconds) {
  const sleepPromise = new Promise((resolve) => {
    setTimeout(() => resolve(), seconds * 1000);
  });
  return sleepPromise;
}
