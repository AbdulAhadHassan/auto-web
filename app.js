

function signup() {

  var nameSignUp = document.getElementById("name-signup")
  var usernameSignUp = document.getElementById("username-signup")
  var emailSignUp = document.getElementById("email-signup")
  var passwordSignUp = document.getElementById("password-signup")
  var comfirmPasswordSignUp = document.getElementById("comfirm-signup")
  var passwordError = document.getElementById("password-error")
  var comfirmPasswordError = document.getElementById("confirm-password-error")
  var emailError = document.getElementById("email-error")
  var users = localStorage.getItem("users")

  if (users) {
    users = JSON.parse(users)
  } else {

    var users = []
  }

  let passwordErrorMatch = false
  if (emailSignUp.value != "") {
    emailError.style.display = "none"
    if (passwordSignUp.value.length >= 8) {
      if (passwordSignUp.value === comfirmPasswordSignUp.value) {
        passwordErrorMatch = true
        comfirmPasswordError.style.display = "none"

      }
      else {
        comfirmPasswordError.style.display = "block"
      }
      passwordError.style.display = "none"
    } else {
      passwordError.style.display = "block"
      // passwordError.innerHTML = `<p class="display-none">*Password should be more then 7 characters</p>`
      
    }
  }else{
    
    emailError.style.display = "block"

  }
  console.log(passwordError.innerHTML)


  console.log(users)
  if (passwordErrorMatch) {

    var obj = {
      name: nameSignUp.value,
      username: usernameSignUp.value,
      email: emailSignUp.value,
      password: passwordSignUp.value,
      comfirmPassword: comfirmPasswordSignUp.value,
    }

    users.push(obj)

    localStorage.setItem("users", JSON.stringify(users))

    nameSignUp.value = ""
    usernameSignUp.value = ""
    emailSignUp.value = ""
    passwordSignUp.value = ""
    comfirmPasswordSignUp.value = ""

  }

}



function login() {

  var emailLogin = document.getElementById("email-login")
  var passwordLogin = document.getElementById("password-login")
  var users = localStorage.getItem("users")

  if (users) {
    users = JSON.parse(users)
  } else {

    var users = []
  }

  valid = false

  for (i = 0; i < users.length; i++) {
    if (emailLogin.value == users[i].email && passwordLogin.value == users[i].password) {
      console.log("valid")
      window.location.href = 'todo.html'
      valid = true
    }

  }
  if (!valid) {
    alert("Password or email is invalid")
  }
}














// var todoList = [];

// function addTask() {
//   var taskInput = document.getElementById("taskInput");
//   var newTask = taskInput.value.trim();

//   if (newTask) {
//     todoList.push({
//       description: newTask,
//       completed: false,
//     });
//     taskInput.value = "";
//     renderList();
//   }
// }

// function renderList() {
//   var listContainer = document.getElementById("todoList");
//   listContainer.innerHTML = "";

//   todoList.forEach((task, index) => {
//     var listItem = document.createElement("li");
//     listItem.innerHTML = `
//       <input type="checkbox" id="task-${index}" ${
//         task.completed ? "checked" : ""
//       } onclick="toggleTaskCompletion(${index})">
//       <label for="task-${index}">${task.description}</label>
//     `;
//     listContainer.appendChild(listItem);
//   });
// }

// function toggleTaskCompletion(index) {
//   todoList[index].completed = !todoList[index].completed;
//   renderList();
// }

// document.getElementById("addButton").addEventListener("click", addTask);

// renderList();



let todoList = document.getElementById("todo-list")
let userImp = document.getElementById("user-imp")

function addTodo(event){
  if(userImp.value == ""){
    
  }else{
    todoList.innerHTML += `<li class="col-12 py-4 d-flex"  draggable="true"> 
    <input type="text" class="col-8  py-2" value="${userImp.value}" disabled>
    <button   type="button" class="btn btn-secondary col-2" onclick='deleteTodo(event)'><i class="fa-solid fa-trash" style="color: #ffffff;"></i></button>
    <button   type="button" class="btn btn-secondary col-2" onclick='editTodo(event)'><i class="fa-solid fa-pen-to-square" style="color: #ffffff;"></i></button>
    </li>`
    userImp.value = ""

  }
}

// function enter(event) {
//   if(event.)
// }

function deleteTodo(event){
  event.target.parentNode.remove()
}



function editTodo(event){
  if( event.target.parentNode.childNodes[1].disabled == true){
  event.target.parentNode.childNodes[1].disabled = false
  console.log(true)
  }else{
    event.target.parentNode.childNodes[1].disabled = true
  }
}




let todoList1 = document.getElementById("todo-list1")
let userImp1 = document.getElementById("user-imp1")

function addTodo1(event){
  if(userImp1.value == ""){
    
  }else{
    todoList1.innerHTML += `<li class="col-12 py-4 d-flex"  draggable="true"> 
    <input type="text" class="col-8  py-2" value="${userImp1.value}" disabled>
    <button   type="button" class="btn btn-secondary col-2" onclick='deleteTodo(event)'><i class="fa-solid fa-trash" style="color: #ffffff;"></i></button>
    <button   type="button" class="btn btn-secondary col-2" onclick='editTodo(event)'><i class="fa-solid fa-pen-to-square" style="color: #ffffff;"></i></button>
    </li>`
    userImp1.value = ""

  }
}

// function enter(event) {
//   if(event.)
// }

function deleteTodo1(event){
  event.target.parentNode.remove()
}


function editTodo1(event){
  if( event.target.parentNode.childNodes[1].disabled == true){
  event.target.parentNode.childNodes[1].disabled = false
  console.log(true)
  }else{
    event.target.parentNode.childNodes[1].disabled = true
  }
}


let todoList2 = document.getElementById("todo-list2")
let userImp2 = document.getElementById("user-imp2")

function addTodo2(event){
  if(userImp2.value == ""){
    
  }else{
    todoList2.innerHTML += `<li class="col-12 py-4 d-flex"  draggable="true"> 
    <input type="text" class="col-8  py-2" value="${userImp2.value}" disabled>
    <button   type="button" class="btn btn-secondary col-2" onclick='deleteTodo(event)'><i class="fa-solid fa-trash" style="color: #ffffff;"></i></button>
    <button   type="button" class="btn btn-secondary col-2" onclick='editTodo(event)'><i class="fa-solid fa-pen-to-square" style="color: #ffffff;"></i></button>
    </li>`
    userImp2.value = ""

  }
}

// function enter(event) {
//   if(event.)
// }

function deleteTodo2(event){
  event.target.parentNode.remove()
}


function editTodo2(event){
  if( event.target.parentNode.childNodes[1].disabled == true){
  event.target.parentNode.childNodes[1].disabled = false
  console.log(true)
  }else{
    event.target.parentNode.childNodes[1].disabled = true
  }
}