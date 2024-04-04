from flask import Flask, jsonify

app = Flask(__name__)

@app.route("/data")

def home():
    data = {
        "msg": "hello lmc nova"
    }
    return jsonify(data)


if __name__ == "__main__":
    app.run(debug=True)