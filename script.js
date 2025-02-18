

// Poll results variables
let votes = {
  option1: 0,
  option2: 0,
  option3: 0
};

// Function to update real-time results
function updateResults() {
  document.getElementById('option1-votes').textContent = votes.option1;
  document.getElementById('option2-votes').textContent = votes.option2;
  document.getElementById('option3-votes').textContent = votes.option3;
}

// Handle form submission
document.getElementById('poll-form').addEventListener('submit', function (event) {
  event.preventDefault();

  // Get selected option
  const selectedOption = document.querySelector('input[name="vote"]:checked');
  if (selectedOption) {
      const voteValue = selectedOption.value;

      // Increment the vote for the selected option
      if (voteValue === 'option1') {
          votes.option1++;
      } else if (voteValue === 'option2') {
          votes.option2++;
      } else if (voteValue === 'option3') {
          votes.option3++;
      }

      // Update the results
      updateResults();
  }
});
