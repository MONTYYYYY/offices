# Spenco Tech Assessment

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Brief
 "Create an application that satisfies the following cases. The system must allow users to create and manage office space. The home page must be a view of current offices and a brief summary of the occupants. A user must then be able to add a new office. Once an office is added it must appear on the home page. If a user clicks on the office they must be able to view the office details including individuals who work at the office. The user must be able to create, update, and delete office workers. There must be a search bar on the office view page. This component must filter the list of users within the office as the user is typing. The system is designed for phones. Styles need to be put into place to stop the main view from getting too wide."
 
 - Figma : https://www.figma.com/file/zjxFBi6BYz33lIOvm0kufG/Intermediate-Tech-Assessment?node-id=2%3A1140
 - Ojective link : https://doc.clickup.com/2607467/p/h/2fjbb-6924/1724629f64756b8/2fjbb-6984
 - Deployment Link (Hosted on Netflify) : https://specno-offices-montlamedi.netlify.app/ 

## Notes

- This app is written with React and Typescript.
- For state management Redux Toolkit is used (https://redux-toolkit.js.org/).
- The app is responsive across all screen sizes.
- I hardcoded the intial data for Staff and Offices. 

## Issues
Issues there were no designs for tablet and Desktop. Therefore I was no sure of expected output. I tried to make it look as nice as possible.
There were also a 2 design mistakes i noticed on the figma : Examples are 
- 'Are you sure you want to Delete Staff Member?' has incorrect button names 'Keep Office' and 'Delete Office'.
- The number of avatars icons on the edit or add staff modal does not match the total avatars provided on design.

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
