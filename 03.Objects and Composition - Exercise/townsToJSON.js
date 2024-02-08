function townsToJSON(arr) {
  let result = [];
  let regex = /\s*\|\s*/gm;
  let tableHeading = arr.shift().split(regex).join(" ").trim().split(" ");

  for (let i = 0; i < arr.length; i++) {
    let tokens = arr[i].split(regex);
    tokens.shift();
    tokens.pop();
    let [townName, townLatitude, townLongitude] = tokens;

    townLatitude = Number(townLatitude);
    townLongitude = Number(townLongitude);

    townLatitude = townLatitude.toFixed(2);
    townLongitude = townLongitude.toFixed(2);

    townLatitude = Number(townLatitude);
    townLongitude = Number(townLongitude);

    result.push({ [tableHeading[0]]: townName, [tableHeading[1]]: townLatitude, [tableHeading[2]]: townLongitude });
  }
  console.log(JSON.stringify(result));
}

townsToJSON(['| Town | Latitude | Longitude |',
  '| Sofia | 42.696552 | 23.32601 |',
  '| Beijing | 39.913818 | 116.363625 |'])

townsToJSON(['| Town | Latitude | Longitude |',
  '| Veliko Turnovo | 43.0757 | 25.6172 |',
  '| Monatevideo | 34.50 | 56.11 |'])

