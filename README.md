# 📝 NC NEWS - Blog platform
NC NEWS is a blog platform that allows users to:
- Create topics
- Create articles
- Leave comments
- Vote up or down articles
- Vote up or down comments
<br />
Application consists from 2 parts: backend and frontend<br />
This repo contains a frontend for blog platofrm<br />
Live demo is [here](https://news-by-max-kly.netlify.app/)<br />
Backend repo to take a look or clone is [here](https://github.com/max-kly/nc-news)<br />
## Tech stack ⚙️
- ⚡ ReactJS
- ⚡ NodeJS
- ⚡ PostgreSQL
- ⚡ ExpressJS
- ⚡ Axios
- ⚡ Supabase
- ⚡ Render
- ⚡ Netlify
## Requirements ❗️
- Node version is **v22.11.0**
- Axios version is **1.7.9**
- React version is **19.0.0**
- React Router version is **7.1.5**<br />
## Instructions 👨‍💻
1. Fork the repo and clone it down
2. Open up your terminal and run `npm install` to install all required packages
3. Run `npm run dev` to run NC NEWS locally<br />
## Project structure 📁
- `Public` ➡️ includes media and `_redirects` file to specify the folder as the root. This folder will be served as the root directery when you run website locally or on the production<br />
- `Src` ➡️ the React app itself and includes:
- - `api` ➡️ contains functions that make queries to backend and a config file for Axios where you should put your own base url if you have your own backend
- - `components` ➡️ contains separate elements like Comments, Error, Header, etc
- - `pages` ➡️ contains available pages where Components are included
- `utils` ➡️ contains helper functions that are not related to quering a backend
## Deployment ☁️
1. Go to the [Netlify](https://www.netlify.com) and create a new account or sign in to existing one
2. Set up your team and create a new project, connect your GitHub account
3. Install Netlify CLI running npm install netlify-cli -g command
4. `[OPTIONAL]` In case you have your own backend, open up `src/api/config.js` and change `baseURL` to your own backend URL with your own API.
5. Open up `root` directory in your terminal and run `npm run build` command to prepare your frontend for deployment
6. In the same directory run `netlify deploy --prod` command and choose an exisiting project
7. For publishing direcotry enter `dist`
<br />
<br />
<br />
<br />
This portfolio project was created as part of a Digital Skills Bootcamp in Software Engineering provided by [Northcoders](https://northcoders.com/)