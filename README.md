Random Quote Machine
======

An app that randomly generates motivation and productivity themed quotes from an extensive, handpicked list.

### Get Started

View online at https://nataliecardot.com/random-quote-machine/

### View locally
1. Clone or download this repository
2. Using a command line tool, navigate to the directory's location
3. Run `npm install`, which installs all modules listed as dependencies in `package.json`.
4. Run `npm start` to run the app in development mode, opening the app in your default browser. (The command causes node to look for a `scripts` object in your `package.json` file, which in this case specifies "react-scripts start."). You also may open the app on the local server by navigating to http://localhost:3000/ in your browser.

### Notes

Quotes are fetched from my [GitHub gist](https://gist.github.com/nataliecardot/0ca0878d2f0c4210e2ed87a5f6947ec7). (I'll be adding new ones; if you have any suggestions please let me know!)

This app was built using React. It was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), which installs the packages `react`, `react-dom`, and `react-scripts`. Additionally, `react-scripts` installs Babel, webpack, and `webpack-dev-server`, which provides auto-reload behavior, as well as provides a service worker.

To deploy to GitHub Pages, I used the `gh-pages` [package](https://www.npmjs.com/package/gh-pages), with the help of Create React App's [deployment guide](https://facebook.github.io/create-react-app/docs/deployment#github-pages-https-pagesgithubcom).
