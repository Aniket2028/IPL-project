let player = JSON.parse(localStorage.getItem('playerArray'));
const params = new Proxy(new URLSearchParams(window.location.search), {
    get: (searchParams, prop) => searchParams.get(prop),
});
player = player.filter((p) => p.id == params.id);
console.log(player);
// {
//     "id": 1,
//     "playerName": "Virat Kohli",
//     "from": "RCB",
//     "price": "8.00 Cr",
//     "isPlaying": true,
//     "description": "Batsman",
//     "playerImg": "https://images.app.goo.gl/6knxMvkVnRh1zBvX9"
// }
const playerTeam = player[0].from;
const playerPrice = player[0].price;
const playerStatus = player[0].isPlaying;
const playerRole = player[0].description;

$(".playerTeam")[0].innerHTML = playerTeam;
$(".playerPrice")[0].innerHTML = playerPrice;
$(".playerStatus")[0].innerHTML = playerStatus ? 'Playing' : 'On Bench';
$(".playerRole")[0].innerHTML = playerRole;
$(".playerPic")[0].src = player[0].playerImg;
$(".playerName")[0].innerHTML = player[0].playerName;