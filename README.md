# react-contributors

> Small and simple React component to display a fully responsive list of your project's contributors with info gathered from their GitHub profile.

[![NPM](https://img.shields.io/npm/v/react-contributors.svg)](https://www.npmjs.com/package/react-contributors) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Demo

Live demo: https://evert-arias.github.io/react-contributors/

## Install

```bash
npm install --save react-contributors
```

## Usage

```jsx
import React, { Component } from "react";

import Contributors from "react-contributors";

class App extends Component {
  render() {
    return <Contributors owner="evert-arias" repo="EasyButton" />;
  }
}
```

You have to pass the following two props to the component:

**owner**: Username of the repository owner.

**repo**: The name of the repository you which to get the contributors from.

## License

MIT © [Evert Arias](https://github.com/evert-arias)
