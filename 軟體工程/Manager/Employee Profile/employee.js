var newNum = 2;
function newEmployee() {
  const employee = document.querySelector('.employee');
  const link = document.createElement('A');
  link.textContent = `員工${newNum}`;
  link.setAttribute('id', newNum);
  link.setAttribute('href', `/Users/missy/大二上/軟體工程/軟體工程/Manager/Employee Profile/employee${newNum}.html`);
  employee.appendChild(link);
  newNum++;
}

function modifyEmployee() {
  /*const employee = document.querySelector('.employee');
  const employees = employee.getElementsByTagName("a");
  console.log(employees);
  employee.removeChild(employees[0]);*/
  var adjust = document.getElementById("adjust");
  var down = document.getElementById("down");
  var cancel = document.getElementById("cancel");
  var sure = document.getElementById("confirm");
  adjust.style.display = 'block';
  down.style.display = 'block';

  var adjustDiv = document.querySelector('[name = "adjust"]');
  var buttonConfirm = document.querySelector('[name = "confirm"]');
  var adjustName = adjustDiv.querySelector('[name = "name"]');
  var adjustId = adjustDiv.querySelector('[name = "id"]');
  var adjustIdentity = adjustDiv.querySelector('[name = "identity"]');
  var adjustState = adjustDiv.querySelector('select');
  const stateArray = ['忙碌', '空閒'];
  buttonConfirm.addEventListener("click", function () {
    let name = adjustName.value;
    let id = adjustId.value;
    let identity = adjustIdentity.value;
    let state = adjustState.value;
    document.getElementById('name').innerHTML = name;
    document.getElementById('id').innerHTML = id;
    document.getElementById('identity').innerHTML = identity;
    document.getElementById('state').innerHTML = stateArray[state];
  });

  cancel.onclick = function () {
    adjust.style.display = 'none';
    down.style.display = 'none';
  }

  sure.onclick = function () {
    adjust.style.display = 'none';
    down.style.display = 'none';
  }

  down.onclick = function () {
    adjust.style.display = 'none';
    down.style.display = 'none';
  }
}

