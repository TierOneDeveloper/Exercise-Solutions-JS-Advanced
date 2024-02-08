class Company {
  constructor() {
    this.departments = {};
  }

  addEmployee(name, salary, position, department) {
    salary = Number(salary);
    if (!name || !salary || !position || !department) {
      throw new Error("Invalid input!");
    }

    if (salary < 0) {
      throw new Error("Invalid input!");
    }

    if (!this.departments[department]) {
      this.departments[department] = {
        avg: 0,
        sumSalary: 0,
        employees: []
      }
    }

    this.departments[department].employees.push({ name, salary, position });
    return `New employee is hired. Name: ${name}. Position: ${position}`;
  }

  bestDepartment() {
    let entries = Object.entries(this.departments);

    for (let [name, info] of entries) {
      info.employees.forEach(element => {
        this.departments[name].sumSalary += element.salary
      });
      this.departments[name].avg = this.departments[name].sumSalary / info.employees.length;
    }

    let bestDepartment = entries.sort((a, b) => {
      b[1].avg - a[1].avg
    })[0];

    let sortedEmployees = bestDepartment[1].employees.sort((a, b) => b.salary - a.salary || a.name.localeCompare(b.name));
    let buff = `Best Department is: ${bestDepartment[0]}\n`;
    buff += `Average salary: ${bestDepartment[1].avg.toFixed(2)}\n`;
    sortedEmployees.forEach(el => buff += `${el.name} ${el.salary} ${el.position}\n`);

    return buff.trim();
  }
}

let c = new Company();
console.log(c.addEmployee("Stanimir", 2000, "engineer", "Construction"));
console.log(c.addEmployee("Pesho", 1500, "electrical engineer", "Construction"));
console.log(c.addEmployee("Slavi", 500, "dyer", "Construction"));
console.log(c.addEmployee("Stan", 2000, "architect", "Construction"));
console.log(c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing"));
console.log(c.addEmployee("Pesho", 1000, "graphical designer", "Marketing"));
console.log(c.addEmployee("Gosho", 1350, "HR", "Human resources"));
console.log(c.bestDepartment());
