// Define the writeCards function
function writeCards(names, event) {
    const messages = [];
    for (let i = 0; i < names.length; i++) {
      messages.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
    }
    return messages;
  }
  
  // Define the countDown function
  function countDown(number) {
    while (number >= 0) {
      console.log(number);
      number--;
    }
  }
  
  // Export the functions for testing
  module.exports = {
    writeCards,
    countDown
  };
  
