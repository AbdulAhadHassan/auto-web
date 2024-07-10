

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
