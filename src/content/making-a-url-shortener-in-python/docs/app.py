from flask import Flask, render_template, request, redirect
from flask.wrappers import Response
from business_logic import create_short_link, get_long_link

app = Flask(__name__)

@app.route('/')
def index():
	return render_template("index.html")

@app.route('/create', methods=['POST'])
def create():
    server_url = request.host_url
    long_link = request.form['link']
    short_link = create_short_link(server_url, long_link)
    return render_template("result.html", short_link=short_link)

@app.route('/ss/<string:alias>')
def find_and_redirect(alias):
     return redirect(get_long_link(alias), code=301)
