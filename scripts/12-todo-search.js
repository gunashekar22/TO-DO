// import Todo from "../hello";
const Todo =JSON.parse(localStorage.getItem('data')) || []


let submit = document.querySelector(".search-class");
let dateInput = document.querySelector(".search-date"); 


submit.addEventListener("click", () => {
  
  const selectedDate = dateInput.value; 

  
  if (selectedDate) {
    SearchList(selectedDate);
    console.log("Selected date:", selectedDate); // Log the selected date
  } else {
    console.log("No date selected."); // Log a message if no date is selected
  }

});
function SearchList(date){
  let r=Todo.filter((item)=>item.date===date);
  // console.log(r);
  displayTodo(r);
  // let todoHTML = '';
  //   Todo.forEach((todoObject,i) =>
  // {
  //     // const todoObject = Todo[i];
  //       todoHTML += `
  //         <div>${todoObject.name}</div>
  //         <div>${todoObject.date}</div>
  //         <button class="done" onclick="deleteTodoItem(${i})" >Done</button>
  //       `;
  // });
  // document.querySelector(".matched-elements").innerHTML=todoHTML;
  
}
function deleteTodoItem(index) {
  Todo.splice(index, 1);
  localStorage.setItem('data', JSON.stringify(Todo));
  document.querySelector(".matched-elements").innerHTML='';
  dateInput.value=""

  // displayTodo();
}
function displayTodo(r) {
  let todoHTML = '';
  r.forEach((todoObject,i) =>
{
    // const todoObject = Todo[i];
      todoHTML += `
        <div>${todoObject.name}</div>
        <div>${todoObject.date}</div>
        <button class="delete" onclick="deleteTodoItem(${i})">Done</button>
      `;
});

  document.querySelector('.matched-elements').innerHTML = todoHTML;
}
