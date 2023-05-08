import {Profile} from './Profile/Profile';
import Section from './Statistics/Sectoin';
import StatisticsList from './Statistics/StatisticsList';
import FriendList from './FriendList/FriendList';
import TransactionList from './TransactionHistory/TransactionList';
import user from 'user.json';
import data from 'data.json';
import friends from 'friends.json';
import transactions from 'transactions.json';

export const App = () => {
  return (
    <div
      style={{
        // height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        // fontSize: 40,
        // color: '#010101'
      }}
    >
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />

      <Section 
        title="Upload stats">
        <StatisticsList items={data} />
      </Section>

      <FriendList
        friends={friends}/>     

      <TransactionList 
        items={transactions}/>;

    </div>
  );
};
