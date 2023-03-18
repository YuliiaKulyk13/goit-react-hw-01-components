import PropTypes from 'prop-types';
import { FriendBox, Status, Avatar, FriendName } from './FriendList.styled';

export const FriendListItem = ({ friend: { avatar, name, isOnline } }) => {
  return (
    <FriendBox>
      <Status isOnline={isOnline}>{isOnline}</Status>
      <Avatar src={avatar} alt="User avatar" />
      <FriendName>{name}</FriendName>
    </FriendBox>
  );
};

FriendListItem.propTypes = {
  item: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
    id: PropTypes.number.isRequired,
  }).isRequired,
};
