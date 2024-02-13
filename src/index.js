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

  // Function to change the theme 
  function changeTheme(theme) {
      box.style.backgroundColor = getThemeColor(theme);
      console.log(`Theme changed to ${theme}`);
  }

  // Function to get the color based on the selected theme
  function getThemeColor(theme) {
      switch (theme) {
          case 'dark':
              return 'darkcyran';
          case 'light':
              return 'lightcoral';
          case 'crazy':
              return 'purple'; 
          default:
              return 'lightgreen'; 
      }
  }
});
