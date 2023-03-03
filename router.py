from flask import Flask, request, jsonify
from flask_cors import CORS
from requester import howler

app = Flask(__name__)
CORS(app, origins='*')

@app.route('/v1/city', methods=['POST'])
def my_api_endpoint():
    data = request.get_json()
    #the info from the fetch is parsed as a json and stored in data
    city = data.get('city')
    ip =data.get('ip')
    
    mailer= howler(city, ip)
    result= mailer.positive()
    
    weather = {
        'cityip': '{}'.format(result[0]),
        'today': '{}'.format(result[1]),
        'day2': '{}'.format(result[2]),
        'day3': '{}'.format(result[3]),
        'day4': '{}'.format(result[4]),
        'day5': '{}'.format(result[5])
    }
    print(weather)
    return jsonify(weather)










@app.route('/v1/city', methods=['OPTIONS'])
def handle_options():
    response = jsonify()
    response.headers.add('Access-Control-Allow-Origin', '*')
    response.headers.add('Access-Control-Allow-Headers', 'Content-Type')
    response.headers.add('Access-Control-Allow-Methods', 'POST')
    return response

if __name__ == '__main__':
    app.run(port=3000)