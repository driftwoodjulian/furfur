import requests
from flask import jsonify
from peep import ip_peeper



class howler:
    def __init__ (self, city, ip):
        self.city= city
        self.ip= ip
        try:
            #validating this is mainly to have a log of whats going on in the server
            print("validating data input")
            print(self.city)
            if len(self.city)>0:
                print("data is of a valid format")
            else:
                print("data is not valid")
            
        except:
            print("please contact Administrator 1124513304")
           
    def positive(self):
        
        apiKey= "22b8ed7e085de148453cca4cbcb8a1a5"
        url= "https://api.openweathermap.org/data/2.5/forecast?q={}&units=metric&appid={}".format(self.city, apiKey)
        print(">>>>>>>>requesting towards: " + url)
        # make an API REQUEST
        response = requests.get(url)
        json_data = response.json()
        print(json_data['cod'])
        
        #so you probably cuz you aint sleeping well you will forget but we want to get the code here
        if json_data['cod']== '200':
            thing = json_data["list"]
            #so you probably cuz you aint sleeping well you will forget but we want to get the code here
            days= [self.city, str(thing[0]['main']['temp']), str(thing[7]['main']['temp']), str(thing[15]['main']['temp']), str(thing[23]['main']['temp']), str(thing[31]['main']['temp']), str(thing[39]['main']['temp'])]
            print(days[0])
            return days
        
        else:
            thing= ip_peeper(self.ip)
            correction= thing.peep()#>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
            print(correction)
            
            
            url= "https://api.openweathermap.org/data/2.5/forecast?q={}&units=metric&appid={}".format(correction, apiKey)
            response = requests.get(url)
            correction_data = response.json()
            
            if correction_data['cod']== '200':
                corrected = correction_data["list"]
                days_c=[self.ip, str(corrected[0]['main']['temp']), str(corrected[7]['main']['temp']), str(corrected[15]['main']['temp']), str(corrected[23]['main']['temp']), str(corrected[31]['main']['temp']), str(corrected[39]['main']['temp'])]
                return days_c
            else:
                
                weather =["error", "error", "error", "error", "error", "error"]
                return weather
            

            
            
        
        
        
        
        
        
test = howler("xxx", "66.60.60.14")

result= test.positive()

print(result)

#print(result['main']['temp'])

#print(result)
#thing= (result['main']['temp'], result['main']['temp_min'],result['main']['temp_max'])


 
#print(thing)