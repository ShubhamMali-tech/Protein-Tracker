from flask import Flask, render_template

app = Flask(__name__)


@app.route("/")
def home():
    return render_template("index.html")

@app.route("/setup")
def setup():
    return render_template("setup.html")
@app.route("/how-it-works")
def how_it_works():
    return "How It Works page coming soon"


@app.route("/features")
def features():
    return "Features page coming soon"


@app.route("/progress")
def progress():
    return "Progress page coming soon"


@app.route("/login")
def login():
    return "Login page coming soon"

if __name__ == "__main__":
    app.run(debug=True)
    