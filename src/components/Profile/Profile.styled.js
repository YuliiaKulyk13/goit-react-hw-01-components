import styled from 'styled-components';

export const ProfileCard = styled.div`
  width: 300px;
  height: auto;
  padding: 8px;
  border-radius: 4px;
  border: 1px solid black;
  background-color: #c1e1c1;

  justify-content: content;
  box-shadow: 10px 5px 5px grey;
`;

export const Description = styled.div`
  display: block;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: grey;
`;

export const Avatar = styled.img`
  object-fit: fill;
  margin: auto;
  height: 100px;
  width: 100px;
  border-radius: 50%;
  background-color: grey;
  padding: 5px;
`;

export const Username = styled.p`
  font-size: 28px;
  font-weight: 700;
  margin-top: 5px;
`;

export const Tag = styled.p`
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 8px;
  border-bottom: 2px solid grey;
`;

export const Location = styled.p`
  font-size: 20px;
  font-weight: 700;
`;

export const StatsList = styled.ul`
  justify-content: space-between;
  display: flex;
  align-items: center;

  margin-top: 5px;
`;

export const StatsItem = styled.li`
  width: 100%;
  text-align: center;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  display: flex;
  gap: 3px;
  padding: 4px;
  font-size: 18px;
  font-weight: 600;
`;

export const Quantity = styled.span`
  font-size: 14px;
  font-weight: 600;
`;
