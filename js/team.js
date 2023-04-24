let teams = JSON.parse(localStorage.getItem('teamArray'));
let players = JSON.parse(localStorage.getItem('playerArray'));

const params = new Proxy(new URLSearchParams(window.location.search), {
    get: (searchParams, prop) => searchParams.get(prop),
});
teams = teams.filter((team) => team.id == params.id);

let teamInfo;
if (teams.length > 0) {
    teamInfo = teams[0];
}

let playerCount = players.length;
let championshipWon = teamInfo.WonCount;
let playerBatsman = players[0].playerName;
let playerBowler = players[0].playerName;

$('.playerCount')[0].innerHTML = playerCount;
$('.championshipWon')[0].innerHTML = championshipWon;
$('.playerBatsman')[0].innerHTML = playerBatsman;
$('.playerBowler')[0].innerHTML = playerBowler;
// {
//     "id": 3,
//     "teamFullName": "Kolkata Knight Riders",
//     "sName": "KKR",
//     "fullSname": "KKR (Kolkata Knight Riders)",
//     "teamIcon": "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/KKR/Logos/Roundbig/KKRroundbig.png",
//     "WonCount": 1
//   }

let team_image = document.getElementsByClassName('team-logo')[0];
team_image.setAttribute('src', teamInfo.teamIcon);
team_image.setAttribute('alt', teamInfo.teamFullName);

let team_name = document.getElementsByClassName('team-name')[0];
team_name.textContent = teamInfo.teamFullName;

// Full Name
// ■ Photo
// ■ Team
// ■ Price
// ■ Playing Status - Playing or On-bench
// ■ Role - Batsman, Bowler or All-rounder.

// {
//     "id": 3,
//     "playerName": "Chris Morris",
//     "from": "RR",
//     "price": "16.25 Cr",
//     "isPlaying": true,
//     "description": "All-rounder",
//     "playerImg": "https://assets.iplt20.com/ipl/IPLHeadshot2022/1740.png"
// }


players.forEach(player => {
    let item = document.createElement('div')
    item.className = "item col-xs-4 col-lg-4";
    item.onclick = () => {
        window.location.href = 'player.html?id=' + player.id;
    }
    let thumbnail = document.createElement('div');
    thumbnail.className = "thumbnail card";

    let imgEvent = document.createElement("div");
    imgEvent.className = "img-event";

    let img = document.createElement("img");
    img.className = "group list-group-image img-fluid";
    img.src = player.playerImg;

    let caption = document.createElement("div");
    caption.className = "caption card-body";

    let heading = document.createElement('h5');
    heading.className = "group card-title inner list-group-item-heading";
    heading.innerHTML = player.playerName;

    caption.appendChild(heading);

    imgEvent.appendChild(img);
    thumbnail.appendChild(imgEvent);
    thumbnail.appendChild(caption);
    item.appendChild(thumbnail);
    $('#players').append(item);
});