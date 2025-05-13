    document.addEventListener("DOMContentLoaded", function () {
    let userName = localStorage.getItem("name");
    let userTheme = localStorage.getItem("theme");
  
    if (!userName || !userTheme) {
      userName = prompt("What's your name?");
      userTheme = prompt("Do you prefer dark or light theme?").toLowerCase();
  
      localStorage.setItem("name", userName);
      localStorage.setItem("theme", userTheme);
    } else {
      // Show popup greeting only if it's not a first-time visit
      alert(`Welcome back, ${userName}!`);
    }
  
    // Theme Application
    if (userTheme === "dark") {
      document.body.style.backgroundColor = "#121212";
    } else {
      document.body.style.backgroundColor = "#ffffff";
      document.body.style.color = "#121212";
    }
  });
  