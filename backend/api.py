import os
import requests
import os.path
import cv2
import json
import imageio
from datetime import datetime
import glob
from flask import Flask, render_template, request
from io import BytesIO
import mimetypes
import tempfile

app = Flask(__name__)

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

    temp_file = tempfile.NamedTemporaryFile(suffix='.mp4', delete=False)
    file.save(temp_file.name)
    #open('dictator_orig.mp4', 'rb')
    files = [
        ("input_face", temp_file),
        ("input_audio", open('10 seconds Most Funny Video Ever.wav', 'rb'))
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
    output = result.get("output")
    if output:
        output = output.get("output_video")
    return {'url':output }

if __name__ == '__main__':
    app.run(debug=True)

