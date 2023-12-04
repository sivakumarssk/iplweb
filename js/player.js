const playerdetails = JSON.parse(localStorage.getItem('playerdetails')) || [];

const urlId = window.location.search.split("=")[1];

const playerpage=document.getElementById('playerpage');

const playeroverview=document.getElementById('playeroverview');

for (let i = 0; i < playerdetails.length; i++) {
    if (playerdetails[i].id == urlId) {
        const carddiv = document.createElement("div");
        carddiv.classList.add("card-con");

        const photoDiv = document.createElement("div");
        photoDiv.classList.add("photo-div");

        const playerImage = document.createElement("img");
        playerImage.src = playerdetails[i].photo;
        playerImage.classList.add("player-Image");
        photoDiv.appendChild(playerImage);

        const playernamediv = document.createElement("div");
        playernamediv.classList.add("playernamediv");

        const playername = document.createElement("h2");
        playername.classList.add("player-name");
        playername.textContent = playerdetails[i].playerName;
        playernamediv.appendChild(playername);

        const playerteam = document.createElement("p");
        playerteam.classList.add("playerteam");
        playerteam.textContent =  playerdetails[i].from.toUpperCase();
        playernamediv.appendChild(playerteam);


        photoDiv.appendChild(playernamediv);
        carddiv.appendChild(photoDiv);
        playerpage.appendChild(carddiv);

        const tableDiv = document.createElement("div");
        tableDiv.classList.add("table-con");

        const table = document.createElement("table");
        table.classList.add("table");

        const tr4 = document.createElement("tr");
        tr4.innerHTML = `<th>playerName</th><td>${playerdetails[i]['playerName']}</td>`;
        table.appendChild(tr4);

        const tr1 = document.createElement("tr");
        tr1.innerHTML = `<th>team</th><td>${playerdetails[i].team}</td>`;
        table.appendChild(tr1);

        const tr2 = document.createElement("tr");
        tr2.innerHTML = `<th>Specialization</th><td>${playerdetails[i]['description']}</td>`;
        table.appendChild(tr2);

        const tr3 = document.createElement("tr");
        tr3.innerHTML = `<th>price</th><td>${playerdetails[i]['price']}</td>`;
        table.appendChild(tr3);

        tableDiv.appendChild(table);
        playeroverview.appendChild(tableDiv);

    }
}

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
  
