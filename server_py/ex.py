from flask import Flask, render_template, jsonify, request
import requests
import json
from api.data import getData as hue

app = Flask(__name__)

# main index
@app.route('/')
def index():
    return 'Index Page'

# learning how to call an api from external endpoint
@app.route('/dois')
def index2():
    response = requests.get('https://jsonplaceholder.typicode.com/albums')
    response_as_json = response.json()
    return jsonify(response_as_json)

# server side rendering
@app.route('/test')
def hello(name=None):
    return render_template('index.html', name=name)

# external module import
@app.route('/getdata')
def getting():
    return hue()

# to run the project
if __name__ == '__main__':
    app.run()