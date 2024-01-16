# Simple SWAPI

`simple-swapi` is a JavaScript project that uses React + TypeScript + Vite + MUI + React Testing Library (RTL) + Jest +
Storybook + Cypress, as well as the [Star Wars API](https://swapi.dev) (SWAPI) as the data source. Below are the used
versions for each:

|                         Tool                         | Version | Description                                                         |
|:----------------------------------------------------:|:-------:|:--------------------------------------------------------------------|
|              [React](https://react.dev)              | 18.2.0  | Library for web and native user interfaces                          |
|     [TypeScript](https://www.typescriptlang.org)     |  5.2.2  | JavaScript with syntax for types                                    |
|           [Vite](https://vitejs.dev/guide)           |  5.0.8  | Next Generation Frontend Tooling                                    |
|                [MUI](https://mui.com)                | 5.15.4  | Intuitive React UI tools                                            |
| [React Testing Library](https://testing-library.com) | 14.1.2  | React Testing Library                                               |
|              [Jest](https://jestjs.io)               | 29.7.0  | JavaScript Testing Framework                                        |
|        [Storybook](https://storybook.js.org)         |  7.6.8  | Frontend workshop for building UI components and pages in isolation |
|          [Cypress](https://www.cypress.io)           | 13.6.2  | Test. Automate. Accelerate.                                         |

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

Add React Testing Library as described
in [RTL documentation](https://testing-library.com/docs/react-testing-library/intro).

```shell
yarn add --dev @testing-library/react
```

### 4. Add Jest

You can refer to the official documentation [Getting Started](https://jestjs.io/docs/getting-started) on the Jest Web
page. Alternatively, you can use one of the available tutorial articles in Internet. I have
used [Quick Jest Setup With ViteJS, React, & TypeScript](https://codingwithmanny.medium.com/quick-jest-setup-with-vitejs-react-typescript-82f325e4323f)
for this project.

#### Add dependencies

```shell
yarn add --dev jest @types/jest
yarn add --dev ts-node ts-jest
yarn add --dev @testing-library/react @testing-library/user-event
yarn add --dev identity-obj-proxy
yarn add --dev @testing-library/jest-dom

yarn add --dev jest-environment-jsdom
```

#### Add script

In `package.json` add [script](package.json#L11) `test` for running the command `jest`.

#### Add configuration

Add Jest configuration files [jest.config.ts](jest.config.ts) and [jest.setup.ts](jest.setup.ts).

### 5. Test MUI, React Testing Library and Jest

Let's test MUI, React Testing Library and Jest by adding the React component `Categories`.

Please add the component `Categories` from [src/components/Categories](src/components/Categories) to this project, and
run the tests:

```shell
yarn test
```

> Set `esModuleInterop` to **true** in [tsconfig.json](tsconfig.json) to get rid of the warning while running the tests.

### 6. Add Storybook

As explained in the [Storybook documentation](https://storybook.js.org/docs/builders/vite), _if you ran npx
storybook@latest init to include Storybook in your Vite application, the builder is already installed and configured for
you._

```shell
npx storybook@latest init
```

> The `npx` command installs additional files as example. Feel free to remove everything
> under [src/stories](src/stories) and create your own story for component `Categories` as
> in [Categories.stories.ts](src/stories/Categories.stories.ts).

Run the Storybook using the following command:

```shell
yarn storybook
```

### 7. Add Cypress

See [Installing Cypress](https://docs.cypress.io/guides/getting-started/installing-cypress) for instructions:

```shell
yarn add --dev cypress
```

Once the dependency `cypress` is installed, add a new script `cypress` for running `cypress open` via which you can
complete the configuration:

```shell
yarn cypress
```

> If you have problems with dependency resolution, you can clean the yarn cache, and reinstall all node_modules.
> ```shell
> yarn clean cache
> rm -rf node_modules
> rm yarn.lock
> yarn
> ```


