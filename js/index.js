$(document).ready(function () {
    if (!(localStorage.getItem('teamArray') && localStorage.getItem('playerArray'))) {
        let players = [
            {
                "id": 0,
                "playerName": "Hardik Pandya",
                "from": "GT",
                "price": "6.50 Cr",
                "isPlaying": true,
                "description": "All-rounder",
                "playerImg": "https://assets.iplt20.com/ipl/IPLHeadshot2022/3761.png"
            },
            {
                "id": 1,
                "playerName": "Virat Kohli",
                "from": "RCB",
                "price": "8.00 Cr",
                "isPlaying": true,
                "description": "Batsman",
                "playerImg": "https://assets.iplt20.com/ipl/IPLHeadshot2022/3761.png"
            },
            {
                "id": 2,
                "playerName": "Yuvraj Singh",
                "from": "MI",
                "price": "1.00 Cr",
                "isPlaying": false,
                "description": "Batsman",
                "playerImg": "https://assets.iplt20.com/ipl/IPLHeadshot2022/3761.png"
            },
            {
                "id": 3,
                "playerName": "Chris Morris",
                "from": "RR",
                "price": "16.25 Cr",
                "isPlaying": true,
                "description": "All-rounder",
                "playerImg": "https://assets.iplt20.com/ipl/IPLHeadshot2022/1740.png"
            },
            {
                "id": 4,
                "playerName": "Rashid Khan",
                "from": "GT",
                "price": "1.30 Cr",
                "isPlaying": true,
                "description": "Bowler",
                "playerImg": "https://assets.iplt20.com/ipl/IPLHeadshot2022/2885.png"
            },
            {
                "id": 5,
                "playerName": "Glenn Maxwell",
                "from": "RCB",
                "price": "14.25 Cr",
                "isPlaying": true,
                "description": "All-rounder",
                "playerImg": "https://assets.iplt20.com/ipl/IPLHeadshot2022/164.png"
            },
            {
                "id": 6,
                "playerName": "Rohit Sharma",
                "from": "RCB",
                "price": "6.50 Cr",
                "isPlaying": true,
                "description": "All-rounder",
                "playerImg": "https://assets.iplt20.com/ipl/IPLHeadshot2022/282.png"
            },
        ];

        let teams = [
            {
                "id": 0,
                "teamFullName": "Mumbai Indians",
                "sName": "MI",
                "fullSname": "MI (Mumbai Indians)",
                "teamIcon": "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/MI/Logos/Roundbig/MIroundbig.png",
                "WonCount": 5
            },
            {
                "id": 1,
                "teamFullName": "Chennai Super Kings",
                "sName": "CSK",
                "fullSname": "CSK (Chennai Super King)",
                "teamIcon": "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/CSK/logos/Roundbig/CSKroundbig.png",
                "WonCount": 5
            },
            {
                "id": 2,
                "teamFullName": "Royal Challengers Bangalore",
                "sName": "RCB",
                "fullSname": "RCB (Royal challengers Bangalore)",
                "teamIcon": "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/RCB/Logos/Roundbig/RCBroundbig.png",
                "WonCount": 0
            },
            {
                "id": 3,
                "teamFullName": "Kolkata Knight Riders",
                "sName": "KKR",
                "fullSname": "KKR (Kolkata Knight Riders)",
                "teamIcon": "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/KKR/Logos/Roundbig/KKRroundbig.png",
                "WonCount": 1
            },
            {
                "id": 4,
                "teamFullName": "Delhi Capitals",
                "sName": "DC",
                "fullSname": "DC (Delhi Capitals)",
                "teamIcon": "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/DC/Logos/Roundbig/DCroundbig.png",
                "WonCount": 2
            },
            {
                "id": 5,
                "teamFullName": "Gujarat Titan",
                "sName": "GT",
                "fullSname": "GT (Gujarat Tistan)",
                "teamIcon": "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/GT/Logos/Roundbig/GTroundbig.png",
                "WonCount": 1
            },
            {
                "id": 6,
                "teamFullName": "Rajasthan Royals",
                "sName": "RR",
                "fullSname": "RR (Rajasthan Royals)",
                "teamIcon": "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/RR/Logos/Roundbig/RRroundbig.png",
                "WonCount": 5
            },
            {
                "id": 7,
                "teamFullName": "Sunrises Hyderabad",
                "sName": "SH",
                "fullSname": "SH (Sunrises Hyderabad)",
                "teamIcon": "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/SRH/Logos/Roundbig/SRHroundbig.png",
                "WonCount": 1
            },
            {
                "id": 8,
                "teamFullName": "Punjab Kings",
                "sName": "PBKS",
                "fullSname": "PBKS (Punjab Kings)",
                "teamIcon": "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/PBKS/Logos/Roundbig/PBKSroundbig.png",
                "WonCount": 3
            }
        ];
        if (!localStorage.getItem('teamArray')) {
            localStorage.setItem('teamArray', JSON.stringify(teams));
            localStorage.setItem('playerArray', JSON.stringify(players));
            window.location.reload();
        }
    }

});

function searchTeam(value) {
    console.log(value)
}