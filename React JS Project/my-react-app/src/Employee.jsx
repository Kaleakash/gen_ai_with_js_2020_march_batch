// create Employee component which contains 
// 3 state variable name, age and department
// create a form to take input for name, age and department
// on submit add these information in array 
// display in table format
import React, { useState } from 'react';

const Employee = () => {   
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [department, setDepartment] = useState('');
    const [employees, setEmployees] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault(); // disable page refresh on submit
        const newEmployee = { name, age, department };  // newEmployee object consider 
        //...employees is used to spread the existing employees in the array 
        // and then add the newEmployee to it
        setEmployees([...employees, newEmployee]);
        setName('');
        setAge('');
        setDepartment('');
    };

    return (
        <div>
            <h2>Employee Form</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Age"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Department"
                    value={department}
                    onChange={(e) => setDepartment(e.target.value)}
                />
                <button type="submit">Add Employee</button>
            </form>
            <h2>Employee List</h2>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Department</th>
                    </tr>
                </thead>
                <tbody>
                    {employees.map((employee, index) => (
                        <tr key={index}>
                            <td>{employee.name}</td>
                            <td>{employee.age}</td>
                            <td>{employee.department}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Employee;    
