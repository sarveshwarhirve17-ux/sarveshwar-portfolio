// typing effect
const text = "Frontend Developer | React | Open to Work";
let i = 0;

function typing() {
  if (i < text.length) {
    document.querySelector(".typing").innerHTML += text.charAt(i);
    i++;
    setTimeout(typing, 50);
  }
}
typing();

// dark mode
function toggleTheme() {
  document.body.classList.toggle("light");
}

// scroll animation
window.addEventListener("scroll", () => {
  document.querySelectorAll(".reveal").forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      el.classList.add("active");
    }
  });
});