from flask import Flask, jsonify

app = Flask(__name__)


@app.route("/")
def getNearbyBobaStores():
    return jsonify({"test": "message"})
