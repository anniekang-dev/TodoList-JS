// input box
const btn = document.getElementById('btn');
let inputBox = document.getElementById('inputBox');
let result = document.getElementById('result');

function addTask() {
  if(inputBox.value === ''){
    alert('Please enter a task');
  }   
  else {
    let li = document.createElement('li');
    li.innerHTML = '<input type="checkbox" id=checkbox> ';
    li.innerHTML += inputBox.value;
    result.appendChild(li);
    inputBox.value ='';
    
    li.addEventListener('click', (e) => {
      if(e.target.checked === true){
        li.style.textDecoration = "line-through";
        li.style.color = "grey";
      }
      else{
        li.style.textDecoration = "none";
        li.style.color = "black";
      }
    })
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
