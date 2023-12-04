const teamDetails = JSON.parse(localStorage.getItem('teamdetails')) || [];

const teamheader = document.getElementById('teams');
const teamshot = document.getElementById('team-form');


for (let i = 0; i < teamDetails.length; i++) {
    const teamselect = document.createElement("option");
    teamselect.textContent = teamDetails[i].Name;
    teamheader.appendChild(teamselect);
}

const teamNamesSelect = document.getElementById('teamNames');
const correspondingFormInput = document.getElementById('correspondingForm');



// Adding event listener to team names select box
teamheader.addEventListener('change', function() {
    // Get the selected team name
    const selectedTeamName = teamheader.value;

    // Find the corresponding team data by the selected team name
    const correspondingTeam = teamDetails.find(team => team.Name === selectedTeamName);

    // Update the corresponding form data input box
    if (correspondingTeam) {
        correspondingFormInput.value = correspondingTeam.form.toLowerCase();
    } else {
        correspondingFormInput.value = ''; // Clear the input if no corresponding team is found
    }
});



const form = document.getElementById('form-body');

form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Get the latest ID from local storage or set it to 1
    let playerlatestID = parseInt(localStorage.getItem('playerlatestID')) || 110;

    // Get form data
    const formData = new FormData(form);
    const players = {};

    // Convert form data to JSON object
    formData.forEach((value, key) => {
        players[key] = value;
    });

    // Assign a new incremented ID and add it to players
    players.id = playerlatestID++;

    // Save the updated latestID to local storage
    localStorage.setItem('playerlatestID', playerlatestID);

    // Save the team details with the incremented ID to local storage
    localStorage.setItem(`player_${players.id}`, JSON.stringify(players));

    alert('Team details added successfully');
    form.reset(); // Reset the form after submission
});

document.getElementById('new-team').addEventListener('click', function() {
    window.location.href = 'addteam.html';
  });

  document.getElementById('new-player').addEventListener('click', function() {
    window.location.href = 'addplayer.html';
  });



  
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
