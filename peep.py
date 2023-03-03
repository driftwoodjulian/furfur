import requests



class ip_peeper:
    def __init__(self, ip):
        self.ip= ip
        
    def peep(self):
        try:
            print(self.ip)
            url= "http://ip-api.com/json/{}".format(self.ip)
            print(">>>>>>>>requesting towards: " + url)
            # make an API REQUEST
            response = requests.get(url)
            json_data = response.json()
            print (json_data)
            print(json_data['city'])
            
            
            
            return json_data['city']
            
        except:
            print("boy you better get fixing")