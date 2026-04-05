const cards = document.querySelectorAll(".card");
const about = document.querySelector(".about");

window.addEventListener("scroll", () => {

  const trigger = window.innerHeight * 0.85;

  // cards animation
  cards.forEach(card => {
    const top = card.getBoundingClientRect().top;
    if(top < trigger){
      card.classList.add("show");
    }
  });

  // about animation
  const aboutTop = about.getBoundingClientRect().top;
  if(aboutTop < trigger){
    about.classList.add("show");
  }

});

function toggleTheme(){
  document.body.classList.toggle("light");
}