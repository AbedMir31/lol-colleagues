export async function Query(ign1, ign2) {
  let url = `/.netlify/functions/getMatchData?ign=${ign1}`;
  try {
    let data = await fetch(url).then(res => res.json());
    const puuid1 = data.puuid;

    url = `/.netlify/functions/getMatchData?ign=${ign2}`;
    data = await fetch(url).then(res => res.json());
    const puuid2 = data.puuid;

    url = `/.netlify/functions/getMatchData?puuid=${puuid1}`;
    const matchList1 = await fetch(url).then(res => res.json());
    //console.log(matchList1);
    url = `/.netlify/functions/getMatchData?puuid=${puuid2}`;
    const matchList2 = await fetch(url).then(res => res.json());
    //console.log(matchList2);

    const intersection = matchList1.filter(val => matchList2.includes(val));
    //console.log(intersection);

    const matchesData = await Promise.all(
      intersection.map(async matchID => {
        url = `/.netlify/functions/getMatchData?matchID=${matchID}`;
        return fetch(url).then(res => res.json());
      })
    );

    return matchesData;
  } catch (err) {
    //console.log(err);
    return [];
  }
}
