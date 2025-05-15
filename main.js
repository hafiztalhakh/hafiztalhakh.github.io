function countdown() {
  const launchDate = new Date("May 30, 2025 00:00:00").getTime();

  function updateCountdown() {
    const now = new Date().getTime();
    const distance = launchDate - now;

    if (distance < 0) {
      document.getElementById("countdown").innerHTML = "We are live!";
      clearInterval(timer);
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById(
      "countdown"
    ).innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
  }

  updateCountdown(); // Call immediately to prevent delay
  const timer = setInterval(updateCountdown, 1000);
}

window.onload = function () {
  setTimeout(() => {
    document.querySelector(".loader").classList.add("hidden");
    document.querySelector(".container").style.display = "block";
    countdown();
  }, 2000);
};
