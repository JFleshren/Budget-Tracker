//Define the logout function
async function logout() {
  // Set up the URL for the logout endpoint (replace with your actual endpoint)
  
  // const logoutEndpoint = 'https://your-api.com/logout'

  try {
    // Make a fetch request to the server for logout
    const response = await fetch(logoutEndpoint, {
      method: 'POST', // Use the appropriate HTTP method for logout
      credentials: 'include', // Include credentials (cookies) in the request
      headers: {
        'Content-Type': 'application/json',
        // may need to include additional headers based our server requirements
      },
      // You can include a request body if needed
      // body: JSON.stringify({ /* additional data */ }),
    })

    if (response.ok) {
      alert('Logout successful!')

      // Perform any additional logout actions (clear session, redirect, etc.)

      // For demonstration purposes, reload the page after logout
      window.location.reload()
    } else {
      // Handle logout failure
      alert('Logout failed. Please try again.')
    }
  } catch (error) {
    console.error('Error during logout:', error)
    alert('An error occurred during logout. Please try again.')
  }
};
