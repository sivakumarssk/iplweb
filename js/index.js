   // Initialize Slick carousel .nav-list
   $(document).ready(function(){
    $('.carousel').slick({
        dots: true, // Show navigation dots
        autoplay: true, // Auto-play the carousel
        autoplaySpeed: 2000 // Set the speed of auto-play in milliseconds
    });
});
const latestId = parseInt(localStorage.getItem('latestID'));

const dataFromLocalStorage = {};

for (let i = 11; i < latestId; i++) {
  const key = `team_${i}`;
  dataFromLocalStorage[key] = localStorage.getItem(key);
}
  
 var teamdetails =[
    {
        "id":1,
        "form":"CSk",
      "Name":"Chennai Super Kings", 
      "Icon": "images/team logo/csk.png",
      "Captain":"MS Dhoni",
      "Player-Count":11,
      "Top-Batsman":"Devon Conway",
      "Top-Bowler":"Ravindra Jadeja",
      "Championship-Won-Count":5
    },
    {
        "id":2,
        "form":"DC",
      "Name":"Delhi Capitals", 
      "Icon": "images/team logo/delhi capitals.png", 
      "Captain":"David Warner",
      "Player-Count":11,
      "Top-Batsman":"David Warner",
      "Top-Bowler":"Pravin Dubey",
      "Championship-Won-Count":0
    },
    {
        "id":3,
        "form":"GT",
      "Name":"Gujarat Titans", 
      "Icon": "images/team logo/gujarat titans.png", 
      "Captain":"Shubman Gill",
      "Player-Count":11,
      "Top-Batsman":"David Miller",
      "Top-Bowler":"Mohammad Shami",
      "Championship-Won-Count":1
    },
    {
        "id":4,
        "form":"KKR",
      "Name":"Kolkata Knight Riders", 
      "Icon": "images/team logo/kkr.png", 
      "Captain":"Nitish Rana",
      "Player-Count":11,
      "Top-Batsman":"Shreyas Iyer",
      "Top-Bowler":"Sunil Narine",
      "Championship-Won-Count":2
    },
    {
        "id":5,
        "form":"LSG",
      "Name":"Lucknow Super Giants", 
      "Icon": "images/team logo/lucknow.png", 
      "Captain":"Krunal Pandya",
      "Player-Count":11,
      "Top-Batsman":"KL Rahul",
      "Top-Bowler":"Mark Wood",
      "Championship-Won-Count":0
    },
    {
        "id":6,
        "form":"MI",
      "Name":"	Mumbai Indians", 
      "Icon": "images/team logo/mi.png", 
      "Captain":"Rohit Sharma",
      "Player-Count":11,
      "Top-Batsman":"Rohit Sharma",
      "Top-Bowler":"Jasprit Bumrah",
      "Championship-Won-Count":5
    },

    {
        "id":7,
        "form":"PBKS",
      "Name":"Punjab Kings", 
      "Icon": "images/team logo/punjab.png", 
      "Captain":"Shikhar Dhawan",
      "Player-Count":11,
      "Top-Batsman":"Shikhar Dhawan",
      "Top-Bowler":"Arshdeep Singh",
      "Championship-Won-Count":0
    },
    {
        "id":8,
        "form":"RCB",
      "Name":"Royal Challengers Bangalore", 
      "Icon": "images/team logo/rcb.png", 
      "Captain":"Faf du Plessis",
      "Player-Count":11,
      "Top-Batsman":"Virat Kohli",
      "Top-Bowler":"Mohammed Siraj",
      "Championship-Won-Count":0
    },
    {
        "id":9,
        "form":"RR",
      "Name":"Rajasthan Royals", 
      "Icon": "images/team logo/rr.png", 
      "Captain":"Sanju Samson",
      "Player-Count":11,
      "Top-Batsman":"Sanju Samson",
      "Top-Bowler":"Yuzvendra Chahal",
      "Championship-Won-Count":1
    },
    {
        "id":10,
        "form":"SRH",
      "Name":"Sunrisers Hyderabad", 
      "Icon": "images/team logo/sunrise.png", 
      "Captain":"Aiden Markram",
      "Player-Count":11,
      "Top-Batsman":"Aiden Markram",
      "Top-Bowler":"Bhuvneshwar Kumar",
      "Championship-Won-Count":1
    }
]

for (const key in dataFromLocalStorage) {
    if (dataFromLocalStorage.hasOwnProperty(key)) {
        const teamData = JSON.parse(dataFromLocalStorage[key]);
        teamdetails.push(teamData);
    }
}

// card code start
function createCards(team) {
    const teamCon = document.getElementById("teams-con");
    team.forEach(teamdetails => {
        const cardLink = document.createElement("a");
        cardLink.href = "./team.html?product_id=" + teamdetails.id;

        const teamDiv = document.createElement("div");
        teamDiv.classList.add("ipl-teams");

        const borderDiv = document.createElement("div");
        borderDiv.classList.add("border-div");
        borderDiv.setAttribute("id", "team-"+teamdetails.id);

        const logoDiv = document.createElement("div");
        logoDiv.classList.add("logo-div");

        const teamImage = document.createElement("img");
        teamImage.src = teamdetails.Icon;
        teamImage.classList.add("con-img");

        const teamName = document.createElement("h2");
        teamName.classList.add("team-name");
        teamName.textContent = teamdetails.Name;

        logoDiv.appendChild(teamImage);
        borderDiv.appendChild(logoDiv);
        teamDiv.appendChild(borderDiv);
        teamDiv.appendChild(teamName);
        cardLink.appendChild(teamDiv);
        teamCon.appendChild(cardLink);
        
    });
}

createCards(teamdetails);


// card code end

// add new team on click
document.getElementById('new-team').addEventListener('click', function() {
    window.location.href = 'addteam.html';
  });
  // new-player
  // add new team on click
document.getElementById('new-player').addEventListener('click', function() {
  window.location.href = 'addplayer.html';
});
  
  // Generate CSS for team IDs with random background colors
let dynamicCSS = '';

for (let i = 10; i < teamdetails.length; i++) {
    const teamId = teamdetails[i].id;
    const randomColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
    
    dynamicCSS += `#team-${teamId} {
        height: 50%;
        background-color: ${randomColor};
        border-bottom-left-radius: 50%;
        border-bottom-right-radius: 50%;
    }\n`;
}

// Create a <style> element
const styleElement = document.createElement('style');

// Set the innerHTML of the <style> element with the generated CSS
styleElement.innerHTML = dynamicCSS;

// Append the <style> element to the <head> of your HTML document
document.head.appendChild(styleElement);

localStorage.setItem('teamdetails', JSON.stringify(teamdetails));



const searchBox = document.getElementById('search-box');

// Add event listener to the input element
searchBox.addEventListener('keyup', function(event) {
    if (event.keyCode === 13) { // Check if Enter key is pressed
        const searchText = this.value.toLowerCase().trim();
       
        const itemsToSearch = []; 
        
        for (let i = 0; i < teamdetails.length; i++) {
            itemsToSearch.push(teamdetails[i].form.toLowerCase());
        }
        
        for (let i = 0; i < itemsToSearch.length; i++) {
            if (searchText === itemsToSearch[i]) {
                window.location.href = `team.html?id=${teamdetails[i].id}`;
                break; // Exit loop after redirecting
            }
        }
    }
});
