let teams = JSON.parse(localStorage.getItem('teamArray'));

const params = new Proxy(new URLSearchParams(window.location.search), {
    get: (searchParams, prop) => searchParams.get(prop),
});

if(params.search){
    teams = teams.filter((team)=> team.sName == params.search);
}

$(document).ready(function () {
    $('#list').click(function (event) { event.preventDefault(); $('#teams .item').addClass('list-group-item'); });
    $('#grid').click(function (event) {
        event.preventDefault();
        $('#teams .item').removeClass('list-group-item');
        $('#teams .item').addClass('grid-group-item');
    });
    teams.forEach((team, index) => {
        let item = document.createElement('div');
        item.className = "item col-xs-4 col-lg-4";
        item.onclick = () => {
            window.location.href = 'pages/team.html?id=' + team.id;
        }

        let thumbnail = document.createElement('div');
        thumbnail.className = "thumbnail card";

        let imgEvent = document.createElement("div");
        imgEvent.className = "img-event";

        let img = document.createElement("img");
        img.className = "group list-group-image img-fluid";
        img.src = team.teamIcon;

        let caption = document.createElement("div");
        caption.className = "caption card-body";

        let heading = document.createElement('h5');
        heading.className = "group card-title inner list-group-item-heading";
        heading.innerHTML = team.teamFullName;

        let winningCount = document.createElement('h6');
        winningCount.className = "group card-title inner list-group-item-heading";
        winningCount.innerHTML = "Won Championship " + team.WonCount + " times";

        caption.appendChild(heading);
        caption.appendChild(winningCount);
        imgEvent.appendChild(img);
        thumbnail.appendChild(imgEvent);
        thumbnail.appendChild(caption);
        item.appendChild(thumbnail);

        $('#teams').append(item);
    });
});
