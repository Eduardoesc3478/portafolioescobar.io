const darkModeBtn = document.getElementById('toggleDarkMode');
    darkModeBtn.onclick = function() {
      document.body.classList.toggle('dark-mode');
      darkModeBtn.textContent = document.body.classList.contains('dark-mode') ? '☀️' : '🌙';
    };