function changeImage(anything) {
  document.getElementById("slider").src = anything;
}

function toggleMenu() {
  const munuToggle = document.querySelector(".menuToggle");
  const navigation = document.querySelector(".navigation");
  munuToggle.classList.toggle("active")
  navigation.classList.toggle("active")
}