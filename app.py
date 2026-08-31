from flask import Flask, render_template

# This creates our web application.
# Flask uses this "app" object for everything from here on.
app = Flask(__name__)


# This is a "route". It tells Flask:
# "When someone visits the homepage ('/'), run this function."
@app.route("/")
def home():
    # render_template looks inside the 'templates' folder
    # and sends that HTML file back to the browser.
    return render_template("index.html")


# This only runs if you start the file directly with `python app.py`
if __name__ == "__main__":
    # debug=True auto-reloads the page when you save a file, and
    # shows helpful error messages in the browser while you're learning.
    app.run(debug=True)