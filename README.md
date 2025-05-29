# 🔐 CipherPuzzle

**CipherPuzzle** is a web-based puzzle game that challenges players to solve cipher-based puzzles across multiple levels. Built with HTML, CSS, and JavaScript, it leverages Firebase for authentication and Firestore for data storage.

🌐 Live Demo: [https://cipherpuzzle.netlify.app/](https://cipherpuzzle.netlify.app/)

---

## 📂 Project Structure

```
cipherpuzzle/
├── firebase-config.js
├── index.html
├── login.html
├── logout.html
├── profile.html
├── registration.html
├── style.css
├── profile_icon.png
└── README.md
```

---

## 🚀 Features

* User Registration and Authentication (Firebase Auth)
* User Profile with Display Name and Profile Picture
* Level Progression Tracking (Firestore)
* Responsive Design with Retro Aesthetics
* Hosted on Netlify for Fast and Reliable Access

---

## 🛠️ Setup Instructions

1. **Clone the Repository**

   ```bash
   git clone https://github.com/yourusername/cipherpuzzle.git
   cd cipherpuzzle
   ```

2. **Firebase Configuration**

   * Create a Firebase project at [https://console.firebase.google.com/](https://console.firebase.google.com/).
   * Enable **Authentication** (Email/Password) and **Firestore Database**.
   * Replace the placeholder Firebase configuration in `firebase-config.js` with your project's credentials:

     ```javascript
     const firebaseConfig = {
       apiKey: "YOUR_API_KEY",
       authDomain: "YOUR_AUTH_DOMAIN",
       projectId: "YOUR_PROJECT_ID",
       storageBucket: "YOUR_STORAGE_BUCKET",
       messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
       appId: "YOUR_APP_ID",
       measurementId: "YOUR_MEASUREMENT_ID"
     };
     ```

3. **Run Locally**

   You can use any local development server. For example, with Python:

   ```bash
   # Python 3.x
   python -m http.server 8000
   ```

   Then, navigate to `http://localhost:8000` in your browser.

---

## 📦 Deployment on Netlify

To deploy the project on Netlify:

1. **Create a New Site**

   * Log in to [Netlify](https://app.netlify.com/) and click on **"Add new site"**.
   * Choose **"Import an existing project"** and connect your GitHub repository.

2. **Configure Build Settings**

   * **Build Command**: (leave blank if not using a build tool)
   * **Publish Directory**: `/`

3. **Deploy**

   * Click **"Deploy Site"**.
   * Once deployed, your site will be live at `https://your-site-name.netlify.app/`.

For more details, refer to Netlify's official documentation: [Create deploys | Netlify Docs](https://docs.netlify.com/site-deploys/create-deploys/)

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).
