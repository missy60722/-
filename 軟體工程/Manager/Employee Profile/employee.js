
var newNum = 1;
function newEmployee(){
    const  employee = document.querySelector('.employee');
    const link = document.createElement('A');
    link.textContent = `員工${newNum}`;
    link.setAttribute('id', newNum);
    link.setAttribute('href', '/Users/missy/大二上/軟體工程/軟體工程/Manager/Employee Profile/employee.html');
    employee.appendChild(link);
    newNum++;
}

var deleteNum = newNum;
function deleteEmployee(){
    const  employee = document.querySelector('.employee');
    const employees = employee.getElementsByTagName("a");
    console.log(employees);
    employee.removeChild(employees[0]);
    
}