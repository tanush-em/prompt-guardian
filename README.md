# 🛡️ Prompt Guardian

Real-Time AI Firewall for Prompt Injection & Jailbreak Defense

![License](https://img.shields.io/badge/license-MIT-blue)
![Python](https://img.shields.io/badge/python-3.8%2B-blue)
![Streamlit](https://img.shields.io/badge/streamlit-1.30.0-red)

## 📌 About The Project

Prompt GuardX is a real-time, session-aware security layer that acts as a firewall for AI prompts. It protects AI applications from prompt injections and jailbreak attempts through intelligent monitoring, risk scoring, and automatic intervention.

### 🔥 The Problem

As LLMs like cohere become widely adopted, they are increasingly vulnerable to:
- Prompt injection attacks
- Jailbreak attempts
- Multi-turn dialogue manipulation (slowburn attacks)

Current solutions rely on static filters that can't detect context-aware attacks or evolve with user interaction.

### ✨ Key Features

- **🧠 Multi-Turn Prompt Tracking**: Analyzes the entire conversation history
- **🔍 Real-Time Risk Analysis**: Uses GPT-4 to evaluate each new prompt
- **⚖️ Dynamic Risk Scoring**: Assigns a risk score (0-100) to every prompt
- **🚨 Auto-Intervention**: Blocks or rewrites risky prompts
- **📊 Threat Logging**: Provides developer-friendly explanations
- **🔐 PII Redaction**: Protects sensitive user information

## 📽 Demo
[Click to watch the demo](https://github.com/D09EHA/promptguardX/blob/main/demo1.mp4)


## 🧰 Tech Stack

- **Frontend**: Streamlit
- **LLM Engine**: cohere
- **Backend**: Python
- **Configuration**: dotenv, JSON
- **Data Protection**: PII redaction with regex patterns

## 🔮 Future Enhancements

- Prompt rewriting mode instead of just blocking
- Custom fine-tuned models for faster analysis
- Integration with popular AI frameworks
- Real-time attack pattern learning
- Dashboard for security metrics
