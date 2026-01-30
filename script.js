const form = document.getElementById("task-form");

form.addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Task added!");
});
document.getElementById("dark-toggle")
  .addEventListener("click", () => {
    document.body.classList.toggle("dark");
  });
