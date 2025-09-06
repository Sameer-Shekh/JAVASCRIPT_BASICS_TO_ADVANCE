function setupButton() {
  let message = "Clicked!";
  document.getElementById('btn').onclick = function() {
    alert(message);
  };
}