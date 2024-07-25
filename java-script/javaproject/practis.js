const UserNameTextField = document.getElementById("username");
const addUserBtn = document.getElementById("addUser");

const recordsDisplay=document.getElementById("records");

let userData = [];

// data get localstaorage
let objstr = localStorage.getItem("users"); //string
//console.log(objstr)

if (objstr != null) {
  userData = JSON.parse(objstr); //string to object
  //console.log(userData);
}
displayData()

addUserBtn.onclick = () => {
  const name = UserNameTextField.value;
  //alert(name)

  userData.push({'name': name });
  // console.log(userData)
  saveData(userData);
};
function saveData(userData) {
  //console.log(userData)
  let str = JSON.stringify(userData);
  //console.log(str)
  localStorage.setItem('users', str);

  displayData()
}

function displayData() {
  let data = "";
  userData.forEach((a, i) => {
    // console.log(i)

    data += `<tr>
   <th> ${i + 1}</th>
   <td>${a.name}</td>

<td> 

<i class="btn text-white fa fa-edit btn-info mx-2"
onclick='EditInfo(${i})'></i>


<i class="btn btn-danger text-white fa fa-trash"
onclick='DeleteInfo(${i})'></i>


</td>


  </tr>`;

    //console.log(data);
  })
  recordsDisplay.innerHTML = data;
}


