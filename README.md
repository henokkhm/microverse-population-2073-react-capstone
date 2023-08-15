<a name="readme-top"></a>

<!-- TABLE OF CONTENTS -->

# 📗 Table of Contents

- [📗 Table of Contents](#-table-of-contents)
- [Population 2073](#population-2073)
  - [🛠 Built With ](#-built-with-)
    - [Tech Stack ](#tech-stack-)
    - [Key Features ](#key-features-)
  - [🚀 Live Demo ](#-live-demo-)
  - [💻 Getting Started ](#-getting-started-)
    - [Prerequisites](#prerequisites)
    - [Setup](#setup)
    - [Install](#install)
    - [Usage](#usage)
    - [Run tests](#run-tests)
    - [Deployment](#deployment)
  - [👥 Authors ](#-authors-)
  - [🔭 Future Features ](#-future-features-)
  - [🤝 Contributing ](#-contributing-)
  - [⭐️ Show your support ](#️-show-your-support-)
  - [🙏 Acknowledgments ](#-acknowledgments-)
  - [📝 License ](#-license-)

<!-- PROJECT DESCRIPTION -->

# Population 2073<a name="about-project"></a>

*Have you ever wondered what the world's population will be like 50 years from now?* **Population 2073** is a Single Page App that displays the projected populations of all countries in the world in 2073. This app is the capstone project for Module 3 of the Full Stack Developer Program offered by [Microverse](https://www.microverse.org/).

The app gets its data from an [Express.js](https://expressjs.com/) API that [I developed](https://github.com/henokkhm/microverse-population-2073-backend) for the sake of this project. The population data was extracted from the official [United Nations World Population Prospects 2022](https://population.un.org/wpp/Download/Standard/MostUsed/). The reason I created the API myself is because the dataset provided by the UN is very large and it is impractical to fetch all of it to the front-end. 

This app was bootstrapped using [Create React App](https://github.com/facebook/create-react-app). It also uses [React Router](https://reactrouter.com/en/main) for client-side navigation and [Redux Toolkit](https://redux-toolkit.js.org/) for state management. 

## 🛠 Built With <a name="built-with"></a>

### Tech Stack <a name="tech-stack"></a>

<details>
  <summary>Client</summary>
  <ul>
    <li><a href="https://react.dev/">React</a></li>
    <li><a href="https://reactrouter.com/en/main/">React Router v6</a></li>
    <li><a href="https://redux-toolkit.js.org/">Redux Toolkit</a></li>
    <li><a href="https://developer.mozilla.org/en-US/docs/Web/HTML">HTML</a></li>
    <li><a href="https://developer.mozilla.org/en-US/docs/Web/CSS">CSS</a></li>
    <li><a href="https://create-react-app.dev/docs/adding-a-css-modules-stylesheet/">CSS Modules</a></li>
  </ul>
</details>

<details>
  <summary>Linters</summary>
  <ul>
    <li><a href="https://eslint.org/">ESLint</a></li>
    <li><a href="https://stylelint.io/">Stylelint</a></li>
  </ul>
</details>

<details>
  <summary>Deployment</summary>
  <ul>
    <li><a href="https://app.netlify.com">Netlify</a></li>
  </ul>
</details>
<!-- Features -->

### Key Features <a name="key-features"></a>

- **Homepage:** displays the populations of the six continents in 2073. 
- **Details page:** displays the populations of all countries in the selected continent in 2073.


<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 🚀 Live Demo <a name="live-demo"></a>


- [Live Demo Link](https://project-setup--guileless-cactus-bdb61e.netlify.app/)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->

## 💻 Getting Started <a name="getting-started"></a>

To get a local copy up and running, follow these steps.

### Prerequisites

In order to run this project you need:

- <a href="https://nodejs.org/en/download">Node.js</a>
- <a href="https://docs.npmjs.com/downloading-and-installing-node-js-and-npm">npm</a>

### Setup

Clone this repository to your desired folder:

```sh
  cd desired-folder
  git clone https://github.com/henokkhm/microverse-population-2073-react-capstone
```

### Install

Install this project with:

```sh
  cd microverse-population-2073-react-capstone
  npm install
```

### Usage

- To start the app in the development mode on your local machine, simply run:

`npm start`

Then open [http://localhost:3000](http://localhost:3000) to view it in your browser. The page will reload when you make changes. You may also see any lint errors in the console.

- To run the linters, run: 

`npm run lint`

### Run tests


- To run the tests, run the following script from the root of the project: 
  
`npm test`

This will launch the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.


### Deployment

This application is deployed on [Netlify](href="https://app.netlify.com). To get a new version deployed, simply commit or merge to the **development branch**. Netlify will take care of the **build step** and deploy the site automatically.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- AUTHORS -->

## 👥 Authors <a name="authors"></a>

👤 **Henok K Hailemariam**

- GitHub: [@henokkhm](https://github.com/henokkhm)
- Twitter: [@henokkhm](https://twitter.com/henokkhm)
- LinkedIn: [henokkhm](https://www.linkedin.com/in/henokkhm/)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- FUTURE FEATURES -->

## 🔭 Future Features <a name="future-features"></a>

- [ ] **Add populations of cities**

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTRIBUTING -->

## 🤝 Contributing <a name="contributing"></a>

Contributions, issues, and feature requests are welcome!

Feel free to check the [issues page](../../issues/).

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- SUPPORT -->

## ⭐️ Show your support <a name="support"></a>

If you like this project, you can contribute to it. You are also welcome to give it a star on GitHub.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ACKNOWLEDGEMENTS -->

## 🙏 Acknowledgments <a name="acknowledgements"></a>

I would like to thank Microverse for teaching and enforcing professional level practices.

I would also like to thank [Nelson Sakwa](https://www.behance.net/sakwadesignstudio) for creating the [UI design](https://www.behance.net/gallery/31579789/Ballhead-App-(Free-PSDs)) this project is based on, and sharing it under the  [Creative Commons license](https://creativecommons.org/licenses/by-nc/4.0/).

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LICENSE -->

## 📝 License <a name="license"></a>

This project is [MIT](./LICENSE) licensed.

<p align="right">(<a href="#readme-top">back to top</a>)</p>