let todoList=[
    {
        item:'Buy Milk',
        dueDate:'22/08/2024',
    },
    {
        item:'Buy Milk',
        dueDate:'22/08/2024',
    }
];
displayItems();
function addTodo(){
   let inputElement = document.querySelector("#todo-input");
   let dateElement=document.querySelector("#todo-date");
   let todoItem= inputElement.value;
   let todoDate=dateElement.value;
   todoList.push(
    {
        item:todoItem,
        dueDate:todoDate,
    }
  );
   inputElement.value="";
   dateElement.value="";
   displayItems();
}

function displayItems(){
    let containerElement = document.querySelector(".todo-container");
    let newHtml="";
    for(let i=0;i<todoList.length;i++){
        newHtml+= `
       
         <span>${todoList[i].item}</span>
         <span>${todoList[i].dueDate}</span>
         <button class="btn-delete" onclick="todoList.splice(${i},1); displayItems();"> Delete
         </button>
       

        `
    }
    containerElement.innerHTML=newHtml;
    
 
}