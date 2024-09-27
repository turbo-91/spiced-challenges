console.clear();

const runner1 = document.querySelector('[data-js="runner"]:nth-of-type(1)');
const runner2 = document.querySelector('[data-js="runner"]:nth-of-type(2)');
const runner3 = document.querySelector('[data-js="runner"]:nth-of-type(3)');

const startRaceButton = document.querySelector('[data-js="start-race-button"]');

// You'll need to change something about this callback function:
//

/**
 * Hint 1:
 * The relay runners are already available in the global scope as `runner1`,
 * `runner2` and `runner3`.
 *
 * Hint 2:
 * Use `animateRunner(runnerX)` to animate the runners.
 *
 * Hint 3:
 * The `animateRunner` function returns a promise which resolves when the animation is done.
 **/

startRaceButton.addEventListener("click", () => {
  startRaceButton.setAttribute("disabled", "");
  animateRunner(runner1)
    .then(() => animateRunner(runner2))
    .then(() => animateRunner(runner3));
  startRaceButton.removeAttribute("disabled");
});

/**
 * This is a wrapper around the Web Animations API
 * that allows us to use async/await to animate a ball.
 * It returns a promise that resolves when the animation is finished.
 */
function animateRunner(runnerElement) {
  return runnerElement.animate(
    [{ translate: "0 0" }, { translate: "180px 0" }],
    { duration: 2000, fill: "forwards" }
  ).finished;
}
