function timeToWalk(numberOfSteps, lengthOfStep, speedKmPerH) {

  let distanceInM = numberOfSteps * lengthOfStep;
  let speedMetPerSec = (speedKmPerH * 1000) / 3600;
  let timeForBreaksInSeconds = Math.floor(distanceInM / 500) * 60;
  let time = distanceInM / speedMetPerSec + timeForBreaksInSeconds;

  let timeSec = Math.round(time % 60);
  let timeMin = Math.floor(time / 60);
  let timeHour = Math.floor(timeMin / 60);
  timeMin -= timeHour * 60;

  let hours = timeHour < 10 ? `0${timeHour}` : `${timeHour}`;
  let minutes = timeMin < 10 ? `0${timeMin}` : `${timeMin}`;
  let seconds = timeSec < 10 ? `0${timeSec}` : `${timeSec}`;

  console.log(`${hours}:${minutes}:${seconds}`);

}

timeToWalk(4000, 0.60, 5)
timeToWalk(2564, 0.70, 5.5)
