import React, { useState } from "react";
import './todo.css';

function TodoPage() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const addTask = () => {
    if (newTask.trim()) {
      setTasks([...tasks, { description: newTask, completed: false }]);
      setNewTask("");
    }
  };

  const toggleCompletion = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <div className="todo-page">
      <h2>To Do</h2>
      <p>Write your to-do's here</p>
      <div className="todo-input">
        <input
          type="text"
          placeholder="Enter a new task..."
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button onClick={addTask}>Add Task</button>
      </div>
      <ul className="todo-list">
        {tasks.map((task, index) => (
          <li key={index} className={`todo-item ${task.completed ? "completed" : ""}`}>
            <span onClick={() => toggleCompletion(index)}>{task.description}</span>
            <button onClick={() => deleteTask(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoPage;

/***
 * const ITEMS_CONTAINER = document.getElementById("items");
const ITEM_TEMPLATE = document.getElementById("itemTemplate");
const ADD_BUTTON = document.getElementById("add");

let items = getItems();

function getItems() {
    const value = localStorage.getItem("todo-test") || "[]";

    return JSON.parse(value);
}

function setItems(items) {
    const itemsJson = JSON.stringify(items);

    localStorage.setItem("todo-test", itemsJson); 
}

function addItem() {
    items.unshift({
        description: "",
        completed: false
    }); 

    setItems(items); 
    refreshList(); 
}

function updateItem(item, key, value) {
    item[key] = value; 

    setItems(items); 
    refreshList(); 

}

function refreshList() {
    // TODO sort Items

    items.sort((a, b) => {
        if (a.completed) {
            return 1
        }

        if (b.completed){
            return -1; 
        }

        return a.description < b.description ? -1 : 1;
    }); 

    ITEMS_CONTAINER.innerHTML = ""; 

    // CLONING

    for (const item of items) { 
        const itemElement = ITEM_TEMPLATE.content.cloneNode(true);
        const descriptionInput = itemElement.querySelector(".item-description");
        const completedInput = itemElement.querySelector(".item-completed");

        descriptionInput.value = item.description;
        completedInput.checked = item.completed;

        descriptionInput.addEventListener("change", () => {
            updateItem(item, "description", descriptionInput.value); 

        });

        completedInput.addEventListener("change", () => {
            updateItem(item, "completed", completedInput.checked); 

        });

        ITEMS_CONTAINER.append(itemElement);
    }
}

ADD_BUTTON.addEventListener("click", () => {
    addItem(); 
});

refreshList(); 
 * 
 * 
 * 
 * 
 * 
 */
