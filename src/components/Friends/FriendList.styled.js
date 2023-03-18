import styled from 'styled-components';

export const FriendBox = styled.li`
  display: flex;
  align-items: center;
  width: 600px;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 8px;
  border-radius: 5px;
  margin-bottom: 5px;
  padding: 10px;
`;

export const Status = styled.span`
  height: 13px;
  width: 13px;
  border-radius: 50%;
  margin-right: 4px;
  background-color: red;
  background-color: ${props => (props.isOnline ? 'green' : 'false')};
`;

export const Avatar = styled.img`
  margin-right: 5px;
  padding: 3px;
  width: 60px;
`;

export const FriendName = styled.p`
  font-size: 20px;
  font-weight: 600;
  color: grey;
  margin-right: 5px;
`;
