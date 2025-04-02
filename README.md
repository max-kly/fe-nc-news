# 📝 NC NEWS - Blogging Platform

NC NEWS is a full-stack application consisting of **frontend** and **backend** parts.
This repository contains the **frontend** for the platform.

🔗 **Live Demo:** [NC NEWS](https://news-by-max-kly.netlify.app/)  
🔗 **Backend Repository:** [GitHub - NC NEWS Backend](https://github.com/max-kly/nc-news)

## Features 🌍
NC NEWS is a blog platform that allows users to:
- ✅ Create topics
- ✅ Create articles
- ✅ Leave comments
- ✅ Vote up or down articles
- ✅ Vote up or down comments

---

## 🔧 How Does It Work?

The application is powered by a **database of users, articles, topics, and comments**. The frontend is built with **ReactJS** and renders page components based on the visited route.  
Each time the page reloads, the application sends a request to `api/users/auth` to validate the user session using **JWT authentication**.

> [!CAUTION]
> This application stores JWT tokens in **local storage**, which is not the most secure practice for authentication.

---

## ⚙️ Tech Stack

- ⚡ **ReactJS**
- ⚡ **NodeJS**
- ⚡ **PostgreSQL**
- ⚡ **ExpressJS**
- ⚡ **Axios**
- ⚡ **Supabase**
- ⚡ **Render** (Backend hosting)
- ⚡ **Netlify** (Frontend hosting)

---

## ❗ Requirements

| Package        | Version  |
|---------------|---------|
| NodeJS        | `22.11.0` |
| Axios         | `1.7.9` |
| React         | `19.0.0` |
| React Router  | `7.1.5` |

---

## 👨‍💻 Installation

1. **Fork & Clone** this repository.
2. Open the terminal and install dependencies:
   ```sh
   npm install
   ```
3. Navigate to `src/api/config.js` and update `baseURL` with your actual API URL.
4. Start the application locally:
   ```sh
   npm run dev
   ```

---

## 📁 Project Structure

```
📦 NC NEWS
 ┣ 📂 public       # Media files and redirects
 ┣ 📂 src
 ┃ ┣ 📂 api        # Backend queries and Axios config
 ┃ ┣ 📂 components # UI components (Comments, Error, Header, etc.)
 ┃ ┣ 📂 pages      # Available pages (Articles, Topics, User profile, etc.)
 ┃ ┣ 📂 utils      # Helper functions unrelated to backend queries
 ┣ 📜 README.md    # This file
```

---

## ☁️ Deployment (Netlify)

1. Sign up or log in to [Netlify](https://www.netlify.com/).
2. Set up your team and create a new project, linking your GitHub account.
3. Install Netlify CLI:
   ```sh
   npm install -g netlify-cli
   ```
4. **[OPTIONAL]** If using your own backend, update `src/api/config.js` with your API base URL.
5. Build the project:
   ```sh
   npm run build
   ```
6. Deploy the application:
   ```sh
   netlify deploy --prod
   ```
7. When prompted, select an **existing project** and enter `dist` as the publishing directory.

---

## 🎓 Credits

This project was created as part of the **Digital Skills Bootcamp in Software Engineering** provided by [Northcoders](https://northcoders.com).
