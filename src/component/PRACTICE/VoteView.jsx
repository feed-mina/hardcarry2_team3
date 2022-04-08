import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import CandidateVotes from "./Candidate";
import { Link } from "react-router-dom";
import { Button } from "./Candidate";

const url =
  "http://ec2-13-209-5-166.ap-northeast-2.compute.amazonaws.com:8000/api/candidates";

function VoteView({}) {
  const [candidates, setCandidates] = useState([]);
  const [voteFlag, setVoteFlag] = useState(false);

  function flipVoteFlag() {
    setVoteFlag(!voteFlag);
  }

  useEffect(() => {
    const fetchCandidates = async () => {
      try {
        const response = await axios.get(url);
        setCandidates(response.data);
      } catch (e) {}
    };

    fetchCandidates();
  }, [voteFlag]);

  const sortedCandidates = candidates.sort((a, b) => {
    return b.voteCount - a.voteCount;
  });

  return (
    <Container>
      <Title>굿즈투표</Title>

      <CandidateContainer>
        {sortedCandidates.map((candidate) => (
          <CandidateVotes
            candidate={candidate}
            key={candidate.id}
            flipVoteFlag={flipVoteFlag}
            rank={sortedCandidates.indexOf(candidate) + 1}
          />
        ))}
      </CandidateContainer>
    </Container>
  );
}

export default VoteView;

const Container = styled.div`
  text-align: center;
`;

const CandidateContainer = styled.div`
  margin-top: 50px;
`;

const Title = styled.h1``;

const UserButton = styled(Button)`
  border: #00897b 1px solid;
  color: #004d40;
`;
