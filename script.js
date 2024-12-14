// Variables to track votes
let votes = {
    option1: 0,
    option2: 0,
    option3: 0,
    option4: 0
  };
  
  // Track the selected option
  let selectedOption = null;
  
  // Function to handle voting
  function vote(option) {
    selectedOption = option;
  
    // Reset background color for all buttons
    const buttons = document.querySelectorAll('.poll-option');
    buttons.forEach(button => button.style.backgroundColor = '#4CAF50');
  
    // Highlight the selected button
    document.getElementById(option).style.backgroundColor = '#45a049';
  }
  
  // Function to submit the vote
  function submitVote() {
    if (selectedOption) {
      // Increment the vote count for the selected option
      votes[selectedOption]++;
  
      // Update the vote counts in the UI
      document.getElementById('count1').textContent = votes.option1;
      document.getElementById('count2').textContent = votes.option2;
      document.getElementById('count3').textContent = votes.option3;
      document.getElementById('count4').textContent = votes.option4;
  
      // Clear the selected option after submission
      selectedOption = null;
      alert('Your vote has been submitted!');
    } else {
      alert('Please select an option before submitting.');
    }
  }
  