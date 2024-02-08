function roadRadar(currentSpeed, zone) {

  let speedLimit = 0;

  switch (zone) {
    case "city": speedLimit = 50;
      break;
    case "residential": speedLimit = 20;
      break;
    case "interstate": speedLimit = 90;
      break;
    case "motorway": speedLimit = 130;
      break;
  }

  let difference = currentSpeed - speedLimit;

  if (difference <= 0) {
    console.log(`Driving ${currentSpeed} km/h in a ${speedLimit} zone`);
  } else {
    if (difference <= 20) {
      console.log(`The speed is ${difference} km/h faster than the allowed speed of ${speedLimit} - speeding`);
    } else if (difference <= 40) {
      console.log(`The speed is ${difference} km/h faster than the allowed speed of ${speedLimit} - excessive speeding`);
    } else {
      console.log(`The speed is ${difference} km/h faster than the allowed speed of ${speedLimit} - reckless driving`);
    }

  }
}

roadRadar(40, 'city')
roadRadar(21, 'residential')
roadRadar(120, 'interstate')
roadRadar(200, 'motorway')

