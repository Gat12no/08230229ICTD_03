// 1️⃣ Theme Toggle
const themeBtn = document.getElementById("theme-btn");
themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  themeBtn.textContent = document.body.classList.contains("dark-mode")
    ? "Change Theme ☀️"
    : "Change Theme 🌙";
});

// 2️⃣ Add Project
const addProjectBtn = document.getElementById("add-project-btn");
const projectList = document.getElementById("project-list");

addProjectBtn.addEventListener("click", () => {
  const projectName = prompt("Enter new project name:");
  if (projectName) {
    const li = document.createElement("li");
    li.textContent = projectName;
    projectList.appendChild(li);
  }
});

// 3️⃣ Contact Form
const form = document.getElementById("contactForm");
const statusText = document.getElementById("form-status");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (name && email && message) {
    statusText.textContent = `Thanks, ${name}! Your message has been sent.`;
    statusText.style.color = "green";
    form.reset();
  } else {
    statusText.textContent = "Please fill all fields.";
    statusText.style.color = "red";
  }
});
