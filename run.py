from flask import Flask, render_template, request, jsonify

app = Flask(__name__)

@app.route("/")
def home_page():
        return render_template("main.html")

@app.route("/feature")
def display():
        a = request.args.get('t', 0, type = int)
        return jsonify(result = a)

if __name__ == "__main__":
        app.debug = True
        app.run( host = "0.0.0.0", port = 5000 )
