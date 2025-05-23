# app.py
from flask import Flask, request, jsonify
from flask_cors import CORS
from hate_classifier import analyze_text

app = Flask(__name__)
CORS(app)

@app.route('/')
def welcome():
    return jsonify({"message": "Voice of Peace AI API Ready 🕊️"})

@app.route('/analyze', methods=['POST'])
def analyze():
    data = request.get_json()
    text = data.get('text', '')
    if not text:
        return jsonify({"error": "Text is required."}), 400

    analysis = analyze_text(text)
    return jsonify(analysis), 200

if __name__ == "__main__":
    app.run(debug=True)
from db import reports_collection
from bson import ObjectId

@app.route('/report', methods=['POST'])
def submit_report():
    data = request.get_json()
    report = {
        "text": data['text'],
        "analysis": data['analysis'],
        "status": "Pending"
    }
    result = reports_collection.insert_one(report)
    return jsonify({"message": "Report submitted", "id": str(result.inserted_id)})

@app.route('/reports', methods=['GET'])
def get_reports():
    reports = []
    for report in reports_collection.find():
        report['_id'] = str(report['_id'])
        reports.append(report)
    return jsonify(reports)

@app.route('/reports/<id>', methods=['PATCH'])
def update_report(id):
    data = request.get_json()
    result = reports_collection.update_one(
        {"_id": ObjectId(id)},
        {"$set": {"status": data['status']}}
    )
    return jsonify({"updated": result.modified_count})
