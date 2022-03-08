import React from "react";
import styled from "styled-components";
import logoLink from "../../images/mainLogo.png"

const LinkContainer = styled.div`
  width: 100%;
  min-height: 6em;
  display: flex;
  border-bottom: 2px solid #d8d8d852;
  padding: 6px 8px;
  align-items: center;
`;

const Thumbnail = styled.div`
  width: auto;
  height: 100%;
  display: flex;
  flex: 0.4;
  img {
    width: auto;
    height: 100%;
  }
`;

const Name = styled.h3`
  font-size: 15px;
  color: #000;
  margin-left: 10px;
  flex: 2;
  display: flex;
`;

const Status = styled.span`
  color: #a1a1a1;
  font-size: 16px;
  display: flex;
  flex: 0.2;
`;

const TvShowContainer = styled.div`
  width: 100%;
  min-height: 6em;
  display: flex;
  border-bottom: 2px solid #d8d8d852;
  padding: 6px 8px;
  align-items: center;
`;



const Rating = styled.span`
  color: #a1a1a1;
  font-size: 16px;
  display: flex;
  flex: 0.2;
`;

export function LinkD(props) {
  const { name, rating } = props;

  return (
    // <LinkContainer>
    //   <Thumbnail>
    //     <img src={logoLink} />
    //   </Thumbnail>
    //   <Name>{link}</Name>
    //   <Status>{linkStatus || "N/A"}</Status>
    // </LinkContainer>
    <TvShowContainer>
      <Thumbnail>
        <img src={logoLink} />
      </Thumbnail>
      <Name>{name}</Name>
      <Rating>{rating || "N/A"}</Rating>
    </TvShowContainer>
  );
}