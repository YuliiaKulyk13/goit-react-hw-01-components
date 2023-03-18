import styled from 'styled-components';

export const Section = styled.section`
  width: 650px;
  border: 1px solid black;
  border-radius: 4px;
  box-shadow: 10px 5px 5px grey;
`;

export const Title = styled.h2`
  text-align: center;
  text-transform: uppercase;
  padding: 40px;
  font-size: 25px;
  border-bottom: 1px solid black;
  color: grey;
  background-color: rgb(233, 230, 230);
`;

export const StatsList = styled.ul`
  justify-content: space-between;
  display: flex;
  align-items: center;
`;

export const StatItem = styled.li`
  display: flex;
  width: 100%;
  text-align: center;
  flex-direction: column;
  border-right: 1px solid black;

  padding: 10px;
  gap: 3px;
  color: black;
  background-color: ${getRandomHexColor};
`;

export const Label = styled.span`
  font-size: 12px;
`;

export const Percentage = styled.span`
  font-size: 18px;
`;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
