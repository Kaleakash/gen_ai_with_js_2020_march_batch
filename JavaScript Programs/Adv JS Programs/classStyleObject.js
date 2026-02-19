// class style object creation for employee with property as id,name,salary
// with few functions to set and get the values of the properties
// as well as to calculate the annual salary of the employee
class Employee {
    constructor(id=0, name="Unknown", salary=25000) {
        this.id = id;
        this.name = name;
        this.salary = salary;
    }
    getDetails() {
        return `ID: ${this.id}, Name: ${this.name}, Salary: ${this.salary}`;
    }
    setSalary(newSalary) {
        this.salary = newSalary;
    }
    getAnnualSalary() {
        return this.salary * 12;
    }
}
let emp1 = new Employee(1, 'John Doe', 50000);
let emp2 = new Employee(2, 'Jane Smith', 60000);
let emp3 = new Employee(3, 'Bob Johnson', 70000);
let emp4 = new Employee(4, 'Alice Williams');
let emp5 = new Employee(5);
let emp6 = new Employee();
document.write(emp1.getDetails() + '<br>'); // Output: ID: 1, Name: John Doe, Salary: 50000
document.write(emp2.getDetails() + '<br>'); // Output: ID: 2, Name: Jane Smith, Salary: 60000
document.write(emp3.getDetails() + '<br>');
document.write(emp4.getDetails() + '<br>'); // Output: ID: 4, Name: Alice Williams, Salary: 25000
document.write(emp5.getDetails() + '<br>'); // Output: ID: 5, Name: Unknown, Salary: 25000    
document.write(emp6.getDetails() + '<br>'); // Output: ID: 0, Name: Unknown, Salary: 25000
emp1.setSalary(55000);
document.write(emp1.getDetails() + '<br>');
document.write(`Annual Salary of ${emp1.name}: ${emp1.getAnnualSalary()}<br>`); // Output: Annual Salary of John Doe: 660000
document.write(`Annual Salary of ${emp2.name}: ${emp2.getAnnualSalary()}<br>`); // Output: Annual Salary of Jane Smith: 720000
document.write(`Annual Salary of ${emp3.name}: ${emp3.getAnnualSalary()}<br>`); // Output: Annual Salary of Bob Johnson: 840000
``