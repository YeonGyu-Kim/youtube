import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import styles from "./rowList.module.css";

const List = styled.li``;

const Video = styled.img``;

const Content = styled.div`
  display: flex;
`;

const Item = styled.div``;

const Title = styled.div`
  display: block;
`;

const Channel = styled.div`
  font-size: 0.9em;
  margin: 1em 0;
  opacity: 0.7;
`;

const Description = styled.div`
  font-size: 0.75em;
  opacity: 0.7;
  max-height: 3rem;
  overflow: hidden;
  letter-spacing: 0.04rem;
  line-height: 1.4rem;
`;

const RowList = ({
  title,
  video,
  channel,
  description,
  id,
  click,
  display,
  describe,
}) => {
  const describeFalse = describe === "false";
  return (
    <List
      className={`${describeFalse ? styles.changeList : styles.list}`}
      onClick={click}
    >
      <Link to={`/watch/v=${id}`}>
        <Content
          className={`${describeFalse ? styles.changeContent : styles.content}`}
        >
          <Video
            className={`${describeFalse ? styles.changeVideo : styles.video}`}
            src={video}
          ></Video>
          <Item
            className={`${describeFalse ? styles.changeItem : styles.item}`}
          >
            <Title
              className={`${describeFalse ? styles.changeTitle : styles.title}`}
            >
              {describeFalse && title.length > 28
                ? `${title.substring(0, 28)}... `
                : title}
            </Title>
            <Channel>{channel}</Channel>
            <Description>
              {description && description.length > 25
                ? `${description.substring(0, 150)}...}`
                : description}
            </Description>
          </Item>
        </Content>
      </Link>
    </List>
  );
};

export default RowList;
