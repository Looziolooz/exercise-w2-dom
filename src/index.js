document.addEventListener('DOMContentLoaded', function() {
  // Target the theme options
  const darkTheme = document.getElementById('dark');
  const lightTheme = document.getElementById('light');
  const crazyTheme = document.getElementById('crazy');
  const box = document.querySelector('.box');

  // Add event listeners to the theme options
  darkTheme.addEventListener('change', function() {
      if (darkTheme.checked) {
          changeTheme('dark');
      }
  });

  lightTheme.addEventListener('change', function() {
      if (lightTheme.checked) {
          changeTheme('light');
      }
  });

  crazyTheme.addEventListener('change', function() {
      if (crazyTheme.checked) {
          changeTheme('crazy');
      }
  });

function changeTheme(theme) {
  box.style.transition = 'background-color 0.5s ease-in-out';
  box.classList.add('color-transition');
  setTimeout(function() {
      box.style.backgroundColor = getThemeColor(theme);
      setTimeout(function() {
          box.classList.remove('color-transition');
      }, 500); // Adjust the delay to match the transition duration
  }, 10); // Tiny pause before applying the transition
}

  // Function to get the color based on the selected theme
  function getThemeColor(theme) {
      switch (theme) {
          case 'dark':
              return 'darkcyan';
          case 'light':
              return 'lightcoral';
          case 'crazy':
              return 'yellow'; 
          default:
              return 'lightgreen'; 
      }
  }
});




