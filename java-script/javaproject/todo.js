const UserNameTextField = document.getElementById("username");
const addUserBtn = document.getElementById("addUser");
const recordsDisplay=document.getElementById("records");


let userData = []
 let edit_id = null
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

if(edit_id !=null){
  userData.splice (edit_id,1,{
    'name': name
  })
  edit_id =null
  
} else{
  userArray.push({'name':data}) // key ... value
}
};

saveData(userData)
UserNameTextField.value=''

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

function DeleteInfo(id){
   //alert(id)
  userData.splice(id,1);
  saveData(userData);
}

function EditInfo(id){
  // alert(id)
  edit_id = id
  UserNameTextField.value = userData[id].name;
  addUserBtn.innerText = 'Update User';

}