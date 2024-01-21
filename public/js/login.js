async function login() {
    // Get values from the form
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
  
    // Perform basic client-side validation
    if (!username || !password) {
      alert('Please enter both username and password.');
      return;
    }
  
    // Set up the URL for the authentication endpoint (replace with your actual endpoint)
    const authEndpoint = 'https://jsonplaceholder.typicode.com/users';
  
    try {
      // Make a fetch request to the server for authentication
      const response = await fetch(authEndpoint);
      const users = await response.json();
  
      //Finds the user based on the entered username and password
      const authenticatedUser = users.find(user => user.username === username && user.email === password);
  
      if (authenticatedUser) {
        alert('Login successful!');
        //Redirects user to their homepage
        window.location.href =     
      } else {
        alert('Invalid username or password. Please try again.');
      }
  
    } catch (error) {
      console.error('Error during login:', error);
      alert('An error occurred during login. Please try again.');
    }
  }