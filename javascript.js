let inputbox = document.getElementById("input-box");
let text = document.querySelector(".task-list");


// for addtask and show in ul
function addtask(){
    if(inputbox.value ==""){
        alert("please enter task");
     } else{
            const newtask =document.createElement("li")
            const tasklist =document.getElementById("tasklist")
            tasklist.appendChild(newtask)
            newtask.textContent = document.getElementById("input-box").value
            deletetask(newtask)

        }
    inputbox.value = "";
    savedata();
    }


    // for delete inputs task
     function deletetask(newtask){
         const deletebtn =document.createElement("button")
         deletebtn.textContent ="delete"
         newtask.appendChild(deletebtn)
         deletebtn.onclick = function() {
             newtask.remove()
         }
    }

    // for save data
     function savedata(){
          localStorage.setItem("data", tasklist.innerHTML);
     }

// for showdata
     function showdata(){
      tasklist.innerHTML = localStorage.getItem("data");
      }

     showdata()


// for local storedata delete
    const confirmation = document.getElementById("deletebutton");
     deletebutton.addEventListener("click", function(){
         const confirmation = confirm
         ("Are you sure you want to delet all task from local storage than click ok after refresh it");
         if(confirmation){
             localStorage.clear("ul");
         }
    });