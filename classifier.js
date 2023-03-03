
class classifier {
  constructor( locationInput) {
    
    this.input = locationInput;
  }
  
  async classify() {
    //this function is used to sort the information rendered through the front end
    /*
    const token= 10
    let validaty= false //we want to use this in order to validata a response maybe we can use it later for something
    while (!validaty && token>1){
      token-1;
      validaty= true
      if( validaty){
        console.log("in order");
        console.log(this.input);
        console.log("trying to fetch");
        */
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


  