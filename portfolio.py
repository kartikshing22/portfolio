from flask import Flask,request,jsonify,render_template
app = Flask(__name__)

@app.route('/')
def index():
   return render_template("index.html")

@app.route('/slider')
def slider():
   return render_template("sliders.html")


@app.route('/projects')
def projects():
   return render_template("projects.html")


@app.route("/new/<int:num>",methods=["GET"])
def get(num):
    sqr=[num**2]
    return jsonify({"num":sqr})


if __name__ == '__main__':
   app.run(debug=True)