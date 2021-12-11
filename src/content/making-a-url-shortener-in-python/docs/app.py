from flask import Flask

app = Flask(__name__)

all_link_mappings = {
    # An example of a mapping would look like this:
    # "d3g2s" : "https://learn.ryqn.dev/starting-out-with-flask#installation-and-setup"
    # So https://ourdomain.link/d3g2s -> https://learn.ryqn.dev/starting-out-with-flask#installation-and-setup
}

@app.route('/')
def index():
	return "Hello World!"

@app.route('/create')
def createLink():
    pass