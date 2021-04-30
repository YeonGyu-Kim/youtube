import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  padding: 2em 4em 0em 4em;
`;

const Video = styled.img`
  width: 23%;
`;

const Content = styled.div`
  display: block;
  margin-left: 1rem;
`;

const List = styled.li`
  display: flex;
`;

const RowList = ({
  title,
  video,
  channel,
  description,
  id,
  click,
  display,
}) => {
  return (
    <Container>
      <Link to={`/watch/${id}`}>
        <List onClick={click} className={display}>
          <Video src={video}></Video>
          <Content>
            <h1>{title}</h1>
            <h1>{channel}</h1>
            <h3>{description}</h3>
          </Content>
        </List>
      </Link>
    </Container>
  );
};

export default RowList;
