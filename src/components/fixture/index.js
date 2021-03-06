import React from 'react';

import FixtureDate from '../fixture-date';
import FixtureResult from '../fixture-result';
import FixtureTeams from '../fixture-teams';
import FixtureSubscription from '../fixture-subscription';

const Dummy = () => null;

const Fixture = ({
  homeTeamName,
  awayTeamName,
  date,
  status,
  result,
  source,
  fixtureID
}) => {
  const currentTimeStamp = new Date();
  const fixtureTimeStamp = new Date(date);
  const timeDifferenceInMins = (currentTimeStamp - fixtureTimeStamp) / (1000 * 60);
  const isGameLive = timeDifferenceInMins > 0 && timeDifferenceInMins < 115;
  const className = isGameLive ? 'fa-fixture-container-live' : 'fa-fixture-container';
  const showNotificationsToggle = currentTimeStamp < fixtureTimeStamp;
  const NotificationToggle = showNotificationsToggle ? FixtureSubscription : Dummy;
  return (
    <div className={className}>
      <NotificationToggle
        fixtureID={fixtureID}
        date={date}
        homeTeamName={homeTeamName}
        awayTeamName={awayTeamName}
      />
      <FixtureTeams homeTeam={homeTeamName} awayTeam={awayTeamName} />
      <FixtureResult {...result} timeDifferenceInMins={timeDifferenceInMins} />
      <FixtureDate date={date} status={status} isGameLive={isGameLive} />
    </div>
  );
};

export default Fixture;
