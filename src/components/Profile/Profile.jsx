import PropTypes from 'prop-types';
import { 
  ProfileCard, 
  Description, 
  Avatar, 
  Username, 
  Tag, 
  Location, 
  StatsList, 
  StatsItem, 
  Quantity} 
  from './Profile.styled';

export const Profile = ({
  username,
  tag,
  location,
  avatar,
  stats: { followers, views, likes },
}) => {
  return (
   <ProfileCard>
    <Description>
      <Avatar src={avatar} alt={username} />
      <Username>{username}</Username>
      <Tag>@{tag}</Tag>
      <Location>{location}</Location>
      <StatsList>
      <StatsItem>
          <span>Followers</span>
          <Quantity>{followers}</Quantity>
        </StatsItem>
      <StatsItem>
          <span>Views</span>
          <Quantity>{views}</Quantity>
        </StatsItem>
      <StatsItem>
          <span>Likes</span>
          <Quantity>{likes}</Quantity>
        </StatsItem>
     </StatsList>
      </Description>
    </ProfileCard>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};

export default Profile;
