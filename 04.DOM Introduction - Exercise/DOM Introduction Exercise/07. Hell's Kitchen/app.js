function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   function onClick() {
      let textInput = JSON.parse(document.querySelector("div textarea").value);
      let restaurants = {};

      for (let each of textInput) {
         let [restaurantName, workersInfo] = each.split(" - ");
         let workers = workersInfo.split(", ");

         for (let worker of workers) {
            let [workerName, workerSalary] = worker.split(" ");
            workerSalary = Number(workerSalary);
            let workersArr = [];
            if (!restaurants.hasOwnProperty(restaurantName)) {
               restaurants[restaurantName] = { workers: workersArr };
               workersArr.push({ [workerName]: workerSalary });

            } else {
               let worker = { [workerName]: workerSalary };
               restaurants[restaurantName]["workers"].push(worker);
            }
         }
      }

      getAverageAndBestSalary(restaurants);
      printBestRestaurant(restaurants);
      let topRest = printBestRestaurant(restaurants);
      printBestWorkers(topRest);

      function getAverageAndBestSalary(restaurants) {

         let bestSalary = 0;
         let averageSalary = 0;
         let entriesRestaurants = Object.entries(restaurants);

         for (let [restName, workersObjArray] of entriesRestaurants) {
            let workersObjArrayEntries = Object.entries(workersObjArray);

            for (let worker of workersObjArrayEntries[0][1]) {
               let info = Object.entries(worker);
               let [name, salary] = info[0];

               averageSalary += salary;

               if (salary > bestSalary) {
                  bestSalary = salary;
               }
            }
            averageSalary = averageSalary / workersObjArrayEntries[0][1].length;
            restaurants[restName]["average"] = averageSalary;
            restaurants[restName]["best"] = bestSalary;
            averageSalary = 0;
            bestSalary = 0;

         }
         return restaurants;
      }

      function printBestRestaurant(restaurants) {
         let result = document.querySelector("#bestRestaurant p");
         let restaurantEntries = Object.entries(restaurants);
         restaurantEntries.sort((a, b) => b[1].average - a[1].average);
         let name = restaurantEntries[0][0];
         let info = restaurantEntries[0][1];
         let bestRest = { [name]: info };
         result.textContent = `Name: ${name} Average Salary: ${bestRest[name]["average"].toFixed(2)} Best Salary: ${bestRest[name]["best"].toFixed(2)}`;

         return bestRest;
      }

      function printBestWorkers(bestRestaurant) {
         let result = document.querySelector("#workers p");
         let entries = Object.entries(bestRestaurant)
         let employeesArray = entries[0][1].workers;
         let resultArr = [];
         for (let each of employeesArray) {
            let eachEntries = Object.entries(each);
            let [name, salary] = eachEntries[0];
            resultArr.push({ name, salary })
         }
         resultArr.sort((a, b) => b.salary - a.salary);
         let finalString = "";
         for (let each of resultArr) {
            finalString += `Name: ${each.name} With Salary: ${each.salary} `;
         }
         result.textContent = finalString;
      }
   }
}