// localStorage.js

// Function to get accounts from local storage
function getAccountsFromLocalStorage() {
  const accountsJSON = localStorage.getItem('accounts');
  return accountsJSON ? JSON.parse(accountsJSON) : [];
}

// Function to save a new account
function savePassword(username, password) {
  const accounts = getAccountsFromLocalStorage();
  accounts.push({ username, password });
  localStorage.setItem('accounts', JSON.stringify(accounts));
}

// Function to check username and password
function checkPassword(username, password) {
  const accounts = getAccountsFromLocalStorage();
  const account = accounts.find((acc) => acc.username === username && acc.password === password);
  return account !== undefined;
}

function getCurrentLoggedInUser() {
  const currentUserJSON = localStorage.getItem('currentLoggedInUser');
  return currentUserJSON ? JSON.parse(currentUserJSON) : null;
}

function saveCurrentLoggedInUser(username) {
  localStorage.setItem('currentLoggedInUser', JSON.stringify(username));
}

// Function to save the user's quote type preference
function saveQuoteTypePreference(username, quoteType) {
  const userPreferences = getUserPreferences();
  userPreferences[username] = quoteType;
  localStorage.setItem('userPreferences', JSON.stringify(userPreferences));
}

// Function to get the user's quote type preference
function getQuoteTypePreference(username) {
  const userPreferences = getUserPreferences();
  return userPreferences[username] || 'motivational'; // Default to 'motivational' if not set
}

// Function to get user preferences
function getUserPreferences() {
  const preferencesJSON = localStorage.getItem('userPreferences');
  return preferencesJSON ? JSON.parse(preferencesJSON) : {};
}

// Function to get quotes by type
function getQuotesByType(quoteType) {
  // Implement this function to fetch quotes based on the given quoteType
  // You can use an API, database, or any other source to get the quotes
  // Return an array of quotes

  // Example: Returning mock quotes for demonstration
  if (quoteType === 'motivational') {
    return [
      { text: "Success is not final, failure is not fatal: It is the courage to continue that counts." },
      { text: "Believe you can and you're halfway there." },
      { text: "The only way to do great work is to love what you do." }
      // Add more quotes here
    ];
  } else if (quoteType === 'inspirational') {
    return [
      { text: "In the middle of every difficulty lies opportunity." },
      { text: "The best way to predict the future is to create it." },
      { text: "The only thing standing between you and your dream is the will to try and the belief that it is actually possible." }
      // Add more quotes here
    ];
  } else {
    // Handle other quote types or provide default quotes
    return [];
  }
}

// Function to display quotes based on user's preference
function displayQuotes() {
  const username = getCurrentLoggedInUser();
  const quoteType = getQuoteTypePreference(username);
  const quotes = getQuotesByType(quoteType);
  // Display quotes on the home page
  // Implement your logic to display the quotes
}

// Call the displayQuotes function when the home page loads
displayQuotes();
