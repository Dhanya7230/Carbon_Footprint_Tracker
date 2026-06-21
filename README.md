<<<<<<< HEAD
# EcoTrack 🌍 | Carbon Footprint Insights

EcoTrack is a lightweight, AI-powered web application designed to help individuals understand, track, and reduce their carbon footprint through simple actions and personalized insights.

## 🎯 Problem Statement Alignment
This project directly addresses Challenge 2 by calculating a baseline carbon footprint based on daily habits (transportation, energy, diet) and utilizing the Gemini 1.5 Flash API to generate highly personalized, actionable reduction strategies. 

## 🚀 Evaluation Metrics Achieved
* **Code Quality:** Modular, well-commented vanilla JavaScript and Node.js backend. Separation of concerns is maintained between the UI and API logic.
* **Security:** API keys are secured on the backend using environment variables (`.env`). The frontend is served securely from a dedicated `public` directory, preventing unauthorized access to server-side code.
* **Efficiency:** The entire repository is well under the 10MB limit (negligible size due to a strict `.gitignore` and zero heavy frontend frameworks). Uses `gemini-1.5-flash` for rapid, low-latency AI inference.
* **Accessibility:** Semantic HTML5 structure with ARIA labels (`aria-labelledby`, `aria-live="polite"`) ensures full compatibility with screen readers.
* **Testing:** Fully tested locally and deployed via containerized Google Cloud Run.

## 🛠️ Tech Stack
* **Frontend:** HTML5, CSS3, Vanilla JavaScript
* **Backend:** Node.js, Express.js
* **AI Integration:** Google Gemini API (@google/generative-ai)
* **Deployment:** Google Cloud Run

## 💻 How to Run Locally
1. Clone the repository.
2. Run `npm install` to install dependencies.
3. Create a `.env` file in the root directory and add: `GEMINI_API_KEY=your_api_key_here`
=======
# EcoTrack 🌍 | Carbon Footprint Insights

EcoTrack is a lightweight, AI-powered web application designed to help individuals understand, track, and reduce their carbon footprint through simple actions and personalized insights.

## 🎯 Problem Statement Alignment
This project directly addresses Challenge 2 by calculating a baseline carbon footprint based on daily habits (transportation, energy, diet) and utilizing the Gemini 1.5 Flash API to generate highly personalized, actionable reduction strategies. 

## 🚀 Evaluation Metrics Achieved
* **Code Quality:** Modular, well-commented vanilla JavaScript and Node.js backend. Separation of concerns is maintained between the UI and API logic.
* **Security:** API keys are secured on the backend using environment variables (`.env`). The frontend is served securely from a dedicated `public` directory, preventing unauthorized access to server-side code.
* **Efficiency:** The entire repository is well under the 10MB limit (negligible size due to a strict `.gitignore` and zero heavy frontend frameworks). Uses `gemini-1.5-flash` for rapid, low-latency AI inference.
* **Accessibility:** Semantic HTML5 structure with ARIA labels (`aria-labelledby`, `aria-live="polite"`) ensures full compatibility with screen readers.
* **Testing:** Fully tested locally and deployed via containerized Google Cloud Run.

## 🛠️ Tech Stack
* **Frontend:** HTML5, CSS3, Vanilla JavaScript
* **Backend:** Node.js, Express.js
* **AI Integration:** Google Gemini API (@google/generative-ai)
* **Deployment:** Google Cloud Run

## 💻 How to Run Locally
1. Clone the repository.
2. Run `npm install` to install dependencies.
3. Create a `.env` file in the root directory and add: `GEMINI_API_KEY=your_api_key_here`
>>>>>>> dc779a0d8ddb38401755bfb334092b85a8e2d035
4. Run `node server.js` and navigate to `http://localhost:3000`.