class fetcher {
    constructor( locationInput, userIp) {
      
      this.input = locationInput;
      this.ip= userIp
      
    }
    
  
    async fetchByCity(){//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
          
          let thing= await fetch("http://127.0.0.1:3000/v1/city", {
              method: 'POST',
              headers:{
                          'Content-Type': 'application/json'
                          },
              body: JSON.stringify({
                                          city: `${this.input}`,
                                          ip: `${this.ip}`
                                          }),
          })
              .then(response => response.json())
              //this parses the data from the response in the python backend
              .then(data => {
                console.log(data.today + "<<<<<<<<");
                let thing= [data.cityip, data.today, data.day2, data.day3, data.day4, data.day5]
                console.log(thing)
                return thing
              })
              // this here lets the data
              //.then(console.log(data));
              .catch(error => {
                console.error('There was a problem with the fetch operation:', error);
              })
          console.log(thing + "<<<<<<<<<this came from inside the fetch")
          return thing
  
  
      }
  
  
  }