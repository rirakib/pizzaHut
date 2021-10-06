
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    var upperBtn = document.getElementById('upper_btn')
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    upperBtn.style.display = "block";
  } else {
    upperBtn.style.display = "none";
  }
}