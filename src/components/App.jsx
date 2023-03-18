import { Profile } from './Profile/Profile';
import user from '../JSONfiles/user';
import { Statistics } from './Statistics/Statistics';
import data from '../JSONfiles/data';
import { FriendList } from './Friends/FriendList';
import friends from '../JSONfiles/friends';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';
import transactions from '../JSONfiles/transactions';
import { Layout } from './Layout/Layout.styled';

export const App = () => {
  return (
    <Layout>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />;
    </Layout>
  );
};
