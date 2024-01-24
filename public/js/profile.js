//Defines the function that allows new users to register
function register() {
    // Get values from the registration form
    const newUsername = document.getElementById('newUsername').value;
    const newPassword = document.getElementById('newPassword').value;
  
    //Performs basic client-side validation
    if (!newUsername || !newPassword) {
      alert('Please enter both a username and a password.');
      return;
    }
  
    //Validates password strength
    if (newPassword.length < 8) {
      alert('Password should be at least 8 characters long.');
      return;
    }
  
    //Checks if the username is unique (this will check the server for duplicate usernames)
    const existingUsernames = ['existingUser1', 'existingUser2']; // Needs to be fetched from server
    if (existingUsernames.includes(newUsername)) {
      alert('Username already exists. Please choose a different one.');
      return;
    }

    //Checks if the password contains at least one special character and one numeral
    if (!/(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-])(?=.*[0-9])/.test(newPassword)) {
    alert('Password must include at least one special character and one numeral.');
    return;
    }
  
    // Create a server-side request that registers the user
    // For simplicity, we'll just display an alert
    alert('User registered successfully!');
  
    //Redirects user to their profile page
    window.location.href = '/profile'
}