const form = document.getElementById("task-form");

form.addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Task added!");
});
