let taskList = [];

function addTask() {
  let task = document.getElementById("task").value;
  let date = document.getElementById("date").value;
  let time = document.getElementById("time").value;

  if (task !== "" && date !== "" && time !== "") {
    let newTask = {
      task: task,
      date: date,
      time: time
    };

    taskList.push(newTask);
    showTask();
    document.getElementById("task").value = "";
    document.getElementById("date").value = "";
    document.getElementById("time").value = "";
  } else {
    alert("Please fill all the fields!");
  }
}

function showTask() {
  let taskTable = document.getElementById("taskList");
  taskTable.innerHTML = "";

  for (let i = 0; i < taskList.length; i++) {
    let task = taskList[i];
    let row = taskTable.insertRow(i);
    let taskCell = row.insertCell(0);
    let dateCell = row.insertCell(1);
    let timeCell = row.insertCell(2);

    taskCell.innerHTML = task.task;
    dateCell.innerHTML = task.date;
    timeCell.innerHTML = task.time;
  }
}

function showonhome(){
    let taskTable = document.getElementById("taskList");
    taskTable.innerHTML = "";
  
    for (let i = 0; i <3; i++) {
      let task = taskList[i];
      let row = taskTable.insertRow(i);
      let taskCell = row.insertCell(0);
      let dateCell = row.insertCell(1);
      let timeCell = row.insertCell(2);
  
      taskCell.innerHTML = task.task;
      dateCell.innerHTML = task.date;
      timeCell.innerHTML = task.time;
    }
  }
