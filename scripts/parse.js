const teams = require('./data/teams.json');
const roster = require('./data/roster.json');
(async () => {
    try {
        const data = {'49ers': {}, 'Dolphins': {}, 'Cardinals': {}, 'Patriots': {}, 'Rams': {}, 'Jets': {}};
        for (const [key, value] of Object.entries(teams)) {
            const {defPassYdsRank, defRushYdsRank, defTotalYdsRank, offPassYdsRank, offRushYdsRank, offTotalYdsRank, ovrRating, ptsAgainstRank, ptsForRank, rank, teamOvr, teamName, roster} = value
            if (data[teamName]) {
                data[teamName] = {
                    defPassYdsRank,
                    defRushYdsRank,
                    defTotalYdsRank,
                    offPassYdsRank,
                    offRushYdsRank,
                    offTotalYdsRank,
                    ovrRating,
                    ptsAgainstRank,
                    ptsForRank,
                    rank,
                    teamOvr,
                    playerCount: 0,
                    avgAge: 0,
                    avgAccelRating: 0,
                    avgSpeedRating: 0,
                }
            }
        }
        roster.forEach(player => {
            if (data[player.team]) {
                if (player.isOnPracticeSquad === false) {
                    data[player.team].playerCount += 1;
                    data[player.team].avgAge += player.age;
                    data[player.team].avgAccelRating += player.accelRating;
                    data[player.team].avgSpeedRating += player.speedRating;
                }
            }
        })
        Object.keys(data).forEach(team => {
            data[team].avgAge = data[team].avgAge / data[team].playerCount
            data[team].avgAccelRating = data[team].avgAccelRating / data[team].playerCount
            data[team].avgSpeedRating = data[team].avgSpeedRating / data[team].playerCount
        })
        //console.log(data);
    } catch (e) {
        console.error(e.message);
    }
})();