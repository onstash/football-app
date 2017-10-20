import React from 'react';

import FixtureDate from '../fixture-date';
import FixtureResult from '../fixture-result';
import FixtureTeams from '../fixture-teams';
import FixtureSubscription from '../fixture-subscription';

const Dummy = () => <div />;

const Fixture = ({
  homeTeamName,
  awayTeamName,
  date,
  status,
  result,
  source,
  fixtureID
}) => {
  const timeDifferenceInMins = (new Date() - new Date(date)) / (1000 * 60);
  const isGameLive = timeDifferenceInMins > 0 && timeDifferenceInMins < 115;
  const className = isGameLive ? 'fa-fixture-container-live' : 'fa-fixture-container';
  const showNotificationsToggle = isGameLive === false && status === 'SCHEDULED';
  const NotificationToggle = showNotificationsToggle ? FixtureSubscription : Dummy;
  return (
    <div className={className}>
      <FixtureTeams homeTeam={homeTeamName} awayTeam={awayTeamName} />
      <FixtureResult {...result} timeDifferenceInMins={timeDifferenceInMins} />
      <FixtureDate date={date} status={status} />
      <NotificationToggle
        fixtureID={fixtureID}
        date={date}
        homeTeamName={homeTeamName}
        awayTeamName={awayTeamName}
      />
    </div>
  );
};

export default Fixture;
