var getFull = function(employee) {
    return employee.firstName
    + " " + employee.lastName;
}
d3.select("body")
.selectAll("h2")
.data(employees)
.enter()
.append("h2")
.text(getFull)