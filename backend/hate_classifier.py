# hate_classifier.py
from transformers import pipeline

# Load a pre-trained pipeline (we can later fine-tune for Kinyarwanda too)
classifier = pipeline("text-classification", model="Hate-speech-CNERG/dehatebert-mono-english")

def analyze_text(text):
    result = classifier(text)[0]
    label = result['label']
    score = result['score']
    
    severity = "Low"
    if score > 0.9:
        severity = "High"
    elif score > 0.75:
        severity = "Medium"

    return {
        "label": label,
        "confidence": round(score, 3),
        "severity": severity
    }
