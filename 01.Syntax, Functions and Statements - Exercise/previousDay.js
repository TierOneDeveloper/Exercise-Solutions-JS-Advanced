function previousDay(year, month, day) {

  let today = new Date(year, month - 1, day);
  today.setDate(today.getDate() - 1);
  console.log(`${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`);
}

previousDay(2023, 2, 1)
previousDay(2016, 9, 30)
previousDay(2015, 5, 10)
previousDay(2000,0,1)
