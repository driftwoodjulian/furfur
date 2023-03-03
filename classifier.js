
class classifier {
  constructor( locationInput) {
    
    this.input = locationInput;
  }
  
  async classify() {
   
        try{

          //here we ara going to try and get the ip before we fetch the weather

          let ip=  await fetch("https://api.ipify.org")
                    .then(response => response.text())
                    .then(data => {
                    console.log(data+ ' <<<<<this is from the fetch');
                    return data;
                    })

          let mailer = new fetcher(this.input, ip)
          let respond= await mailer.fetchByCity(/* might need something here */)// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
          console.log("we have a call back")

          console.log(respond + "<<<<<<<<this is after the fetchreturned");
          //<<<<<<<<<<<<<<<<<<<<<<<here we shall return resp
          return respond
        }
        catch{
          console.log("there was an error trying to fetch");
        }
      }
      
    }

  //}
//}





/*
async function caller(){

  let place = new classifier("Buenos Aires");

  let rite= await place.classify();

  console.log(rite);

}

caller()

*/


  
