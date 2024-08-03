from flask import render_template
from app import app
from app.helper import get_message

@app.route('/')
def home():
    message = get_message()
    return message