const form = document.getElementById('form-body');

form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Get the latest ID from local storage or set it to 1
    let latestID = parseInt(localStorage.getItem('latestID')) || 11;

    // Get form data
    const formData = new FormData(form);
    const teamDetails = {};

    // Convert form data to JSON object
    formData.forEach((value, key) => {
        teamDetails[key] = value;
    });

    // Assign a new incremented ID and add it to teamDetails
    teamDetails.id = latestID++;

    // Save the updated latestID to local storage
    localStorage.setItem('latestID', latestID);

    // Save the team details with the incremented ID to local storage
    localStorage.setItem(`team_${teamDetails.id}`, JSON.stringify(teamDetails));

    alert('Team details added successfully');
    form.reset(); // Reset the form after submission
});

document.getElementById('new-team').addEventListener('click', function() {
    window.location.href = 'addteam.html';
  });

  document.getElementById('new-player').addEventListener('click', function() {
    window.location.href = 'addplayer.html';
  });


  const teamDetails = JSON.parse(localStorage.getItem('teamdetails')) || [];

  const searchBox = document.getElementById('search-box');

  // Add event listener to the input element
  searchBox.addEventListener('keyup', function(event) {
      if (event.keyCode === 13) { // Check if Enter key is pressed
          const searchText = this.value.toLowerCase().trim();
         
          const itemsToSearch = []; 
          
          for (let i = 0; i < teamDetails.length; i++) {
              itemsToSearch.push(teamDetails[i].form.toLowerCase());
          }
          
          for (let i = 0; i < itemsToSearch.length; i++) {
              if (searchText === itemsToSearch[i]) {
                  window.location.href = `team.html?id=${teamDetails[i].id}`;
                  break; // Exit loop after redirecting
              }
          }
      }
  });
  