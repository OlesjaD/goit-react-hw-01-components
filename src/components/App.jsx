import {Profile} from './Profile/Profile';
// import { Statistics } from './Statistics/Statistics';
import Section from './Statistics/Sectoin';
import StatisticsList from './Statistics/StatisticsList';
import user from 'user.json';
import data from 'data.json';


export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
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
    </div>
  );
};
