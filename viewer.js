
//we declare a global variable, later on in the code we are going to use this late on to state a condition
// for an "if" statement
const selectedRow= null;//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!







//alerts
//  this function literally just shows you an alert if you dindt read the name itll be later called on
//   you must give it a messege and a class that will determine the type of alert with bootstrap saving on cod
function showAlert(message, className){
      const div = document.createElement("div");
      // we make a div
      div.className = `alert alert-${className}`;
      // we declare a class therefore creating a bootstrap alert classname being: success
      div.appendChild(document.createTextNode(message));
      const container = document.querySelector(".container");
      const main = document.querySelector(".main");
      container.insertBefore(div, main);

      setTimeout(()=>document.querySelector(".alert").remove(), 4000);
}


//This one is literally called "delete data", I wonder what it does.
// in the addEventListener method we add an event listener to the querySelector
//  the callback to that event listener is declaring  a variable which equals the target of suc an event








//delete code
document.querySelector("#climate-list").addEventListener("click", (e)=>{
      target= e.target;
      if(target.classList.contains("delete")){
            target.parentElement.parentElement.remove();
            showAlert("Client Data Deleted", "danger");
      }
});









//clear all fields after data entery
function clearFields(){
      document.querySelector("#city").value ="";
      
}



//add data
document.querySelector("#weather-form").addEventListener("submit", (e)=>{4
      e.preventDefault();
      showAlert("Sometiendo informacion", "warning");

      // get info from form and we store it within a variable
      const city = document.querySelector("#city").value;
      console.log(city +" 1");

      //  we have to make sure the info baing submited is not a blank space
      if (city == ""){//VVVVVVVVVVVVVV   if wrong
            showAlert("Llena los datos requeridos en el formulario", "danger");
      }
      //   this else tells you what to do if the data is in the form correctly
      else{//VVVVVVVVVVVVVVVVVVVV         if right
            if(selectedRow == null){

                  // now that we have some input we can use an object to start processing it
                  let retrieving = new retriever(city)

                  thing= retrieving.retrieve()//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

                  //!!!!!!!!!!!!!!!!!!!!!!!!!! javascript being asyncronous we can allow ourselves to continue with our code while this "if" is still being executed
            }
            else{
                  selectedRow.children[1].textContent = city;
                  selectedRow.children[2].textContent = "filler";
                  selectedRow.children[3].textContent = "filler";
                  selectedRow.children[4].textContent = "filler";
                  selectedRow.children[5].textContent = "filler";
                  selectedRow.children[6].textContent = "filler";
                  selectedRow = "";

                  showAlert("No se hallo clima pero n", "success");
            }
            clearFields();
            // this function simply resets the form while the "if" is being executed or even earlier
      }
});














