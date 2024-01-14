# Simple SWAPI

`simple-swapi` is a JavaScript project that uses React + TypeScript + Vite + MUI + Storybook + Cypress, as well as
the [SWAPI API](https://swapi.dev) as the data source. Below are the used versions for each:

|                         Tool                          | Version | Description                                                         |
|:-----------------------------------------------------:|:-------:|:--------------------------------------------------------------------|
|              [React](https://react.dev)               | 18.2.0  | Library for web and native user interfaces                          |
|     [TypeScript](https://www.typescriptlang.org)      |  5.2.2  | JavaScript with syntax for types                                    |
|           [Vite](https://vitejs.dev/guide)            |  5.0.8  | Next Generation Frontend Tooling                                    |
|                [MUI](https://mui.com)                 | 5.15.4  | Intuitive React UI tools                                            |
| [React Testing Library](https://testing-library.com)  | 14.1.2  | React Testing Library                                               |
|               [Jest](https://jestjs.io)               |  x.x.x  | JavaScript Testing Framework                                        |
|         [Storybook](https://storybook.js.org)         |  x.x.x  | Frontend workshop for building UI components and pages in isolation |
|           [Cypress](https://www.cypress.io)           |  x.x.x  | Test. Automate. Accelerate.                                         |

## Local Deployment

### Prerequisites

#### node

Install `node` version **20.11.0**.

> Recommended is to use one of [nvm](https://github.com/nvm-sh/nvm) or [n](https://github.com/tj/n#installation) for
> installing **node**. Verify the version by running
> ```shell
> node --version
> ```

#### yarn

Install `yarn` as described at [yarnpkg](https://yarnpkg.com/getting-started/install).

## Do it yourself from scratch!

This project is created as an exercise for knowledge refreshing. Please feel free to do it yourself from scratch by
applying the following:

### 1. Create the project

Create the project as described in [Getting Started | Vite](https://vitejs.dev/guide/)
or [React Tutorial for Beginners](https://www.youtube.com/watch?v=SqcY0GlETPk). Alternatively, you run the following
command to create it:

```shell
yarn create vite simple-swapi --template react-ts
```

> See [Prerequisites](#yarn) Section for installing yarn.

Having created the project, switch to the project directory `simple-swapi` and run it as instructed on the command line.

```shell
cd simple-swapi
yarn
yarn dev
```

### 2. Add MUI

Add MUI as described in [Material UI](https://mui.com/material-ui)

```shell
yarn add @mui/material @emotion/react @emotion/styled
```

Once MUI is installed, you can remove
- the directory `public` together with its contents
- the directory `src/assets` together with its contents
- the file `src/App.css`
- the file `src/index.css`
- the following lines from `src/App.tsx` 
  - `import reactLogo from './assets/react.svg'`
  - `import viteLogo from '/vite.svg'`
  - `import './App.css'`
- the `div` from `src/App.tsx` where `viteLogo` and `reactLogo` are rendered
- the line `import './index.css'` from `src/main.tsx`

> How to use the Material UI is described in detail in [MUI documentation](https://mui.com/material-ui/all-components).

### 3. Add React Testing Library

Add React Testing Library (RTL) as described in [RTL documentation](https://testing-library.com/docs/react-testing-library/intro).

```shell
yarn add --dev @testing-library/react
```









