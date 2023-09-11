const btn = document.getElementById('btn');
let inputBox = document.getElementById('input-box');
let result = document.getElementById('result');

function addTask() {
  if(inputBox.value === ''){
    alert('Please enter a task');
  }   
  else {
    let li = document.createElement('li');
    let del = document.createElement('button');
    li.innerHTML = inputBox.value;
    result.appendChild(li);
    li.appendChild(del);
    del.innerText = 'X';
    del.addEventListener('click', function(){
      li.remove();
    });
  }
}

function done() {
  addTask.value = '';
  addTask.focus();
  li.addEventListener('click',
  function(){
    li.style.textDecoration = 'line-through'
    li.style.color = 'grey';
  })
}

const allClearBtn = document.getElementById('clear-btn');

function clearAll() {
  if(confirm('Are you sure you want to clear all tasks?')){
    if(inputBox.value === ''){
      alert('There are no tasks to clear');
    }
    else{
      inputBox.value = '';
      result.innerHTML = '';
    }
  }
}