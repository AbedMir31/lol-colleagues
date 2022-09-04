import { Col, Container, Row } from "react-bootstrap";
import queues from "../assets/data/queues.json";
import RelativeTime from "@yaireo/relative-time";

export const Matches = matches => {
  const matchData = matches.matches;
  const relTime = new RelativeTime();
  console.log(matches.ign2);

  const renderMatches = matchData.map(match => {
    const q = queues.find(x => x.queueId === match.info.queueId);

    const team1 = () => {
      return match.info.participants
        .slice(0, match.info.participants.length / 2)
        .map(champ => {
          return (
            <Row
              key={champ.summonerName}
              style={
                champ.summonerName.toLowerCase().replace(" ", "") ===
                  matches.ign1.toLowerCase().replace(" ", "") ||
                champ.summonerName.toLowerCase().replace(" ", "") ===
                  matches.ign2.toLowerCase().replace(" ", "")
                  ? { fontWeight: "bold" }
                  : {}
              }
            >
              <Col className="char-icon">
                <img
                  className="champ-icon"
                  src={`https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/champion-icons/${champ.championId}.png`}
                  alt={champ.championName}
                ></img>
              </Col>
              <Col>{champ.summonerName}</Col>
              <Col>{`${champ.kills}/${champ.deaths}/${champ.assists}`}</Col>
            </Row>
          );
        });
    };
    const team2 = () => {
      return match.info.participants
        .slice(match.info.participants.length / 2)
        .map(champ => {
          return (
            <Row
              key={champ.summonerName}
              style={
                champ.summonerName.toLowerCase().replace(" ", "") ===
                  matches.ign1.toLowerCase().replace(" ", "") ||
                champ.summonerName.toLowerCase().replace(" ", "") ===
                  matches.ign2.toLowerCase().replace(" ", "")
                  ? { fontWeight: "bold" }
                  : {}
              }
            >
              <Col className="char-icon">
                <img
                  className="champ-icon"
                  src={`https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/champion-icons/${champ.championId}.png`}
                  alt={champ.championName}
                ></img>
              </Col>
              <Col>{champ.summonerName}</Col>
              <Col>{`${champ.kills}/${champ.deaths}/${champ.assists}`}</Col>
            </Row>
          );
        });
    };

    return (
      <Row className="match-row" key={match.info.gameEndTimestamp}>
        <Col className="match-col-head">
          <div className="match-map">{q ? q.map : ""}</div>
          <div className="match-type">
            {q ? q.description.replace("games", "").replace("5v5", "") : ""}
          </div>
          <div className="match-type">
            {q ? relTime.from(match.info.gameEndTimestamp) : ""}
          </div>
        </Col>
        <Col className="match-col-team">{team1()}</Col>
        <Col className="match-col-team">{team2()}</Col>
      </Row>
    );
  });

  return <Container className="match-container">{renderMatches}</Container>;
};
