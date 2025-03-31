# AI-Powered Interviewer - Automated Candidate Screening and Questioning System

[![Project Status](https://img.shields.io/badge/status-prototype-yellow.svg)]  [![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE) [![Python](https://img.shields.io/badge/python-3.x-blue.svg)] [![GitHub Stars](https://img.shields.io/github/stars/RamharshDandekar/AI_Interview_Prototype?style=social)]
<!-- Replace YOUR_GITHUB_USERNAME and YOUR_REPO_NAME in the Stars badge above -->

<!-- Optional: Add a Demo badge if you have a live demo -->
<!-- [![Demo](https://img.shields.io/badge/demo-online-brightgreen.svg)](LINK_TO_YOUR_DEMO) -->

## Overview

This project showcases the development of an **AI-Powered Interviewer**, an automated system designed to conduct initial candidate screenings and interviews based on resume analysis. It addresses the challenge of efficient and unbiased candidate evaluation in high-volume recruitment processes.  The system leverages **Natural Language Processing (NLP)** techniques, specifically the **Google Gemini API**, to analyze resumes, identify key skills and experience, and generate relevant interview questions.  Furthermore, it utilizes **Eleven Labs AI** for realistic voice output, creating a more engaging and professional interview experience for candidates.

**This project is highly relevant for AI interviews as it demonstrates skills in:**

* **Resume Analysis and Candidate Profiling:**  Utilizing NLP to extract information and understand candidate backgrounds from resumes.
* **Automated Question Generation:**  Leveraging AI to create relevant and targeted interview questions based on resume content.
* **Conversational AI for Interviews:** Implementing a voice-based interview flow, mimicking human interaction.
* **API Integration for HR Tech:** Demonstrating the practical application of AI APIs in the Human Resources (HR) domain.
* **End-to-End AI Application Development:**  From resume input to AI analysis, question generation, and voice-based interview delivery.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Technical Details](#technical-details)
    - [Resume Analysis & Candidate Profiling](#resume-analysis--candidate-profiling)
    - [Automated Question Generation with Gemini](#automated-question-generation-with-gemini)
    - [Voice-Based Interview Delivery](#voice-based-interview-delivery)
    - [API Integration - Design Choices & Justification](#api-integration---design-choices--justification)
- [Installation](#installation)
- [API Key Setup](#api-key-setup)
- [Usage](#usage)
- [Results and Demo](#results-and-demo)
- [Future Work - Enhancing Interviewer Capabilities](#future-work---enhancing-interviewer-capabilities)
- [Tech Stack - Demonstrating Relevant Skills](#tech-stack---demonstrating-relevant-skills)
- [Contact](#contact)
- [License](#license)

## Features

* **Automated Resume Analysis:**  Parses and analyzes candidate resumes to extract key skills, experience, and qualifications.
* **AI-Driven Question Generation:**  Dynamically generates interview questions tailored to each candidate's resume profile using Google Gemini API.
* **Voice-Based Interview Delivery (Eleven Labs AI):**  Conducts interviews using realistic voice output, creating a professional and engaging candidate experience.
* **Customizable Interview Templates:**  Allows for defining interview templates for different roles or skill sets, ensuring targeted questioning.
* **Candidate Performance Tracking (Conceptual):**  [If implemented even conceptually, describe it briefly. Otherwise, remove or adjust]  *Optionally, the system could track candidate responses and provide a preliminary evaluation score (in a future iteration).*

## Technical Details

### Resume Analysis & Candidate Profiling

* **Resume Input:**  The system accepts resumes in [Specify format, e.g., PDF, DOCX, Text] format.
* **Resume Parsing:**  [Describe resume parsing method - e.g.,  "Employs [Library/Technique, e.g., PyMuPDF, OCR and custom NLP parsing] to extract text content from resumes."].
* **Information Extraction:**  [Explain how key information is extracted - e.g., "Utilizes regular expressions and NLP techniques to identify sections like 'Skills,' 'Experience,' 'Education,' and extract relevant keywords and phrases."].
* **Candidate Profile Creation:** [Describe how a candidate profile is built - e.g.,  "Creates a structured candidate profile containing extracted skills, experience highlights, education details, and other relevant information for question generation."].

### Automated Question Generation with Gemini

* **Prompt Engineering for Question Generation:** [Explain how prompts are designed for Gemini - e.g.,  "Crafted prompts for the Google Gemini API to generate interview questions based on the extracted candidate profile. Prompts include the job description (if provided), candidate skills, and experience."].
* **Question Types:** [Mention question types generated - e.g., "Generates a mix of behavioral, technical, and experience-based interview questions to comprehensively assess candidates."].
* **Question Customization (Template-Based):** [Explain if templates are used - e.g., "Interview templates allow for specifying categories of questions (e.g., 'Technical Skills,' 'Problem Solving') and guiding Gemini to generate questions within these categories."].

### Voice-Based Interview Delivery

* **Question Delivery:** [Describe how questions are delivered - e.g., "Generated questions are converted to speech using Eleven Labs AI and delivered to the candidate sequentially during the interview flow."].
* **Candidate Response Handling (Conceptual):** [If you have a conceptual idea for response handling, describe it. Otherwise, focus on question delivery] *Future iterations could include voice input from the candidate and NLP analysis of responses.*
* **Interview Flow Control:** [Describe how the interview progresses - e.g.,  "The interview flow is controlled programmatically, moving from one question to the next after a set duration or simulated candidate response time."].

### API Integration - Design Choices & Justification

* **Google Gemini API:**
    * **Choice Justification for Interviewer Project:** Gemini API is ideal for question generation due to its advanced language understanding and generation capabilities.  Its ability to understand context and generate creative, relevant questions makes it well-suited for creating dynamic interview scenarios.
    * **Purpose:**  Gemini is the core NLP engine for intelligent question generation, tailoring questions to individual candidate resumes.
    * **Specific Features Used:**  The `gemini-pro` model is utilized for its strong performance in creative text generation and its ability to follow complex prompts, crucial for nuanced question creation.
    * **API Call Design:** API calls are structured to provide Gemini with the candidate profile and interview template (if used), instructing it to generate specific types of interview questions.

* **Eleven Labs AI:**
    * **Choice Justification for Interviewer Project:**  Eleven Labs AI provides a professional and engaging voice for the AI interviewer, enhancing the candidate experience and creating a more realistic interview setting.
    * **Purpose:** Eleven Labs AI delivers spoken interview questions to the candidate in a clear and natural voice.
    * **Specific Features Used:** The `eleven_monolingual_v1` voice model is used for its high-quality, professional-sounding English speech, suitable for an interviewer persona. Voice parameter customization allows for fine-tuning the interviewer's voice.
    * **API Call Design:**  Generated interview questions (text) are sent to Eleven Labs API. Voice settings are configured to achieve a professional interviewer tone. The API returns audio data for playback during the interview.

* **API Key Management - Security Best Practices:** (Same as previous, keep the security emphasis)
    * **Interview Relevance:**  (Keep security justification)
    * **Implementation:** (Keep implementation details)

## Installation

**Before you begin, ensure you have Python and pip (or conda) installed on your system.** [Adjust if you are using JavaScript/Node.js backend]

1. **Clone the repository:**
   ```bash
   git clone https://github.com/YOUR_GITHUB_USERNAME/YOUR_REPO_NAME.git
   cd YOUR_REPO_NAME
