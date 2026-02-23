function EmployeeTableFormat(props) {
    const { employeesData } = props;
    return (
        <table border="1" cellPadding="5" cellSpacing="0">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Department</th>
                </tr>
            </thead>
            <tbody>
                {employeesData.map((employee, index) => (
                    <tr key={index}>
                        <td>{employee.name}</td>
                        <td>{employee.age}</td>
                        <td>{employee.department}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}
export default EmployeeTableFormat;