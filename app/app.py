from flask import Flask, render_template
import os

app = Flask(__name__, template_folder='frontend/template', static_folder='frontend/static')

@app.route('/')
def home():
  return render_template('index.html')

@app.route('/NotFound')
def NotFound():
  return render_template('p81s5_St5.html')

if __name__ == '__main__':
  app.run(debug=False)