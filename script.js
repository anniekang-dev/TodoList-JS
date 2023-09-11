// input box
const btn = document.getElementById('btn');
let inputBox = document.getElementById('input-box');
let result = document.getElementById('result');
let cb = document.getElementById('check-box');

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
    inputBox.value = '';
  }
}

// clear button
function clearAll(){
      inputBox.value = '';
      result.innerHTML = '';
  }

// keypress event
const init = () => {
    inputBox.addEventListener('keypress', (e) =>{
        if( e.key === 'Enter' ){
            addTask(e.target.value); inputBox.value ='';
        }
    })
}

init()
