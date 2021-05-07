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

const Title = styled.span`
  display: block;
  font-size: 1.2em;
`;

const Channel = styled.div`
  font-size: 0.8em;
  margin: 1em 0;
  opacity: 0.7;
`;

const Description = styled.span`
  font-size: 0.8em;
  opacity: 0.7;
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
      <Link to={`/watch/v=${id}`}>
        <List onClick={click} className={display}>
          <Video src={video}></Video>
          <Content>
            <Title>{title}</Title>
            <Channel>{channel}</Channel>
            <Description>
              {description.length > 25
                ? `${description.substring(0, 150)}...}`
                : description}
            </Description>
          </Content>
        </List>
      </Link>
    </Container>
  );
};

export default RowList;
