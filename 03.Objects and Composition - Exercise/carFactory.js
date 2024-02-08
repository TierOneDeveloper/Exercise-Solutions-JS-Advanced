function carFactory(carObject) {

  modifiedCar = {
    model: carObject.model,
    engine: null,
    carriage: null,
    wheels: null
  }

  if (carObject.power <= 90) {
    modifiedCar.engine = { power: 90, volume: 1800 };
  } else if (carObject.power <= 120) {
    modifiedCar.engine = { power: 120, volume: 2400 };
  } else {
    modifiedCar.engine = { power: 200, volume: 3500 };
  }

  if (carObject.carriage === "hatchback") {
    modifiedCar.carriage = { type: "hatchback", color: carObject.color };
  } else {
    modifiedCar.carriage = { type: "coupe", color: carObject.color };
  }

  if (carObject.wheelsize % 2 === 0) {
    let wheelsSize = carObject.wheelsize - 1;
    modifiedCar.wheels = new Array(4).fill(wheelsSize);
  } else {
    modifiedCar.wheels = new Array(4).fill(carObject.wheelsize);
  }

  return modifiedCar
}

carFactory({
  model: 'VW Golf II',
  power: 90,
  color: 'blue',
  carriage: 'hatchback',
  wheelsize: 14
})

carFactory({
  model: 'Opel Vectra',
  power: 110,
  color: 'grey',
  carriage: 'coupe',
  wheelsize: 17
})


