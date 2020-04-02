import styled from "styled-components";

export const Contributors = styled.div`
  display: flex;
  align-content: center;
  flex-flow: row wrap;
  height: 100%;
  margin: 1rem 1rem;
`;

export const Profile = styled.div`
  display: flex;
  min-width: 18.125rem;
  width: 20%;
  margin: 1rem;
  padding: 1rem;
`;

export const Photo = styled.img`
  overflow: hidden;
  border-radius: 50%;
  height: 4.5rem;
  margin-bottom: 0;
  width: 4.5rem;
`;

export const Intro = styled.div`
  display: flex;
  flex: 1 1;
  flex-direction: column;
  justify-content: center;
  margin-left: 1rem;
  text-align: inherit;
`;

export const Name = styled.h4`
  margin: 0;
`;

export const Subtitle = styled.small`
  margin-top: 0.25rem;
`;
