import os
import requests
import os.path
import json
from datetime import datetime
from flask import Flask, render_template, request
from flask_cors import CORS
import tempfile
from dotenv import load_dotenv

app = Flask(__name__)

CORS(app, origins=["http://localhost:3000"])

@app.route('/')
def home():
    return 'Hello, this is the home page!'

@app.route('/Lipsync', methods=['POST'])
def lipsync():
    if 'face' not in request.files:
        return 'No file part', 400
    file = request.files['face']

    if file.filename == '':
        return 'No selected file', 400

    temp_file = tempfile.NamedTemporaryFile(suffix='.' + file.filename.split('.')[-1], delete=False)
    file.save(temp_file.name)
    #open('dictator_orig.mp4', 'rb')
    files = [
        ("input_face", temp_file),
        ("input_audio", open('GOBLIN.MP3', 'rb'))
    ]
    payload = {}

    response = requests.post(
        "https://api.gooey.ai/v2/Lipsync/form/",
        headers={
            "Authorization": "Bearer " + os.environ["GOOEY_API_KEY"],
        },
        files=files,
        data={"json": json.dumps(payload)},
    )
    assert response.ok, response.content
    temp_file.close()
    result = response.json()
    print(response.status_code, result)
    return result

if __name__ == '__main__':
    app.run(debug=True)

