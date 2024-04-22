// Mock google.accounts.id object
const google = {
  accounts: {
    id: {
      initialize: function(options) {
        const { client_id, callback } = options;
        
        // Store the client_id and callback function
        this.client_id = client_id;
        this.callback = callback;
      },
      
      renderButton: function(element, options) {
        const button = document.createElement('button');
        button.textContent = 'Sign In with Google';
        
        button.addEventListener('click', () => {
          // Prompt for Google Profile ID, email, and name
          const googleProfileId = prompt('Google Profile ID (can be anything):');
          const email = prompt('Email (if no user in the database matches this email you will create a new user):');
          const name = prompt('Name (can be anything):');
          
          // Create an access token by encoding the profile data
          const accessToken = btoa(`${googleProfileId},${email},${name}`);
          
          // Call the stored callback function with the access token
          this.callback(accessToken);
        });
        
        element.appendChild(button);
      },
      
      prompt: function() {
        // Do nothing
      }
    }
  }
};
