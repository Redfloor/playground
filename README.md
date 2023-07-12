# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `cd server && npm run compile && node ./dist/index.js`

Runs the server. No idea why the builtin start script is failing and fixing it is not a priority at this time.

## Useful Reading

The server runs on Graphql code generator. Full documentation for this can be found here:

https://the-guild.dev/graphql/codegen/docs/getting-started

The generate script and codegen.yml can include a workaround to solve a common issue with es modules - if noRequire is false or you'd rather use yaml, see the below.

https://lightrun.com/answers/dotansimha-graphql-code-generator-using-codegents-in-an-esm-project-causes-cosmiconfig-typescript-loader-to-throw-an-es-modules-is-n

Make sure you have ts installed globally:

```npm i -g typescript```