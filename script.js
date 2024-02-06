let count = 0;

function addcount() {
  count += 1;
}
function displaycount() {
  document.querySelector("h1").innerHTML = count;
}
function resetcount() {
  count = 0;
}
