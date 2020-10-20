from flask import Flask
import time

app = Flask(__name__)

@app.route("/ping")
def raiz():
	return "Ping"

@app.route("/proxy")
def proxy():
	time.sleep(5)
	return "Proxy"

@app.route("/intensive")
def intensive():
	variable=0
	timeout = time.time() + 5
	while time.time() < timeout:
		variable = variable+1
	return "Intensive"

if __name__ == "__main__":
	app.run()
