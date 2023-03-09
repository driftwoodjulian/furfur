
class retriever {
    constructor( locationInput) {
        this.input = locationInput;
    }

    async retrieve(){

                showAlert("Se esta buscando informacion relevante", "warning")
                
                let classy= new classifier(this.input)
                let thing= await classy.classify()
                
                showAlert("Prensentando informacion persivida", "warning")
                const list = document.querySelector("#climate-list");//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<here we add the rult of the fecth
                const row = document.createElement("tr");

                row.innerHTML =`
                <td>${thing[0]}</td>
                <td>${thing[1]}</td>
                <td>${thing[2]}</td>
                <td>${thing[3]}</td>
                <td>${thing[4]}</td>
                <td>${thing[5]}</td>
                      <td>
                            
                            <a href="#" class="btn btn-warning delete">Delete</a>
                      </td>`;

                      list.appendChild(row);
                      //selectedRow= null;
                      showAlert("Se obtuvieron datos del clima, si no se hallo la ciudad que menciono se agragaran los datos de su localizacion de", "success");
    }

}


