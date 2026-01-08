// LOGIN
function login() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  // username & password yang BENAR
  const correctUsername = "Anomali";
  const correctPassword = "12345";

  if (username === "" || password === "") {
    alert("Username dan password harus diisi!");
    return;
  }

  if (username === correctUsername && password === correctPassword) {
    document.getElementById("loginBox").classList.add("hidden");
    document.getElementById("todoBox").classList.remove("hidden");

    document.getElementById("welcome").innerText =
      "Halo, " + username + " 👋";
  } else {
    alert("Username atau password salah!");
  }
}

// LOGOUT
function logout() {
  document.getElementById("loginBox").classList.remove("hidden");
  document.getElementById("todoBox").classList.add("hidden");

  document.getElementById("username").value = "";
  document.getElementById("password").value = "";
}

// TAMBAH TUGAS
function addTask() {
  const taskInput = document.getElementById("taskInput");
  const dateInput = document.getElementById("dateInput");
  const taskList = document.getElementById("taskList");

  if (taskInput.value === "" || dateInput.value === "") {
    alert("Isi tugas dan deadline dulu!");
    return;
  }

  const li = document.createElement("li");

  li.innerHTML = `
    <div>
      <span>${taskInput.value}</span>
      <small>Deadline: ${dateInput.value}</small>
    </div>
    <div>
      <button onclick="finishTask(this)">✔</button>
      <button onclick="deleteTask(this)">✖</button>
    </div>
  `;

  taskList.appendChild(li);

  taskInput.value = "";
  dateInput.value = "";
}

// SELESAI
function finishTask(btn) {
  btn.parentElement.parentElement.classList.toggle("done");
}

// HAPUS
function deleteTask(btn) {
  btn
}