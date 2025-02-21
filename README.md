# NC NEWS - Blog platform
NC NEWS is a blog platform that allows users to:
- Create topics
- Create articles
- Leave comments
- Vote up or down articles
- Vote up or down comments
This repo contains a frontend for blog platofrm<br />
Live demo is [here](https://news-by-max-kly.netlify.app/)<br />
Backend repo to take a look or clone is [here](https://github.com/max-kly/nc-news)<br />
## Tech stack
- Frontend: React, Axios
- Backend: NodeJS, ExpressJS, Axios<br />
## Requirements
- Node version is **v22.11.0**
- Axios version is **1.7.9**
- React version is **19.0.0**
- React version is **7.1.5**<br />
## Instructions
1. Fork the repo and clone it down
2. Open up your terminal and run `npm install` to install all required packages
3. Run `npm run dev` to run NC NEWS locally<br />
## Project structure
#### `Public` folder
Includes media and `_redirects` file to specify the folder as the root. This folder will be served as the root directery when you run website locally or on the production<br />
#### `Src` folder
The React app itself and includes:
- `api` folder -> Contains functions that make queries to backend and a config file for Axios where you should put your own base url if you have your own backend
- `components` folder -> Contains separate elements like Comments, Error, Header, etc
- `pages` folder -> Contains available pages where Components are included
- `utils` folder -> Contains helper functions that are not related to quering a backend
<br />
<br />
<br />
<br />
This portfolio project was created as part of a Digital Skills Bootcamp in Software Engineering provided by [Northcoders](https://northcoders.com/)