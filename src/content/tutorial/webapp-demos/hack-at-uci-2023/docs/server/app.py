from flask import Flask, jsonify, request
from main import get_restaurant_data
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/')
def index():
    location = request.args.get('location')
    return jsonify(get_restaurant_data(location))


