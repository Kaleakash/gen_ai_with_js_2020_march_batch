// creating employee object in function style with few property and some behaviour 
function Employee(name, age, salary) {
    this.name = name;
    this.age = age;
    this.salary = salary;

    this.getDetails = function() {
        return `Name: ${this.name}, Age: ${this.age}, Salary: ${this.salary}`;
    }
    this.incrementSalary = function(amount) {
        this.salary += amount;
    }
    this.getEmployeeSalary = function(id) { 
        // Simulating fetching salary from a database using the employee ID
        const employeeSalaries = {
            1: 50000,
            2: 60000,
            3: 70000
        };
        return employeeSalaries[id] || 'Employee not found';
    }
}
let emp1 = new Employee('John Doe', 30, 50000);
let emp2 = new Employee('Jane Smith', 28, 60000);
let emp3 = new Employee('Bob Johnson', 35, 70000);
document.write(emp1.getDetails() + '<br>'); // Output: Name: John Doe, Age: 30, Salary: 50000
document.write(emp2.getDetails() + '<br>'); // Output: Name: Jane Smith, Age: 28, Salary: 60000
document.write(emp3.getDetails() + '<br>'); // Output: Name: Bob Johnson, Age: 35, Salary: 70000
emp1.incrementSalary(5000);
document.write(emp1.getDetails() + '<br>'); // Output: Name: John Doe, Age: 30, Salary: 55000
document.write(emp1.getEmployeeSalary(1) + '<br>'); // Output: 50000
document.write(emp2.getEmployeeSalary(2) + '<br>'); // Output: 60000
document.write(emp3.getEmployeeSalary(3) + '<br>'); // Output: 70000
document.write(emp3.getEmployeeSalary(10) + '<br>'); // Output: Employee not found
