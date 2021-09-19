---
sidebar_position: 1
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Link from '@docusaurus/Link';

# Creating a project

React native projects can be created generally using two Common CLi's **Exo CLI** and **React Native CLI** we will be looking more into the React native cli since we are looking into production apps we sometimes need to build our own native modules react native cli gives us more power in building native modules

If you are curious about differnce of expo and react native cli here is a link to a stackoverflow **<Link to="https://stackoverflow.com/questions/39170622/what-is-the-difference-between-expo-and-react-native">thread</Link>!**

<!--
- `src/pages/index.js` -> `localhost:3000/`
- `src/pages/foo.md` -> `localhost:3000/foo`
- `src/pages/foo/bar.js` -> `localhost:3000/foo/bar` -->

### React native CLI

<!-- Create a file at `src/pages/my-react-page.js`:

```jsx title="src/pages/my-react-page.js"
import React from "react";
import Layout from "@theme/Layout";

export default function MyReactPage() {
  return (
    <Layout>
      <h1>My React page</h1>
      <p>This is a React page</p>
    </Layout>
  );
}
``` -->

React Native has a built-in command line interface, which you can use to generate a new project. You can access it without installing anything globally using npx, which ships with Node.js. Let's create a new React Native project called "AwesomeProject":

<div>
  <img align="right" width="283" src="https://archive.reactnative.dev/img/homepage/phones.png" />
</div>

<!--
<Tabs
groupId="environment"
defaultValue="np"
values={[
{label: 'npm', value: 'np'},
{label: 'Yarn', value: 'yn'}
]}>
<TabItem value="np">

```bash
npm install -g expo-cli
```

</TabItem>

<TabItem value="yn">

```bash
yarn global add expo-cli
```

</TabItem>
</Tabs> -->

```bash
npx react-native init Myapp
```

### Using a specific version

If you want to use a specific version of react native for building the project you can use the syntax

```bash
npx react-native init Myapp --version X.XX.X
```

### Using a language template

You can also use --template argument to create a project to a specific language like typescript

```bash
npx react-native init My-ts-App --template react-native-template-typescript
```

<br></br>

:::tip Just go with Typescript for

- OOP’s Strength
- Comprehensive IDE support
