import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  padding: 1em 5em;
`;

const Video = styled.img`
  width: 15rem;
  height: 8rem;
`;

const Description = styled.div`
  display: block;
`;

const List = styled.li`
  display: flex;
  color: beige;
`;

const RowList = ({ title, video, description }) => {
  return (
    <Container>
      <List>
        <Video src={video}></Video>
        <h1>{title}</h1>
        <h1>{description}</h1>
      </List>
    </Container>
  );
};

export default RowList;
