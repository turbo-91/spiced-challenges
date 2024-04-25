console.clear();

// EVERYTHING FROM HERE....

function handleUserLogin(onSuccess) {
  onSuccess("Jane Doe");
}

function showWelcomeMessage(userName) {
  console.log(`Welcome ${userName}! You are logged in now.`);
}
handleUserLogin(showWelcomeMessage);

// ... UNTIL HERE!!!!!!!

// DOES THE SAME AS THIS:

handleUserLogin((userName) => showWelcomeMessage(userName));
