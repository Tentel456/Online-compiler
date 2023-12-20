from flask import Flask, request, jsonify
import subprocess

app = Flask(__name__)

@app.route('/execute', methods=['POST'])
def execute():
    code = request.json['code']
    result = subprocess.run(['python', '-c', code], capture_output=True, text=True)
    return jsonify(output=result.stdout)

if __name__ == '__main__':
    app.run(debug=True)
