function EmployeeListFormat(props) {
    const { employeesData } = props;
    return (
        <ul>
            {employeesData.map((employee, index) => (
                <li key={index}>
                    {employee.name} - {employee.age} - {employee.department}
                </li>
            ))}
        </ul>
    );
}
export default EmployeeListFormat;