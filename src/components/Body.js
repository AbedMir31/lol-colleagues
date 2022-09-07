import { useState } from "react";
import { Container, Row, Alert } from "react-bootstrap";
import { Matches } from "./Matches";
import { Query } from "./Query";
import { QueryForm } from "./QueryForm";
export const Body = () => {
  const [loaded, setLoaded] = useState(false);
  const [matchData, setMatchData] = useState(null);

  const [user1, setUser1] = useState("");
  const [user2, setUser2] = useState("");

  const handleSubmit = event => {
    const ign1 = event.target.ign1.value.trim();
    const ign2 = event.target.ign2.value.trim();
    if (ign1 === ign2) {
      alert("Usernames must not be the same!");
      return;
    }

    event.preventDefault();
    setLoaded(false);
    setMatchData(null);
    Query(ign1, ign2).then(res => {
      if (res.length) {
        setMatchData(res);
        setUser1(ign1);
        setUser2(ign2);
      }
      setLoaded(true);
    });
  };

  const loadMatch = (ign1, ign2) => {
    if (loaded) {
      if (matchData) {
        return <Matches ign1={ign1} ign2={ign2} matches={matchData}></Matches>;
      } else {
        return (
          <Container className="no-match">
            <Alert className="no-match-alert" variant="danger">
              No Matches Found
            </Alert>
          </Container>
        );
      }
    } else {
      return (
        <Container className="tooltip-container">
          <Alert className="tooltip" variant="primary">
            Enter your username and another person to view matches you have been
            in together. This only can look up to your last 100 games played
            (due to Riot API constraints).
          </Alert>
        </Container>
      );
    }
  };

  return (
    <section>
      <Container className="form-container">
        <Row className="align-items-center">
          <h1 className="form-header">LoL Colleagues</h1>
          <QueryForm handleSubmit={handleSubmit}></QueryForm>
        </Row>
      </Container>
      {loadMatch(user1, user2)}
    </section>
  );
};
