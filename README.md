This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

---

## Things UI can do:

- On first render it should see the list of the first 5 stories from `topstories` by HackerNews/API and you can go through the pagination.
- You can select a story and it will open it in a new window.
- You can navigate to `Most Recent` page by clicking in the menu Most Recent and you will get the same behaviour and layout as Top Stories but the table will load `newsstories` instead.
- I've tested it on smaller devices down to iPhone 5s, obviously there are a couple of breakpoints that will help responsiveness but this is something to improve.
- In case of error a notification will be displayed so user knows that failed to load (this is not very pretty though)

---

## Live demo

Click
[here](https://master.d3417btaf17vpa.amplifyapp.com/)

---

## Things to improve

Due the time limitation there are a list of things I would improve.

- Filtering news by timestamp (this is due to API [Hacker-News/API](https://github.com/HackerNews/API) limitations at least I couldn't see a way to filter the list of storiesIds by timestamp).

- Testing and test coverage including adding automation tests

- Add [storybook](https://storybook.js.org/docs/guides/guide-react/) to the project.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
