webpackJsonp([13],{206:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(2),r=n(11),o=function(){return n.e(10).then(n.bind(null,213))},u=function(){return n.e(12).then(n.bind(null,208))},i=function(e){var t=e.fixtureDay,n=e.fixtures,i=e.team,m=e.timeFrame,c=i?n.filter(function(e){var t=e.awayTeamName,n=e.homeTeamName;return t===i||n===i}):n;return a.a.createElement("div",{className:"fa-day-fixtures-container"},a.a.createElement(r.a,{loadComponentModule:u,componentProps:{number:t},componentName:"FixtureMatchWeek"}),a.a.createElement("div",{className:"fa-day-fixtures"},c.map(function(e,t){var n=e._links.self.href,u=n.split("/"),i=Number(u[u.length-1]);return a.a.createElement(r.a,{key:t,loadComponentModule:o,componentProps:Object.assign({timeFrame:m,fixtureID:i,source:"DayFixtures"},e),componentName:"Fixture"})})))};t.default=i}});
//# sourceMappingURL=day-fixtures.b182025b.chunk.js.map