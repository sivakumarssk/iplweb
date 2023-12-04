const teamDetails = JSON.parse(localStorage.getItem('teamdetails')) || [];
const searchId = window.location.search.split("=")[1];

const teamtop = document.getElementById('top');
const teamheader = document.getElementById('team-page-header');

for (let i = 0; i < teamDetails.length; i++) {
    const teamtopdiv = document.createElement("div");
    teamtopdiv.classList.add("topdiv");

    const teamtopImages = document.createElement("img");
    teamtopImages.src = teamDetails[i].Icon;
    teamtopImages.classList.add("logotopimg");
    teamtopdiv.appendChild(teamtopImages);
    teamtop.appendChild(teamtopdiv);

    if (teamDetails[i].id == searchId) {
        const teamDiv = document.createElement("div");
        teamDiv.classList.add("con");

        const logoDiv = document.createElement("div");
        logoDiv.classList.add("logo-con");

        const teamImage = document.createElement("img");
        teamImage.src = teamDetails[i].Icon;
        teamImage.classList.add("logo-img");
        logoDiv.appendChild(teamImage);

        const borderDiv = document.createElement("div");
        borderDiv.classList.add("des-con");

        const teamName = document.createElement("h2");
        teamName.classList.add("teamname");
        teamName.textContent = teamDetails[i].Name;
        borderDiv.appendChild(teamName);

        const teamchamp = document.createElement("p");
        teamchamp.classList.add("team-champ");
        teamchamp.textContent = "Championships Won Count: " + teamDetails[i]['Championship-Won-Count'];
        borderDiv.appendChild(teamchamp);

        const teamcap = document.createElement("p");
        teamcap.classList.add("team-cap");
        teamcap.textContent = "Captain: " + teamDetails[i].Captain;
        borderDiv.appendChild(teamcap);

        logoDiv.appendChild(borderDiv);
        teamDiv.appendChild(logoDiv);
        teamheader.appendChild(teamDiv);

        const tableDiv = document.createElement("div");
        tableDiv.classList.add("table-con");

        const table = document.createElement("table");
        table.classList.add("table");

        const tr1 = document.createElement("tr");
        tr1.innerHTML = `<th>Name</th><td>${teamDetails[i].Name}</td>`;
        table.appendChild(tr1);

        const tr2 = document.createElement("tr");
        tr2.innerHTML = `<th>Player-Count</th><td>${teamDetails[i]['Player-Count']}</td>`;
        table.appendChild(tr2);

        const tr3 = document.createElement("tr");
        tr3.innerHTML = `<th>Top-Batsman</th><td>${teamDetails[i]['Top-Batsman']}</td>`;
        table.appendChild(tr3);

        const tr4 = document.createElement("tr");
        tr4.innerHTML = `<th>Top-Bowler</th><td>${teamDetails[i]['Top-Bowler']}</td>`;
        table.appendChild(tr4);

        tableDiv.appendChild(table);
        teamDiv.appendChild(tableDiv);
        teamheader.appendChild(teamDiv);
   


// team code close

const playerlatestID = parseInt(localStorage.getItem('playerlatestID'));

const dataFromLocalStorage = {};

for (let i = 110; i < playerlatestID; i++) {
  const key = `player_${i}`;
  dataFromLocalStorage[key] = localStorage.getItem(key);
}


var players= [
    {
    "id": 0,
    "playerName": "Shivam Dube",
    "photo": "images/csk/Shivam Dube a.png",
    "from": "csk",
    "team":"Chennai Super Kings",
    "price": "6.50 Cr",
    "isPlaying": true,
    "description": "All-rounder"
    },
    {
    "id": 1,
    "playerName": "Ruturaj Gaikwad",
    "photo": "images/csk/Ruturaj Gaikwad b.png",
    "from": "csk",
    "team":"Chennai Super Kings",
    "price": "5 Cr",
    "isPlaying": true,
    "description": "Batter"
    },
    {
    "id": 2,
    "playerName": "Ravindra Jadeja",
    "photo": "images/csk/Ravindra Jadeja a.png",
    "from": "csk",
    "team":"Chennai Super Kings",
    "price": "8.50 Cr",
    "isPlaying": true,
    "description": "All-rounder"
    },   
    {
    "id": 3,
    "playerName": "Rajvardhan Hangargekar",
    "photo": "images/csk/Rajvardhan Hangargekar bo.png",
    "from": "csk",
    "team":"Chennai Super Kings",
    "price": "6 Cr",
    "isPlaying": true,
    "description": "Bowler"
    }, 
    { 
    "id": 4,
    "playerName": "Mukesh Choudhary",
    "photo": "images/csk/Mukesh Choudhary bo.png",
    "from": "csk",
    "team":"Chennai Super Kings",
    "price": "4.50 Cr",
    "isPlaying": true,
    "description": "Bowler"
    }, 
    {
    "id": 5,
    "playerName": "Moeen Ali",
    "photo": "images/csk/Moeen Ali a.png",
    "from": "csk",
    "team":"Chennai Super Kings",
    "price": "8 Cr",
    "isPlaying": true,
    "description": "All-rounder"
    },
    {
    "id": 6,
    "playerName": "Maheesh Theekshana",
    "photo": "images/csk/Maheesh Theekshana bo.png",
    "from": "csk",
    "team":"Chennai Super Kings",
    "price": "4.50 Cr",
    "isPlaying": true,
    "description": "Bowler"
    },
    {
    "id": 7,
    "playerName": "Mahendra Singh Dhoni",
    "photo": "images/csk/M.S.Dhoni b.png",
    "from": "csk",
    "team":"Chennai Super Kings",
    "price": "7.3 Cr",
    "isPlaying": true,
    "description": "Batter"
    },
    {
    "id": 8,
    "playerName": "Devon Conway",
    "photo": "images/csk/Devon Conway b.png",
    "from": "csk",
    "team":"Chennai Super Kings",
    "price": "6 Cr",
    "isPlaying": true,
    "description": "Batter"
    },
    {
    "id": 9,
    "playerName": "Deepak Chahar",
    "photo": "images/csk/Deepak Chahar bo.png",
    "from": "csk",
    "team":"Chennai Super Kings",
    "price": "4 Cr",
    "isPlaying": true,
    "description": "Bowler"
    },
    {
    "id": 10,
    "playerName": "Ajinkya Rahane",
    "photo": "images/csk/Ajinkya Rahane b.png",
    "from": "csk",
    "team":"Chennai Super Kings",
    "price": "6 Cr",
    "isPlaying": true,
    "description": "Batter"
    },
    // dc
    {
    "id": 11,
    "playerName": "Abishek Porel",
    "photo": "images/dc/Abishek Porel  b.png",
    "from": "dc",
    "team":"Delhi Capitals",
    "price": "5 Cr",
    "isPlaying": true,
    "description": "Batter"
    },
    {
    "id": 12,
    "playerName": "Anrich Nortje",
    "photo": "images/dc/Anrich Nortje bo.png",
    "from": "dc",
    "team":"Delhi Capitals",
    "price": "4.50 Cr",
    "isPlaying": true,
    "description": "Bowler"
    },
    {
    "id": 13,
    "playerName": "Axar Patel",
    "photo": "images/dc/Axar Patel a.png",
    "from": "dc",
    "team":"Delhi Capitals",
    "price": "4.50 Cr",
    "isPlaying": true,
    "description": "All-rounder"
    },
    {
    "id": 14,
    "playerName": "David Warner",
    "photo": "images/dc/David Warner b.png",
    "from": "dc",
    "team":"Delhi Capitals",
    "price": "6.30 Cr",
    "isPlaying": true,
    "description": "Batter"
    },
    {
    "id": 15,
    "playerName": "Khaleel Ahmed",
    "photo": "images/dc/Khaleel Ahmed bo.png",
    "from": "dc",
    "team":"Delhi Capitals",
    "price": "3.50 Cr",
    "isPlaying": true,
    "description": "Bowler"
    },
    {
    "id": 16,
    "playerName": "Kuldeep Yadav",
    "photo": "images/dc/Kuldeep Yadav bo.png",
    "from": "dc",
    "team":"Delhi Capitals",
    "price": "5.50 Cr",
    "isPlaying": true,
    "description": "Bowler"
    },
    {
    "id": 17,
    "playerName": "Lalit Yadav",
    "photo": "images/dc/Lalit Yadav a.png",
    "from": "dc",
    "team":"Delhi Capitals",
    "price": "4 Cr",
    "isPlaying": true,
    "description": "All-rounder"
    },
    {
    "id": 18,
    "playerName": "Lungi Ngidi ",
    "photo": "images/dc/Lungi Ngidi bo.png",
    "from": "dc",
    "team":"Delhi Capitals",
    "price": "2.50 Cr",
    "isPlaying": true,
    "description": "Bowler"
    },
    {
    "id": 19,
    "playerName": "Pravin Dubey",
    "photo": "images/dc/Pravin Dubey bo.png",
    "from": "dc",
    "team":"Delhi Capitals",
    "price": "5 Cr",
    "isPlaying": true,
    "description": "Bowler"
    },
    {
    "id": 20,
    "playerName": "Prithvi Shaw",
    "photo": "images/dc/Prithvi Shaw b.png",
    "from": "dc",
    "team":"Delhi Capitals",
    "price": "8 Cr",
    "isPlaying": true,
    "description": "Batter"
    },
    {
    "id": 21,
    "playerName": "Yash Dhull",
    "photo": "images/dc/Yash Dhull b.png",
    "from": "dc",
    "team":"Delhi Capitals",
    "price": "5 Cr",
    "isPlaying": true,
    "description": "Bowler"
    },
    // gt
    {
    "id": 22,
    "playerName": "Jayant Yadav",
    "photo": "images/gt/Jayant Yadav bo.png",
    "from": "gt",
    "team":"Gujarat Titans",
    "price": "7.44 Cr",
    "isPlaying": true,
    "description": "Boler"
    },
    {
    "id": 23,
    "playerName": "Kane Williamson",
    "photo": "images/gt/Kane Williamson b.png",
    "from": "gt",
    "team":"Gujarat Titans",
    "price": "3.7 Cr",
    "isPlaying": true,
    "description": "Batter"
    },
    {
    "id": 24,
    "playerName": "Matthew Wade",
    "photo": "images/gt/Matthew Wade b.png",
    "from": "gt",
    "team":"Gujarat Titans",
    "price": "4.6 Cr",
    "isPlaying": true,
    "description": "Batter"
    },
    {
    "id": 25,
    "playerName": "Mohammad Shami",
    "photo": "images/gt/Mohammad Shami bo.png",
    "from": "gt",
    "team":"Gujarat Titans",
    "price": "2.7 Cr",
    "isPlaying": true,
    "description": "Bowler"
    },
    {
    "id": 26,
    "playerName": "Rahul Tewatia",
    "photo": "images/gt/Rahul Tewatia bo.png",
    "from": "gt",
    "team":"Gujarat Titans",
    "price": "5 Cr",
    "isPlaying": true,
    "description": "Bowler"
    },
    {
    "id": 27,
    "playerName": "Rashid Khan",
    "photo": "images/gt/Rashid Khan bo.png",
    "from": "gt",
    "team":"Gujarat Titans",
    "price": "3.4 Cr",
    "isPlaying": true,
    "description": "Bowler"
    },
    {
    "id": 28,
    "playerName": "Shubman Gill",
    "photo": "images/gt/Shubman Gill b.png",
    "from": "gt",
    "team":"Gujarat Titans",
    "price": "4 Cr",
    "isPlaying": true,
    "description": "Batter"
    },
    {
    "id": 29,
    "playerName": "Vijay Shankar",
    "photo": "images/gt/Vijay Shankar a.png",
    "from": "gt",
    "team":"Gujarat Titans",
    "price": "7.9 Cr",
    "isPlaying": true,
    "description": "All-rounder"
    },
    {
    "id": 30,
    "playerName": "Abhinav Manohar",
    "photo": "images/gt/Abhinav Manohar a.png",
    "from": "gt",
    "team":"Gujarat Titans",
    "price": "6 Cr",
    "isPlaying": true,
    "description": "All-rounder"
    },
    {
    "id": 31,
    "playerName": "Darshan Nalkande",
    "photo": "images/gt/Darshan Nalkande a.png",
    "from": "gt",
    "team":"Gujarat Titans",
    "price": "4.2 Cr",
    "isPlaying": true,
    "description": "All-rounder"
    },
    {
    "id": 32,
    "playerName": "David Miller",
    "photo": "images/gt/David Miller b.png",
    "from": "gt",
    "team":"Gujarat Titans",
    "price": "5.3 Cr",
    "isPlaying": true,
    "description": "Batter"
    },
    // kkr
    {
    "id": 33,
    "playerName": "Andre Russell",
    "photo": "images/kkr/Andre Russell a.png",
    "from": "kkr",
    "team":"Kolkata Knight Riders",
    "price": "3 Cr",
    "isPlaying": true,
    "description": "All-rounder"
    },
    {
    "id": 34,
    "playerName": "Anukul Roy",
    "photo": "images/kkr/Anukul Roy a.png",
    "from": "kkr",
    "team":"Kolkata Knight Riders",
    "price": "9 Cr",
    "isPlaying": true,
    "description": "All-rounder"
    },
    {
    "id": 35,
    "playerName": "Harshit Rana",
    "photo": "images/kkr/Harshit Rana bo.png",
    "from": "kkr",
    "team":"Kolkata Knight Riders",
    "price": "4.2 Cr",
    "isPlaying": true,
    "description": "Bowler"
    },
    {
    "id": 36,
    "playerName": "Nitish Rana",
    "photo": "images/kkr/Nitish Rana b.png",
    "from": "kkr",
    "team":"Kolkata Knight Riders",
    "price": "5.7 Cr",
    "isPlaying": true,
    "description": "Batter"
    },
    {
    "id": 37,
    "playerName": "Rahmanullah Gurbaz",
    "photo": "images/kkr/Rahmanullah Gurbaz b.png",
    "from": "kkr",
    "team":"Kolkata Knight Riders",
    "price": "3.3 Cr",
    "isPlaying": true,
    "description": "Batter"
    },
    {
    "id": 38,
    "playerName": "Rinku Singh",
    "photo": "images/kkr/Rinku Singh b.png",
    "from": "kkr",
    "team":"Kolkata Knight Riders",
    "price": "2.3 Cr",
    "isPlaying": true,
    "description": "Batter"
    },
    {
    "id": 39,
    "playerName": "Shreyas Iyer",
    "photo": "images/kkr/Shreyas Iyer b.png",
    "from": "kkr",
    "team":"Kolkata Knight Riders",
    "price": "6.5 Cr",
    "isPlaying": true,
    "description": "Batter"
    },
    {
    "id": 40,
    "playerName": "Sunil Narine",
    "photo": "images/kkr/Sunil Narine bo.png",
    "from": "kkr",
    "team":"Kolkata Knight Riders",
    "price": "4.6 Cr",
    "isPlaying": true,
    "description": "Bowler"
    },
    {
    "id": 41,
    "playerName": "Suyash Sharma",
    "photo": "images/kkr/Suyash Sharma bo.png",
    "from": "kkr",
    "team":"Kolkata Knight Riders",
    "price": "2.5 Cr",
    "isPlaying": true,
    "description": "Bowler"
    },
    {
    "id": 42,
    "playerName": "Varun Chakaravarthy",
    "photo": "images/kkr/Varun Chakaravarthy bo.png",
    "from": "kkr",
    "team":"Kolkata Knight Riders",
    "price": "8.3 Cr",
    "isPlaying": true,
    "description": "Bowler"
    },
    {
    "id": 43,
    "playerName": "Venkatesh Iyer",
    "photo": "images/kkr/Venkatesh Iyer a.png",
    "from": "kkr",
    "team":"Kolkata Knight Riders",
    "price": "6 Cr",
    "isPlaying": true,
    "description": "All-rounder"
    },
    // lsg
    {
    "id": 44,
    "playerName": "Ayush Badoni",
    "photo": "images/lsg/Ayush Badoni a.png",
    "from": "lsg",
    "team":"Lucknow Super Giants",
    "price": "6 Cr",
    "isPlaying": true,
    "description": "All-rounder"
    },
    {
    "id": 45,
    "playerName": "Deepak Hooda",
    "photo": "images/lsg/Deepak Hooda a.png",
    "from": "lsg",
    "team":"Lucknow Super Giants",
    "price": "3.2 Cr",
    "isPlaying": true,
    "description": "All-rounder"
    },
    {
    "id": 46,
    "playerName": "KL Rahul",
    "photo": "images/lsg/KL Rahul b.png",
    "from": "lsg",
    "team":"Lucknow Super Giants",
    "price": "8 Cr",
    "isPlaying": true,
    "description": "Bowler"
    },
    {
    "id": 47,
    "playerName": "Krishnappa Gowtham",
    "photo": "images/lsg/Krishnappa Gowtham a.png",
    "from": "lsg",
    "team":"Lucknow Super Giants",
    "price": "5 Cr",
    "isPlaying": true,
    "description": "All-rounder"
    },
    {
    "id": 48,
    "playerName": "Krunal Pandya",
    "photo": "images/lsg/Krunal Pandya a.png",
    "from": "lsg",
    "team":"Lucknow Super Giants",
    "price": "6 Cr",
    "isPlaying": true,
    "description": "All-rounder"
    },
    {
    "id": 49,
    "playerName": "Kyle Mayers",
    "photo": "images/lsg/Kyle Mayers a.png",
    "from": "lsg",
    "team":"Lucknow Super Giants",
    "price": "2.7 Cr",
    "isPlaying": true,
    "description": "All-rounder"
    },
    {
    "id": 50,
    "playerName": "Mark Wood",
    "photo": "images/lsg/Mark Wood bo.png",
    "from": "lsg",
    "team":"Lucknow Super Giants",
    "price": "9 Cr",
    "isPlaying": true,
    "description": "Bowler"
    },
    {
    "id": 51,
    "playerName": "Mayank Yadav",
    "photo": "images/lsg/Mayank Yadav bo.png",
    "from": "lsg",
    "team":"Lucknow Super Giants",
    "price": "4.3 Cr",
    "isPlaying": true,
    "description": "Bowler"
    },
    {
    "id": 52,
    "playerName": "Mohsin Khan",
    "photo": "images/lsg/Mohsin Khan bo.png",
    "from": "lsg",
    "team":"Lucknow Super Giants",
    "price": "6.5 Cr",
    "isPlaying": true,
    "description": "Bowler"
    },
    {
    "id": 53,
    "playerName": "Nicholas Pooran",
    "photo": "images/lsg/Nicholas Pooran b.png",
    "from": "lsg",
    "team":"Lucknow Super Giants",
    "price": "2.1 Cr",
    "isPlaying": true,
    "description": "Batter"
    },
    {
    "id": 54,
    "playerName": "Quinton de Kock",
    "photo": "images/lsg/Quinton de Kock b.png",
    "from": "lsg",
    "team":"Lucknow Super Giants",
    "price": "7.1 Cr",
    "isPlaying": true,
    "description": "Batter"
    },
    // mi
    {
    "id": 55,
    "playerName": "Akash Madhwal",
    "photo": "images/mi/Akash Madhwal bo.webp",
    "from": "mi",
    "team":"Mumbai Indians",
    "price": "7.1 Cr",
    "isPlaying": true,
    "description": "Bowler"
    },
    {
    "id": 56,
    "playerName": "Arjun Tendulkar",
    "photo": "images/mi/Arjun Tendulkar a.png",
    "from": "mi",
    "team":"Mumbai Indians",
    "price": "3 Cr",
    "isPlaying": true,
    "description": "All-rounder"
    },
    {
    "id": 57,
    "playerName": "Dewald Brevis",
    "photo": "images/mi/Dewald Brevis b.png",
    "from": "mi",
    "team":"Mumbai Indians",
    "price": "4.5 Cr",
    "isPlaying": true,
    "description": "Batter"
    },
    {
    "id": 58,
    "playerName": "Ishan Kishan",
    "photo": "images/mi/Ishan Kishan b.png",
    "from": "mi",
    "team":"Mumbai Indians",
    "price": "4 Cr",
    "isPlaying": true,
    "description": "Batter"
    },
    {
    "id": 59,
    "playerName": "Kumar Kartikeya Singh",
    "photo": "images/mi/Kumar Kartikeya Singh bo.png",
    "from": "mi",
    "team":"Mumbai Indians",
    "price": "6 Cr",
    "isPlaying": true,
    "description": "Bowler"
    },
    {
    "id": 60,
    "playerName": "Nehal Wadhera",
    "photo": "images/mi/Nehal Wadhera a.png",
    "from": "mi",
    "team":"Mumbai Indians",
    "price": "3.1 Cr",
    "isPlaying": true,
    "description": "All-rounder"
    },
    {
    "id": 61,
    "playerName": "Piyush Chawla",
    "photo": "images/mi/Piyush Chawla bo.png",
    "from": "mi",
    "team":"Mumbai Indians",
    "price": "4.1 Cr",
    "isPlaying": true,
    "description": "Bowler"
    },
    {
    "id": 62,
    "playerName": "Rohit Sharma",
    "photo": "images/mi/Rohit Sharma b.png",
    "from": "mi",
    "team":"Mumbai Indians",
    "price": "7.1 Cr",
    "isPlaying": true,
    "description": "Batter"
    },
    {
    "id": 63,
    "playerName": "Shams Mulani",
    "photo": "images/mi/Shams Mulani a.png",
    "from": "mi",
    "team":"Mumbai Indians",
    "price": "5.1 Cr",
    "isPlaying": true,
    "description": "All-rounder"
    },
    {
    "id": 64,
    "playerName": "Suryakumar Yadavk",
    "photo": "images/mi/Suryakumar Yadav b.png",
    "from": "mi",
    "team":"Mumbai Indians",
    "price": "7 Cr",
    "isPlaying": true,
    "description": "batter"
    },
    {
    "id": 65,
    "playerName": "Tim David",
    "photo": "images/mi/Tim David b.png",
    "from": "mi",
    "team":"Mumbai Indians",
    "price": "5 Cr",
    "isPlaying": true,
    "description": "Batter"
    },
    // pbks
    {
    "id": 66,
    "playerName": "Arshdeep Singh",
    "photo": "images/pbks/Arshdeep Singh bo.png",
    "from": "pbks",
    "team":"Punjab Kings",
    "price": "5 Cr",
    "isPlaying": true,
    "description": "Bowler"
    },
    {
    "id": 67,
    "playerName": "Atharva Taide",
    "photo": "images/pbks/Atharva Taide a.png",
    "from": "pbks",
    "team":"Punjab Kings",
    "price": "3 Cr",
    "isPlaying": true,
    "description": "All-rounder"
    },
    {
    "id": 68,
    "playerName": "Harpreet Brar",
    "photo": "images/pbks/Harpreet Brar bo.png",
    "from": "pbks",
    "team":"Punjab Kings",
    "price": "7 Cr",
    "isPlaying": true,
    "description": "Bowler"
    },
    {
    "id": 69,
    "playerName": "Jitesh Sharma",
    "photo": "images/pbks/Jitesh Sharma b.png",
    "from": "pbks",
    "team":"Punjab Kings",
    "price": "5.4 Cr",
    "isPlaying": true,
    "description": "Batter"
    },
    {
    "id": 70,
    "playerName": "Jonny Bairstow",
    "photo": "images/pbks/Jonny Bairstow b.png",
    "from": "pbks",
    "team":"Punjab Kings",
    "price": "7 Cr",
    "isPlaying": true,
    "description": "Batter"
    },
    {
    "id": 71,
    "playerName": "Kagiso Rabada",
    "photo": "images/pbks/Kagiso Rabada bo.png",
    "from": "pbks",
    "team":"Punjab Kings",
    "price": "5 Cr",
    "isPlaying": true,
    "description": "Bowler"
    },
    {
    "id": 72,
    "playerName": "Prabhsimran Singh",
    "photo": "images/pbks/Prabhsimran Singh b.png",
    "from": "pbks",
    "team":"Punjab Kings",
    "price": "5 Cr",
    "isPlaying": true,
    "description": "Batter"
    },
    {
    "id": 73,
    "playerName": "Rahul Chahar",
    "photo": "images/pbks/Rahul Chahar bo.png",
    "from": "pbks",
    "team":"Punjab Kings",
    "price": "7.1 Cr",
    "isPlaying": true,
    "description": "Bowler"
    },
    {
    "id": 74,
    "playerName": "Rishi Dhawan",
    "photo": "images/pbks/Rishi Dhawan a.png",
    "from": "pbks",
    "team":"Punjab Kings",
    "price": "3.2 Cr",
    "isPlaying": true,
    "description": "All-rounder"
    },
    {
    "id": 75,
    "playerName": "Sam Curran",
    "photo": "images/pbks/Sam Curran a.png",
    "from": "pbks",
    "team":"Punjab Kings",
    "price": "4 Cr",
    "isPlaying": true,
    "description": "All-rounder"
    },
    {
    "id": 76,
    "playerName": "Shikhar Dhawan",
    "photo": "images/pbks/Shikhar Dhawan b.png",
    "from": "pbks",
    "team":"Punjab Kings",
    "price": "8.2 Cr",
    "isPlaying": true,
    "description": "Batter"
    },
    // rcb
    {
    "id": 77,
    "playerName": "Akash Deep",
    "photo": "images/rcb/Akash Deep bo.png",
    "from": "rcb",
    "team":"Royal Challengers Bangalore",
    "price": "7.2 Cr",
    "isPlaying": true,
    "description": "Bowler"
    },
    {
    "id": 78,
    "playerName": "Anuj Rawat",
    "photo": "images/rcb/Anuj Rawat b.png",
    "from": "rcb",
    "team":"Royal Challengers Bangalore",
    "price": "5 Cr",
    "isPlaying": true,
    "description": "Batter"
    },
    {
    "id": 79,
    "playerName": "Dinesh Karthik",
    "photo": "images/rcb/Dinesh Karthik b.png",
    "from": "rcb",
    "team":"Royal Challengers Bangalore",
    "price": "4.2 Cr",
    "isPlaying": true,
    "description": "Batter"
    },
    {
    "id": 80,
    "playerName": "Faf du Plessis",
    "photo": "images/rcb/Faf du Plessis b.png",
    "from": "rcb",
    "team":"Royal Challengers Bangalore",
    "price": "7.2 Cr",
    "isPlaying": true,
    "description": "Batter"
    },
    {
    "id": 81,
    "playerName": "Glenn Maxwell",
    "photo": "images/rcb/Glenn Maxwell a.png",
    "from": "rcb",
    "team":"Royal Challengers Bangalore",
    "price": "8 Cr",
    "isPlaying": true,
    "description": "All-rounder"
    },
    {
    "id": 82,
    "playerName": "Himanshu Sharma",
    "photo": "images/rcb/Himanshu Sharma bo.png",
    "from": "rcb",
    "team":"Royal Challengers Bangalore",
    "price": "9.5 Cr",
    "isPlaying": true,
    "description": "Bowler"
    },
    {
    "id": 83,
    "playerName": "Karn Sharma",
    "photo": "images/rcb/Karn Sharma a.png",
    "from": "rcb",
    "team":"Royal Challengers Bangalore",
    "price": "6 Cr",
    "isPlaying": true,
    "description": "All-rounder"
    },
    {
    "id": 84,
    "playerName": "Mahipal Lomror",
    "photo": "images/rcb/Mahipal Lomror a.png",
    "from": "rcb",
    "team":"Royal Challengers Bangalore",
    "price": "5.4 Cr",
    "isPlaying": true,
    "description": "All-rounder"
    },
    {
    "id": 85,
    "playerName": "Mohammed Siraj",
    "photo": "images/rcb/Mohammed Siraj bo.png",
    "from": "rcb",
    "team":"Royal Challengers Bangalore",
    "price": "4.7 Cr",
    "isPlaying": true,
    "description": "Bowler"
    },
    {
    "id": 86,
    "playerName": "Reece Topley",
    "photo": "images/rcb/Reece Topley bo.png",
    "from": "rcb",
    "team":"Royal Challengers Bangalore",
    "price": "5 Cr",
    "isPlaying": true,
    "description": "Bowler"
    },
    {
    "id": 87,
    "playerName": "Virat Kohli",
    "photo": "images/rcb/Virat Kohli b.png",
    "from": "rcb",
    "team":"Royal Challengers Bangalore",
    "price": "4.2 Cr",
    "isPlaying": true,
    "description": "Batter"
    },
    // rr
    {
    "id": 88,
    "playerName": "Kuldeep Sen",
    "photo": "images/rr/Kuldeep Sen bo.png",
    "from": "rr",
    "team":"Rajasthan Royals",
    "price": "4.2 Cr",
    "isPlaying": true,
    "description": "Bowler"
    },
    {
    "id": 89,
    "playerName": "Navdeep Saini",
    "photo": "images/rr/Navdeep Saini bo.png",
    "from": "rr",
    "team":"Rajasthan Royals",
    "price": "7.3 Cr",
    "isPlaying": true,
    "description": "Bowler"
    },
    {
    "id": 90,
    "playerName": "Ravichandran Ashwin",
    "photo": "images/rr/Ravichandran Ashwin a.png",
    "from": "rr",
    "team":"Rajasthan Royals",
    "price": "9 Cr",
    "isPlaying": true,
    "description": "All-rounder"
    },
    {
    "id": 91,
    "playerName": "Riyan Parag ",
    "photo": "images/rr/Riyan Parag b.png",
    "from": "rr",
    "team":"Rajasthan Royals",
    "price": "5.6 Cr",
    "isPlaying": true,
    "description": "Batter"
    },
    {
    "id": 92,
    "playerName": "Sandeep Sharma",
    "photo": "images/rr/Sandeep Sharma bo.png",
    "from": "rr",
    "team":"Rajasthan Royals",
    "price": "6.5 Cr",
    "isPlaying": true,
    "description": "Bowler"
    },
    {
    "id": 93,
    "playerName": "Sanju Samson",
    "photo": "images/rr/Sanju Samson b.png",
    "from": "rr",
    "team":"Rajasthan Royals",
    "price": "9 Cr",
    "isPlaying": true,
    "description": "Batter"
    },
    {
    "id": 94,
    "playerName": "Shimron Hetmyer",
    "photo": "images/rr/Shimron Hetmyer b.png",
    "from": "rr",
    "team":"Rajasthan Royals",
    "price": "5 Cr",
    "isPlaying": true,
    "description": "Batter"
    },
    {
    "id": 95,
    "playerName": "Trent Boult",
    "photo": "images/rr/Trent Boult bo.png",
    "from": "rr",
    "team":"Rajasthan Royals",
    "price": "8 Cr",
    "isPlaying": true,
    "description": "Bowler"
    },
    {
    "id": 96,
    "playerName": "Yashasvi Jaiswal",
    "photo": "images/rr/Yashasvi Jaiswal b.png",
    "from": "rr",
    "team":"Rajasthan Royals",
    "price": "3.6 Cr",
    "isPlaying": true,
    "description": "Batter"
    },
    {
    "id": 97,
    "playerName": "Yuzvendra Chahal",
    "photo": "images/rr/Yuzvendra Chahal bo.png",
    "from": "rr",
    "team":"Rajasthan Royals",
    "price": "4.2 Cr",
    "isPlaying": true,
    "description": "Bowler"
    },
    {
    "id": 98,
    "playerName": "Jos Buttler",
    "photo": "images/rr/Jos Buttler b.png",
    "from": "rr",
    "team":"Rajasthan Royals",
    "price": "6.8 Cr",
    "isPlaying": true,
    "description": "Batter"
    },
    // srh
    {
    "id": 99,
    "playerName": "Abdul Samad",
    "photo": "images/srh/Abdul Samad b.png",
    "from": "srh",
    "team":"Sunrisers Hyderabad",
    "price": "3.6 Cr",
    "isPlaying": true,
    "description": "Batter"
    },
    {
    "id": 100,
    "playerName": "Abhishek Sharma",
    "photo": "images/srh/Abhishek Sharma a.png",
    "from": "srh",
    "team":"Sunrisers Hyderabad",
    "price": "9 Cr",
    "isPlaying": true,
    "description": "All-rounder"
    },
    {
    "id": 101,
    "playerName": "Aiden Markram",
    "photo": "images/srh/Aiden Markram b.png",
    "from": "srh",
    "team":"Sunrisers Hyderabad",
    "price": "5.3 Cr",
    "isPlaying": true,
    "description": "Batter"
    },
    {
    "id": 102,
    "playerName": "Bhuvneshwar Kumar",
    "photo": "images/srh/Bhuvneshwar Kumar bo.png",
    "from": "srh",
    "team":"Sunrisers Hyderabad",
    "price": "7.6 Cr",
    "isPlaying": true,
    "description": "Bowler"
    },
    {
    "id": 103,
    "playerName": "Glenn Phillips",
    "photo": "images/srh/Glenn Phillips b.png",
    "from": "srh",
    "team":"Sunrisers Hyderabad",
    "price": "3 Cr",
    "isPlaying": true,
    "description": "Batter"
    },
    {
    "id": 104,
    "playerName": "Marco Jansen",
    "photo": "images/srh/Marco Jansen a.png",
    "from": "srh",
    "team":"Sunrisers Hyderabad",
    "price": "6.8 Cr",
    "isPlaying": true,
    "description": "All-rounder"
    },
    {
    "id": 105,
    "playerName": "Mayank Agarwal",
    "photo": "images/srh/Mayank Agarwal b.png",
    "from": "srh",
    "team":"Sunrisers Hyderabad",
    "price": "4 Cr",
    "isPlaying": true,
    "description": "Batter"
    },
    {
    "id": 106,
    "playerName": "Mayank Markande",
    "photo": "images/srh/Mayank Markande bo.png",
    "from": "srh",
    "team":"Sunrisers Hyderabad",
    "price": "5 Cr",
    "isPlaying": true,
    "description": "Bowler"
    },
    {
    "id": 107,
    "playerName": "Rahul Tripathi",
    "photo": "images/srh/Rahul Tripathi b.png",
    "from": "srh",
    "team":"Sunrisers Hyderabad",
    "price": "6 Cr",
    "isPlaying": true,
    "description": "Batter"
    },
    {
    "id": 108,
    "playerName": "Umran Malik",
    "photo": "images/srh/Umran Malik bo.png",
    "from": "srh",
    "team":"Sunrisers Hyderabad",
    "price": "7 Cr",
    "isPlaying": true,
    "description": "Bowler"
    },
    {
    "id": 109,
    "playerName": "Washington Sundar",
    "photo": "images/srh/Washington Sundar a.png",
    "from": "srh",
    "team":"Sunrisers Hyderabad",
    "price": "8 Cr",
    "isPlaying": true,
    "description": "All-rounder"
    },
    
]

for (const key in dataFromLocalStorage) {
    if (dataFromLocalStorage.hasOwnProperty(key)) {
        const playerData = JSON.parse(dataFromLocalStorage[key]);
        players.push(playerData);
    }
}

for (let j = 0; j < players.length; j++) {
    if (players[j].from === teamDetails[i].form.toLowerCase()  ) {
        createCards(players[j]);
}
}

function createCards(players) {
    const payerCon = document.getElementById("play-container");
        const playercardLink = document.createElement("a");
        playercardLink.href = "./player.html?player_id=" + players.id;

        const  playerDiv = document.createElement("div");
        playerDiv.classList.add("team-players");

        // const borderDiv = document.createElement("div");
        // borderDiv.classList.add("player-div");
        // borderDiv.setAttribute("id", "team-"+players.id);

        const playerlogo = document.createElement("div");
        playerlogo.classList.add("player-logo");

        const playerImage = document.createElement("img");
        playerImage.src = players.photo;
        playerImage.classList.add("player-img");
        playerlogo.appendChild(playerImage);
        playerDiv.appendChild(playerlogo);
        
        const playerdata = document.createElement("div");
        playerdata.classList.add("player-data");
        
        const playername = document.createElement("h2");
        playername .classList.add("player-name");
        playername .textContent = ( players.playerName);
        playerdata.appendChild(playername);

    
        const playerteam = document.createElement("p");
        playerteam.classList.add("player-team");
        playerteam .textContent = ("TeamName : " +players.team);
        playerdata.appendChild( playerteam);


        const playerprice = document.createElement("p");
        playerprice.classList.add("player-price");
        playerprice.textContent = ("Price  : " +players.price);
        playerdata.appendChild(playerprice);

        const playerisPlaying = document.createElement("p");
        playerisPlaying.classList.add("player-isPlaying");
        playerisPlaying .textContent = ("Status  : " +players.isPlaying);
        playerdata.appendChild(playerisPlaying);


        const playerdescription = document.createElement("p");
        playerdescription.classList.add("player-description");
        playerdescription .textContent = ("player : " +players.description);
        playerdata.appendChild(playerdescription);

        playerDiv.appendChild(playerdata);
        playercardLink.appendChild(playerDiv);
        payerCon.appendChild(playercardLink);
}
}
}

document.getElementById('new-team').addEventListener('click', function() {
    window.location.href = 'addteam.html';
  });

  document.getElementById('new-player').addEventListener('click', function() {
    window.location.href = 'addplayer.html';
  });

  localStorage.setItem('playerdetails', JSON.stringify(players));


  
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